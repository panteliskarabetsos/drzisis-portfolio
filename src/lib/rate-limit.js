// Simple in-memory rate limiter for the contact form.
//
// Counts are kept per server instance, so on a host that runs several
// instances (such as Vercel) this limits bursts rather than guaranteeing an
// exact global limit. It needs no external service.

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;

export const CONTACT_RATE_LIMITS = [
  { windowMs: 10 * MINUTE, max: 3 },
  { windowMs: 24 * HOUR, max: 10 },
];

const LONGEST_WINDOW_MS = Math.max(
  ...CONTACT_RATE_LIMITS.map((limit) => limit.windowMs)
);

// Upper bound on tracked clients so memory use stays small.
const MAX_TRACKED_CLIENTS = 5000;

const submissionsByClient = new Map();

function pruneOldEntries(now) {
  for (const [client, timestamps] of submissionsByClient) {
    const recent = timestamps.filter(
      (time) => now - time < LONGEST_WINDOW_MS
    );

    if (recent.length === 0) {
      submissionsByClient.delete(client);
    } else {
      submissionsByClient.set(client, recent);
    }
  }
}

/**
 * Checks whether `clientKey` may send another message and, if so, records it.
 * Returns { allowed: true } or { allowed: false, retryAfterSeconds }.
 */
export function consumeContactRateLimit(clientKey, now = Date.now()) {
  if (submissionsByClient.size > MAX_TRACKED_CLIENTS) {
    pruneOldEntries(now);
  }

  if (submissionsByClient.size > MAX_TRACKED_CLIENTS) {
    // Still too many clients after pruning: drop the oldest entries.
    const excess = submissionsByClient.size - MAX_TRACKED_CLIENTS;
    const oldestClients = [...submissionsByClient.keys()].slice(0, excess);

    for (const client of oldestClients) {
      submissionsByClient.delete(client);
    }
  }

  const timestamps = (submissionsByClient.get(clientKey) || []).filter(
    (time) => now - time < LONGEST_WINDOW_MS
  );

  let retryAfterMs = 0;

  for (const { windowMs, max } of CONTACT_RATE_LIMITS) {
    const inWindow = timestamps.filter((time) => now - time < windowMs);

    if (inWindow.length >= max) {
      const oldestInWindow = Math.min(...inWindow);
      retryAfterMs = Math.max(
        retryAfterMs,
        oldestInWindow + windowMs - now
      );
    }
  }

  if (retryAfterMs > 0) {
    submissionsByClient.set(clientKey, timestamps);

    return {
      allowed: false,
      retryAfterSeconds: Math.ceil(retryAfterMs / 1000),
    };
  }

  timestamps.push(now);
  submissionsByClient.delete(clientKey);
  submissionsByClient.set(clientKey, timestamps);

  return { allowed: true };
}

export function getClientKey(request) {
  const realIp = request.headers.get("x-real-ip");

  if (realIp) {
    return realIp.trim();
  }

  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return "unknown";
}

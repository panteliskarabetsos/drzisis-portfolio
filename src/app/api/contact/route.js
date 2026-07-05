import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

let transporter = null;

function getTransporter() {
  if (transporter) {
    return transporter;
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_PASS;

  if (!gmailUser || !gmailPass) {
    throw new Error("Missing Gmail SMTP configuration.");
  }

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,

    auth: {
      user: gmailUser,
      pass: gmailPass,
    },

    connectionTimeout: 15_000,
    greetingTimeout: 10_000,
    socketTimeout: 30_000,
  });

  return transporter;
}

function normalizeSingleLine(value, maxLength) {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, maxLength);
}

function normalizeMessage(value) {
  return value
    .trim()
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n");
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function createEmailHtml({
  name,
  email,
  message,
  submittedAt,
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);

  const safeMessage = escapeHtml(message).replace(
    /\n/g,
    "<br />"
  );

  const replyLink = `mailto:${encodeURIComponent(email)}`;

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />

        <title>New Website Inquiry</title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background-color: #f5f5f4;
          font-family: Arial, Helvetica, sans-serif;
          color: #1c1917;
          -webkit-text-size-adjust: 100%;
        "
      >
        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="
            width: 100%;
            background-color: #f5f5f4;
          "
        >
          <tr>
            <td
              align="center"
              style="
                padding: 40px 16px;
              "
            >
              <table
                role="presentation"
                width="640"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  width: 100%;
                  max-width: 640px;
                  border-collapse: collapse;
                "
              >
                <!-- TOP META -->
                <tr>
                  <td
                    style="
                      padding: 0 4px 14px 4px;
                    "
                  >
                    <table
                      role="presentation"
                      width="100%"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                    >
                      <tr>
                        <td
                          style="
                            color: #78716c;
                            font-size: 10px;
                            font-weight: 700;
                            letter-spacing: 2px;
                            text-transform: uppercase;
                          "
                        >
                          DR. MARIOS ZISIS
                        </td>

                        <td
                          align="right"
                          style="
                            color: #a8a29e;
                            font-size: 10px;
                            letter-spacing: 1px;
                          "
                        >
                          ${submittedAt}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- HEADER -->
                <tr>
                  <td
                    style="
                      background-color: #11110f;
                      padding: 42px 44px 40px 44px;
                    "
                  >
                    <table
                      role="presentation"
                      width="100%"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                    >
                      <tr>
                        <td>
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                          >
                            <tr>
                              <td
                                style="
                                  width: 30px;
                                  border-top: 1px solid #67e8f9;
                                "
                              >
                                &nbsp;
                              </td>

                              <td
                                style="
                                  padding-left: 12px;
                                  color: #67e8f9;
                                  font-size: 9px;
                                  font-weight: 700;
                                  letter-spacing: 2.2px;
                                  text-transform: uppercase;
                                "
                              >
                                WEBSITE CONTACT
                              </td>
                            </tr>
                          </table>

                          <h1
                            style="
                              margin: 20px 0 0 0;
                              color: #ffffff;
                              font-size: 38px;
                              line-height: 1.08;
                              font-weight: 600;
                              letter-spacing: -1.6px;
                            "
                          >
                            New professional
                            <br />

                            <span
                              style="
                                color: #78716c;
                              "
                            >
                              inquiry received.
                            </span>
                          </h1>

                          <p
                            style="
                              margin: 22px 0 0 0;
                              max-width: 430px;
                              color: #a8a29e;
                              font-size: 14px;
                              line-height: 1.7;
                            "
                          >
                            A new message has been submitted through the
                            contact form on drzisis.com.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- CONTACT DETAILS -->
                <tr>
                  <td
                    style="
                      background-color: #ffffff;
                      padding: 0 44px;
                    "
                  >
                    <table
                      role="presentation"
                      width="100%"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                    >
                      <!-- NAME -->
                      <tr>
                        <td
                          width="36"
                          valign="middle"
                          style="
                            padding: 27px 0;
                            border-bottom: 1px solid #e7e5e4;
                            color: #a8a29e;
                            font-size: 9px;
                          "
                        >
                          01
                        </td>

                        <td
                          width="115"
                          valign="middle"
                          style="
                            padding: 27px 0;
                            border-bottom: 1px solid #e7e5e4;
                            color: #78716c;
                            font-size: 9px;
                            font-weight: 700;
                            letter-spacing: 1.5px;
                            text-transform: uppercase;
                          "
                        >
                          Full Name
                        </td>

                        <td
                          valign="middle"
                          style="
                            padding: 27px 0;
                            border-bottom: 1px solid #e7e5e4;
                            color: #1c1917;
                            font-size: 16px;
                            font-weight: 600;
                          "
                        >
                          ${safeName}
                        </td>
                      </tr>

                      <!-- EMAIL -->
                      <tr>
                        <td
                          width="36"
                          valign="middle"
                          style="
                            padding: 27px 0;
                            border-bottom: 1px solid #e7e5e4;
                            color: #a8a29e;
                            font-size: 9px;
                          "
                        >
                          02
                        </td>

                        <td
                          width="115"
                          valign="middle"
                          style="
                            padding: 27px 0;
                            border-bottom: 1px solid #e7e5e4;
                            color: #78716c;
                            font-size: 9px;
                            font-weight: 700;
                            letter-spacing: 1.5px;
                            text-transform: uppercase;
                          "
                        >
                          Email
                        </td>

                        <td
                          valign="middle"
                          style="
                            padding: 27px 0;
                            border-bottom: 1px solid #e7e5e4;
                          "
                        >
                          <a
                            href="${replyLink}"
                            style="
                              color: #0e7490;
                              font-size: 16px;
                              font-weight: 600;
                              text-decoration: none;
                            "
                          >
                            ${safeEmail}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- MESSAGE -->
                <tr>
                  <td
                    style="
                      background-color: #ffffff;
                      padding: 38px 44px 44px 44px;
                    "
                  >
                    <p
                      style="
                        margin: 0;
                        color: #0e7490;
                        font-size: 9px;
                        font-weight: 700;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                      "
                    >
                      03 · MESSAGE
                    </p>

                    <div
                      style="
                        margin-top: 20px;
                        border-left: 2px solid #0e7490;
                        background-color: #f8f8f6;
                        padding: 25px 26px;
                      "
                    >
                      <p
                        style="
                          margin: 0;
                          color: #44403c;
                          font-size: 15px;
                          line-height: 1.85;
                        "
                      >
                        ${safeMessage}
                      </p>
                    </div>

                    <!-- REPLY BUTTON -->
                    <table
                      role="presentation"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      style="
                        margin-top: 32px;
                      "
                    >
                      <tr>
                        <td
                          style="
                            border-radius: 999px;
                            background-color: #11110f;
                          "
                        >
                          <a
                            href="${replyLink}"
                            style="
                              display: inline-block;
                              padding: 15px 24px;
                              color: #ffffff;
                              font-size: 13px;
                              font-weight: 700;
                              text-decoration: none;
                            "
                          >
                            Reply to ${safeName}
                            &nbsp;&nbsp; ↗
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                  <td
                    style="
                      background-color: #0e7490;
                      padding: 24px 44px;
                    "
                  >
                    <table
                      role="presentation"
                      width="100%"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                    >
                      <tr>
                        <td
                          valign="middle"
                          style="
                            color: #cffafe;
                            font-size: 10px;
                            line-height: 1.6;
                          "
                        >
                          Sent securely through the contact form
                          <br />
                          on drzisis.com
                        </td>

                        <td
                          align="right"
                          valign="middle"
                          style="
                            color: #67e8f9;
                            font-size: 10px;
                            font-weight: 700;
                            letter-spacing: 1.4px;
                            text-transform: uppercase;
                          "
                        >
                          MEDICAL PORTFOLIO
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function createEmailText({
  name,
  email,
  message,
  submittedAt,
}) {
  return `
NEW WEBSITE CONTACT

Dr. Marios Zisis
drzisis.com

Submitted: ${submittedAt}

NAME
${name}

EMAIL
${email}

MESSAGE
${message}

---

Reply directly to this email to contact ${name} at ${email}.
  `.trim();
}

export async function POST(request) {
  try {
    const contentType =
      request.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid content type.",
        },
        {
          status: 415,
        }
      );
    }

    let body;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request body.",
        },
        {
          status: 400,
        }
      );
    }

    const { name, email, message } = body ?? {};

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email and message are required.",
        },
        {
          status: 400,
        }
      );
    }

    const normalizedName = normalizeSingleLine(
      name,
      MAX_NAME_LENGTH
    );

    const normalizedEmail = normalizeSingleLine(
      email,
      MAX_EMAIL_LENGTH
    ).toLowerCase();

    const normalizedMessage = normalizeMessage(message);

    if (
      !normalizedName ||
      !normalizedEmail ||
      !normalizedMessage
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    if (name.trim().length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          error: "Name is too long.",
        },
        {
          status: 400,
        }
      );
    }

    if (email.trim().length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          error: "Email address is too long.",
        },
        {
          status: 400,
        }
      );
    }

    if (normalizedMessage.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          error: "Message is too long.",
        },
        {
          status: 400,
        }
      );
    }

    if (!isValidEmail(normalizedEmail)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    const gmailUser = process.env.GMAIL_USER;

    const recipient =
      process.env.CONTACT_TO || "mzisis01@gmail.com";

    if (!gmailUser) {
      throw new Error("GMAIL_USER is not configured.");
    }

    const submittedAt = new Intl.DateTimeFormat("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Europe/Athens",
    }).format(new Date());

    const smtpTransporter = getTransporter();

    const result = await smtpTransporter.sendMail({
      from: {
        name: "Dr. Marios Zisis Website",
        address: gmailUser,
      },

      to: recipient,

      replyTo: {
        name: normalizedName,
        address: normalizedEmail,
      },

      subject: `New website inquiry — ${normalizedName}`,

      text: createEmailText({
        name: normalizedName,
        email: normalizedEmail,
        message: normalizedMessage,
        submittedAt,
      }),

      html: createEmailHtml({
        name: normalizedName,
        email: normalizedEmail,
        message: normalizedMessage,
        submittedAt,
      }),
    });

    console.info("Contact email sent.", {
      messageId: result.messageId,
    });

    return NextResponse.json(
      {
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact API route error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          "Your message could not be sent. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}
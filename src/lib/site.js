// Canonical site details used for metadata, the sitemap and structured data.
// drzisis.com redirects to www.drzisis.com, so www is the canonical host.
export const SITE_URL = "https://www.drzisis.com";

export const SITE_NAME = "Dr. Marios Zisis";

export const SITE_TITLE = "Dr. Marios Zisis | Resident Doctor & Aspiring Cardiologist";

export const SITE_DESCRIPTION =
  "Dr. Marios Zisis is a resident doctor in Athens, Greece, focused on cardiology, cardiovascular prevention, patient-centered care and clinical research.";

export const PROFILE_LINKS = [
  "https://www.linkedin.com/in/marioszisis/",
  "https://scholar.google.com/citations?user=zYnbSksAAAAJ",
];

// Builds page metadata with a canonical URL and matching Open Graph and
// Twitter fields. Child segments replace (not merge) the parent's openGraph
// object, so each page needs the full set.
const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Dr. Marios Zisis, Resident Doctor and Aspiring Cardiologist",
};

export function pageMetadata({ title, description, path }) {
  const ogTitle = title ? `${title} | ${SITE_NAME}` : SITE_TITLE;

  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      type: path === "/" ? "profile" : "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

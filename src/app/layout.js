import "./globals.css";
import { Outfit } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import {
  PROFILE_LINKS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  pageMetadata,
} from "@/lib/site";

// Load Outfit font properly
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  ...pageMetadata({ description: SITE_DESCRIPTION, path: "/" }),
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Marios Zisis",
      honorificPrefix: "Dr.",
      jobTitle: "Resident Doctor",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}/profile-img.jpg`,
      email: "mailto:contact@drzisis.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Athens",
        addressCountry: "GR",
      },
      knowsAbout: [
        "Cardiology",
        "Cardiovascular prevention",
        "Valvular heart disease",
        "Cardiometabolic health",
        "Echocardiography",
        "Clinical research",
      ],
      sameAs: PROFILE_LINKS,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans text-stone-800 flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

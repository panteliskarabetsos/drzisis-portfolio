import "./globals.css";
import { Outfit } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

// Load Outfit font properly
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Dr. Marios Zisis | Cardiologist",
  description: "Medical graduate dedicated to cardiology and patient-centered care.",
  openGraph: {
    title: "Dr. Marios Zisis | Cardiologist",
    description: "Medical graduate dedicated to cardiology and patient-centered care",
    url: "https://drzisis.com",
    siteName: "Dr. Marios Zisis",
    images: [
      {
        url: "https://drzisis.com/favicon.ico", // Path to Open Graph image
        width: 1200,
        height: 630,
        alt: "Dr. Marios Zisis | Cardiologist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dr. Marios Zisis",
              "image": "https://drzisis.com/profile-img.jpg",
              "jobTitle": "Cardiologist",
              "url": "https://drzisis.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Athens",
                "addressCountry": "GR",
              },
              "email": "mailto:mzisis01@gmail.com",
              "description":
                "Recent medical graduate with a passion for cardiology, preventive care, and patient-centered clinical practice.",
            }),
          }}
        />
      </body>
    </html>
  );
}

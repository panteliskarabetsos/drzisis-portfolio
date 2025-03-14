import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Domine } from "next/font/google";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { Montserrat } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const domine = Domine({ subsets: ["latin"], variable: "--font-domine" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // adjust weights to your preference
  variable: "--font-montserrat",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dr. Marios Zisis | Cardiologist ",
  description: "Recent medical graduate with a passion for cardiology and patient-centered care.",
  openGraph: {
    title: "Dr. Marios Zisis | Cardiologist",
    description: "Medical graduate dedicated to cardiology excellence and compassionate healthcare.",
    url: "https://drzisis.com",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
    <body className="font-sans text-stone-800 flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </body>
  </html>
  );
}

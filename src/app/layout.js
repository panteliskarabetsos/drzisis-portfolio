import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Domine } from "next/font/google";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { Montserrat } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
  title: "Dr. Marios Zisis | Cardiologist",
  description: "Cardiologist in Athens, Greece",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
    <body className="font-sans text-stone-800"> 
      <Header />
      {children} 
      <Footer />
      </body>
  </html>
  );
}

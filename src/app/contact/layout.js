import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Dr. Marios Zisis about research collaborations, academic opportunities or professional inquiries.",
  path: "/contact",
});

export default function ContactLayout({ children }) {
  return children;
}

import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About",
  description:
    "The training, clinical experience and career milestones of Dr. Marios Zisis, a resident doctor in Athens with a focus on cardiology.",
  path: "/about",
});

export default function AboutLayout({ children }) {
  return children;
}

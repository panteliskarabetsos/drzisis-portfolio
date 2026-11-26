import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Research",
  description:
    "Publications and research interests of Dr. Marios Zisis in valvular heart disease, cardiometabolic health and ECMO-related stroke.",
  path: "/research",
});

export default function ResearchLayout({ children }) {
  return children;
}

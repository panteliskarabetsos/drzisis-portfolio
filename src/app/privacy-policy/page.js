import { pageMetadata } from "@/lib/site";
import LegalLayout from "../components/legal-layout";
import {
  LegalContactCard,
  LegalLink,
  LegalList,
  LegalNote,
} from "../components/legal-content";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Dr. Marios Zisis collects, uses and protects information sent through this website.",
  path: "/privacy-policy",
});

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          Welcome to the website of <strong>Dr. Marios Zisis</strong>. I am
          committed to protecting your privacy and handling your personal
          information with care. This Privacy Policy explains how I collect,
          use and protect information when you use this website.
        </p>
        <p>
          By using this website, you agree to the collection and use of
          information in accordance with this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "information-i-collect",
    title: "Information I Collect",
    content: (
      <>
        <p>
          The website is primarily informational. The only personal data
          collected is what you voluntarily provide through the{" "}
          <strong>contact form</strong>:
        </p>
        <LegalList
          items={[
            <>
              <strong>Full Name</strong>: used to address you in my response.
            </>,
            <>
              <strong>Email Address</strong>: used to reply to your inquiry.
            </>,
            <>
              <strong>Message Content</strong>: used to understand and respond
              to your request.
            </>,
          ]}
        />
        <LegalNote>
          I kindly ask you <strong>not</strong> to submit sensitive personal
          information (for example detailed medical records, ID numbers,
          financial data or passwords) through the contact form. This website
          is not intended for managing medical records or emergencies.
        </LegalNote>
      </>
    ),
  },
  {
    id: "how-i-use-your-information",
    title: "How I Use Your Information",
    content: (
      <>
        <p>I use the information you provide for the following purposes:</p>
        <LegalList
          items={[
            "To read and respond to your inquiries and messages.",
            "To communicate with you regarding your request or follow-up questions.",
            "To maintain a basic record of communications for reference and continuity.",
          ]}
        />
        <p>
          The legal basis for this processing is my legitimate interest in
          replying to messages that you choose to send me.
        </p>
        <p>
          I <strong>do not</strong> use your contact details for newsletters,
          advertising or marketing campaigns, and I do <strong>not</strong>{" "}
          profile or track visitors.
        </p>
      </>
    ),
  },
  {
    id: "data-storage-and-security",
    title: "Data Storage & Security",
    content: (
      <>
        <p>I take reasonable steps to protect your personal information:</p>
        <LegalList
          items={[
            <>
              When you submit the contact form, your message is sent securely
              to my <strong>email inbox</strong>. It is{" "}
              <strong>not stored in a database</strong> on this website.
            </>,
            <>
              The website uses <strong>HTTPS</strong> to help protect your data
              while it is in transit.
            </>,
            "Access to the email account where messages are received is restricted and protected by industry-standard security measures.",
          ]}
        />
        <p>
          Despite these efforts, no method of transmission or storage over the
          internet can be guaranteed to be 100% secure.
        </p>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "Data Sharing & Third-Party Services",
    content: (
      <>
        <p>I respect your privacy and handle your data carefully:</p>
        <LegalList
          items={[
            <>
              I <strong>do not sell, rent or trade</strong> your personal data
              to third parties.
            </>,
            "Your message is used only for the purpose of communicating with you.",
            <>
              Contact form submissions are delivered via an{" "}
              <strong>email service provider</strong> (e.g. Gmail). That
              provider processes emails according to its own privacy and
              security practices.
            </>,
            <>
              The website is run by a third-party{" "}
              <strong>hosting provider</strong>, which may process technical
              data such as IP addresses in its server logs in order to deliver
              and secure the website.
            </>,
          ]}
        />
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Tracking Technologies",
    content: (
      <p>
        This website currently <strong>does not</strong> use cookies,
        analytics tools or third-party tracking technologies. If this changes
        in the future, this Privacy Policy will be updated to reflect that.
      </p>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <>
        <p>
          I keep email communications from the contact form only for as long
          as reasonably necessary:
        </p>
        <LegalList
          items={[
            <>
              In general, I retain contact form submissions for up to{" "}
              <strong>6 months</strong> for reference and to follow up on your
              inquiry.
            </>,
            "Emails may be deleted earlier if they are no longer needed, or kept slightly longer if required for legitimate reasons (for example, if a discussion is ongoing).",
          ]}
        />
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: (
      <>
        <p>
          Under the EU General Data Protection Regulation (GDPR), you have the
          right to:
        </p>
        <LegalList
          items={[
            "Access the personal information I hold about you.",
            "Request correction of inaccurate information.",
            "Request deletion of your personal information.",
            "Object to, or ask me to restrict, the processing of your data.",
            "Receive your data in a portable format, where applicable.",
          ]}
        />
        <p>
          If you would like to exercise any of these rights, please contact me
          using the email address below. I will do my best to respond within a
          reasonable timeframe.
        </p>
        <p>
          You also have the right to lodge a complaint with the{" "}
          <LegalLink href="https://www.dpa.gr" external>
            Hellenic Data Protection Authority
          </LegalLink>
          .
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Privacy Policy",
    content: (
      <p>
        I may update this Privacy Policy from time to time, for example to
        reflect changes to the website or to legal requirements. Any updates
        will be posted on this page with an updated{" "}
        <strong>Effective Date</strong> at the top.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <>
        <p>
          If you have any questions or concerns about this Privacy Policy or
          how your data is handled, please contact me by email.
        </p>
        <LegalContactCard />
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy"
      accent="Policy."
      effectiveDate="November 25, 2026"
      intro="How the information you share through this website is collected, used and protected."
      sections={sections}
    />
  );
}

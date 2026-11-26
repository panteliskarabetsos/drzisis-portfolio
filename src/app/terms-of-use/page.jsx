import { pageMetadata } from "@/lib/site";
import LegalLayout from "../components/legal-layout";
import {
  LegalContactCard,
  LegalLink,
  LegalList,
  LegalNote,
} from "../components/legal-content";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "The terms that apply when you access or use the website of Dr. Marios Zisis.",
  path: "/terms-of-use",
});

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <p>
        These Terms of Use (the <em>&quot;Terms&quot;</em>) govern your access
        to and use of the website of <strong>Dr. Marios Zisis</strong> (the{" "}
        <em>&quot;Website&quot;</em>). If you do not agree with any part of
        these Terms, you must not use the Website.
      </p>
    ),
  },
  {
    id: "website-purpose",
    title: "Website Purpose",
    content: (
      <>
        <p>
          The Website is operated by <strong>Dr. Marios Zisis</strong> and is
          intended solely to:
        </p>
        <LegalList
          items={[
            "Provide general information about Dr. Zisis's background, clinical interests and research.",
            "Offer an overview of his professional approach to cardiology and patient care.",
            "Serve as a simple communication channel via the integrated contact form.",
          ]}
        />
        <p>
          The Website is <strong>not</strong> a medical practice portal,
          patient portal, or emergency service, and it is not intended for
          managing individual patient care online.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Eligibility & Acceptable Use",
    content: (
      <>
        <p>
          By using the Website, you represent that you are at least 18 years
          old or have the consent of a parent or guardian, and that you will
          use the Website only for lawful purposes.
        </p>
        <p>
          You agree <strong>not</strong> to:
        </p>
        <LegalList
          items={[
            "Use the Website in any way that violates applicable laws or regulations.",
            "Attempt to gain unauthorized access to the Website or its infrastructure.",
            "Use the contact form to send spam, abusive, or harmful content.",
            "Use bots, scripts or other automated tools to submit the contact form.",
            "Introduce malware, viruses, or any other malicious code.",
          ]}
        />
      </>
    ),
  },
  {
    id: "contact-form",
    title: "Contact Form & Communication",
    content: (
      <>
        <p>
          The Website features a contact form through which you may submit
          your name, email address and message. When you use this form:
        </p>
        <LegalList
          items={[
            "Your submission is transmitted securely over HTTPS.",
            "Your message is delivered to an email inbox through an email service provider (such as Gmail).",
            <>
              The Website itself does <strong>not</strong> store your message
              in a database or use it for analytics.
            </>,
            "Names are limited to 100 characters, email addresses to 254 characters and messages to 5,000 characters.",
          ]}
        />
        <p>
          By using the contact form, you consent to being contacted via the
          email address you provide, solely for the purpose of responding to
          your inquiry.
        </p>
      </>
    ),
  },
  {
    id: "data-protection",
    title: "Data Protection & Privacy",
    content: (
      <>
        <p>
          Any personal information you submit through the Website (such as
          your name and email address) is handled in accordance with the{" "}
          <LegalLink href="/privacy-policy">Privacy Policy</LegalLink>. In
          summary:
        </p>
        <LegalList
          items={[
            "Your data is used only to read and respond to your inquiry and to maintain basic correspondence records for a limited period.",
            <>
              Data is <strong>not</strong> sold, rented or used for marketing
              campaigns.
            </>,
            <>
              The Website does <strong>not</strong> use cookies or third-party
              tracking tools at this time.
            </>,
          ]}
        />
      </>
    ),
  },
  {
    id: "no-medical-advice",
    title: "No Medical Advice & No Emergency Use",
    content: (
      <>
        <p>
          The content on this Website is provided for general informational
          and educational purposes only. It does <strong>not</strong>{" "}
          constitute:
        </p>
        <LegalList
          items={[
            "Medical advice or diagnosis.",
            "Treatment recommendations for any individual.",
            "Creation of a doctor–patient relationship.",
          ]}
        />
        <p>
          Always consult a licensed healthcare professional for medical advice
          specific to your situation. Never disregard professional medical
          advice or delay seeking it because of information you have read on
          this Website.
        </p>
        <LegalNote>
          <strong>Important:</strong> The Website and contact form are{" "}
          <strong>not</strong> intended for emergencies. If you experience a
          medical emergency, call your local emergency number or visit the
          nearest emergency department immediately.
        </LegalNote>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          Unless otherwise indicated, all content on the Website, including
          text, layout, design, images and logos, is the intellectual property
          of <strong>Dr. Marios Zisis</strong> or used with permission.
        </p>
        <p>
          You may view the content for your personal, non-commercial use. Any
          reproduction, distribution, modification or republication of the
          Website&apos;s content without prior written consent is prohibited.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    content: (
      <p>
        The Website may include links to third-party websites (for example,
        journal articles or external resources). These links are provided
        solely for convenience and informational purposes.{" "}
        <strong>Dr. Zisis</strong> does not control and is not responsible for
        the content, privacy practices or availability of any third-party
        sites. Accessing such sites is at your own risk.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Website Availability & Changes",
    content: (
      <>
        <p>
          The Website is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis. While reasonable efforts are made to keep the
          Website available and up to date, there is no guarantee that:
        </p>
        <LegalList
          items={[
            "The Website will be uninterrupted or error-free.",
            "Defects will always be corrected immediately.",
            "The content is free from typographical errors or out-of-date information.",
          ]}
        />
        <p>
          The content and structure of the Website may be updated, suspended
          or discontinued at any time without prior notice.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the fullest extent permitted by applicable law,{" "}
          <strong>Dr. Marios Zisis</strong> shall not be liable for any direct
          or indirect loss, damage or inconvenience arising out of:
        </p>
        <LegalList
          items={[
            "Your access to or use of the Website.",
            "Reliance on any information provided on the Website.",
            "Any technical issues, interruptions or errors.",
          ]}
        />
        <p>
          Nothing in these Terms excludes or limits any liability that cannot
          be excluded or limited under applicable law.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    content: (
      <p>
        <strong>Dr. Marios Zisis</strong> reserves the right to modify or
        update these Terms at any time. Any changes will be posted on this page
        with an updated <strong>Effective Date</strong> at the top. Your
        continued use of the Website after such changes have been posted
        constitutes your acceptance of the revised Terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <>
        <p>
          If you have any questions about these Terms of Use, please contact me
          by email.
        </p>
        <LegalContactCard />
      </>
    ),
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalLayout
      title="Terms"
      accent="of Use."
      effectiveDate="November 25, 2026"
      intro="Please read these Terms carefully before using this website. By accessing or using the site, you agree to be bound by them."
      sections={sections}
    />
  );
}

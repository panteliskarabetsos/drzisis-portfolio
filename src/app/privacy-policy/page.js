import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50 text-stone-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            Effective Date:{" "}
            <span className="font-medium">November 25, 2026</span>
          </p>
        </header>

        {/* 1. Introduction */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            1. Introduction
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-2">
            Welcome to the website of <strong>Dr. Marios Zisis</strong>. I am
            committed to protecting your privacy and handling your personal
            information with care. This Privacy Policy explains how I collect,
            use and protect information when you use this website.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            By using this website, you agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            2. Information I Collect
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-2">
            The website is primarily informational. The only personal data
            collected is what you voluntarily provide through the{" "}
            <strong>contact form</strong>:
          </p>
          <ul className="list-disc list-inside mt-2 text-sm sm:text-base leading-relaxed">
            <li>
              <strong>Full Name</strong> – used to address you in my response.
            </li>
            <li>
              <strong>Email Address</strong> – used to reply to your inquiry.
            </li>
            <li>
              <strong>Message Content</strong> – used to understand and respond
              to your request.
            </li>
          </ul>
          <p className="text-sm sm:text-base leading-relaxed mt-3">
            I kindly ask you <strong>not</strong> to submit sensitive personal
            information (for example detailed medical records, ID numbers,
            financial data or passwords) through the contact form. This website
            is not intended for managing medical records or emergencies.
          </p>
        </section>

        {/* 3. How I Use Your Information */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            3. How I Use Your Information
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-2">
            I use the information you provide for the following purposes:
          </p>
          <ul className="list-disc list-inside mt-2 text-sm sm:text-base leading-relaxed">
            <li>To read and respond to your inquiries and messages.</li>
            <li>
              To communicate with you regarding your request or follow-up
              questions.
            </li>
            <li>
              To maintain a basic record of communications for reference and
              continuity.
            </li>
          </ul>
          <p className="text-sm sm:text-base leading-relaxed mt-3">
            The legal basis for this processing is my legitimate interest in
            replying to messages that you choose to send me.
          </p>
          <p className="text-sm sm:text-base leading-relaxed mt-3">
            I <strong>do not</strong> use your contact details for newsletters,
            advertising or marketing campaigns, and I do <strong>not</strong>{" "}
            profile or track visitors.
          </p>
        </section>

        {/* 4. Data Storage & Security */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            4. Data Storage & Security
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-2">
            I take reasonable steps to protect your personal information:
          </p>
          <ul className="list-disc list-inside mt-2 text-sm sm:text-base leading-relaxed">
            <li>
              When you submit the contact form, your message is sent securely to
              my <strong>email inbox</strong>. It is{" "}
              <strong>not stored in a database</strong> on this website.
            </li>
            <li>
              The website uses <strong>HTTPS</strong> to help protect your data
              while it is in transit.
            </li>
            <li>
              Access to the email account where messages are received is
              restricted and protected by industry-standard security measures.
            </li>
            <li>
              The contact form includes an automated <strong>spam check</strong>{" "}
              (a hidden field that only automated bots fill in). Submissions
              identified as spam are discarded and are never delivered to my
              inbox.
            </li>
          </ul>
          <p className="text-sm sm:text-base leading-relaxed mt-3">
            Despite these efforts, no method of transmission or storage over the
            internet can be guaranteed to be 100% secure.
          </p>
        </section>

        {/* 5. Data Sharing & Third Parties */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            5. Data Sharing & Third-Party Services
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-2">
            I respect your privacy and handle your data carefully:
          </p>
          <ul className="list-disc list-inside mt-2 text-sm sm:text-base leading-relaxed">
            <li>
              I <strong>do not sell, rent or trade</strong> your personal data
              to third parties.
            </li>
            <li>
              Your message is used only for the purpose of communicating with
              you.
            </li>
            <li>
              Contact form submissions are delivered via an{" "}
              <strong>email service provider</strong> (e.g. Gmail). That
              provider processes emails according to its own privacy and
              security practices.
            </li>
            <li>
              The website is run by a third-party{" "}
              <strong>hosting provider</strong>, which may process technical
              data such as IP addresses in its server logs in order to deliver
              and secure the website.
            </li>
          </ul>
        </section>

        {/* 6. Cookies & Tracking */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            6. Cookies & Tracking Technologies
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            This website currently <strong>does not</strong> use cookies,
            analytics tools or third-party tracking technologies. If this
            changes in the future, this Privacy Policy will be updated to
            reflect that.
          </p>
        </section>

        {/* 7. Data Retention */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            7. Data Retention
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-2">
            I keep email communications from the contact form only for as long
            as reasonably necessary:
          </p>
          <ul className="list-disc list-inside mt-2 text-sm sm:text-base leading-relaxed">
            <li>
              In general, I retain contact form submissions for up to{" "}
              <strong>6 months</strong> for reference and to follow up on your
              inquiry.
            </li>
            <li>
              Emails may be deleted earlier if they are no longer needed, or
              kept slightly longer if required for legitimate reasons (for
              example, if a discussion is ongoing).
            </li>
          </ul>
        </section>

        {/* 8. Your Rights */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            8. Your Rights
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-2">
            Under the EU General Data Protection Regulation (GDPR), you have
            the right to:
          </p>
          <ul className="list-disc list-inside mt-2 text-sm sm:text-base leading-relaxed">
            <li>Access the personal information I hold about you.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion of your personal information.</li>
            <li>Object to, or ask me to restrict, the processing of your data.</li>
            <li>
              Receive your data in a portable format, where applicable.
            </li>
          </ul>
          <p className="text-sm sm:text-base leading-relaxed mt-3">
            If you would like to exercise any of these rights, please contact me
            using the email address below. I will do my best to respond within a
            reasonable timeframe.
          </p>
          <p className="text-sm sm:text-base leading-relaxed mt-3">
            You also have the right to lodge a complaint with the{" "}
            <a
              href="https://www.dpa.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-700 underline underline-offset-2 hover:text-cyan-800"
            >
              Hellenic Data Protection Authority
            </a>
            .
          </p>
        </section>

        {/* 9. Changes to This Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            9. Changes to This Privacy Policy
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            I may update this Privacy Policy from time to time, for example to
            reflect changes to the website or to legal requirements. Any updates
            will be posted on this page with an updated{" "}
            <strong>Effective Date</strong> at the top.
          </p>
        </section>

        {/* 10. Contact */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            10. Contact
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-2">
            If you have any questions or concerns about this Privacy Policy or
            how your data is handled, please contact:
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@drzisis.com"
              className="text-cyan-700 underline underline-offset-2 hover:text-cyan-800"
            >
              contact@drzisis.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

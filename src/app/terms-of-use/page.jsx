// app/terms-of-use/page.jsx
// eslint-disable-next-line
"use client";

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-100 via-white to-stone-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3 text-center">
          Terms of Use
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mb-8 text-center">
          Please read these Terms of Use carefully before using this website. By
          accessing or using the site, you agree to be bound by these Terms.
        </p>

        {/* 1. Introduction */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-stone-800 mb-2">
            1. Introduction
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            These Terms of Use (the{" "}
            <span className="italic">&quot;Terms&quot;</span>) govern your
            access to and use of the website of{" "}
            <strong>Dr. Marios Zisis</strong> (the{" "}
            <span className="italic">&quot;Website&quot;</span>). If you do not
            agree with any part of these Terms, you must not use the Website.
          </p>
        </section>

        {/* 2. Website Purpose */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-stone-800 mb-2">
            2. Website Purpose
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-2">
            The Website is operated by <strong>Dr. Marios Zisis</strong> and is
            intended solely to:
          </p>
          <ul className="list-disc list-inside text-stone-700 text-sm sm:text-base leading-relaxed mb-2">
            <li>
              Provide general information about Dr. Zisis&apos;s background,
              clinical interests and research.
            </li>
            <li>
              Offer an overview of his professional approach to cardiology and
              patient care.
            </li>
            <li>
              Serve as a simple communication channel via the integrated contact
              form.
            </li>
          </ul>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            The Website is <strong>not</strong> a medical practice portal,
            patient portal, or emergency service, and it is not intended for
            managing individual patient care online.
          </p>
        </section>

        {/* 3. Eligibility & Acceptable Use */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-stone-800 mb-2">
            3. Eligibility & Acceptable Use
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-2">
            By using the Website, you represent that you are at least 18 years
            old or have the consent of a parent or guardian, and that you will
            use the Website only for lawful purposes.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-2">
            You agree <strong>not</strong> to:
          </p>
          <ul className="list-disc list-inside text-stone-700 text-sm sm:text-base leading-relaxed">
            <li>
              Use the Website in any way that violates applicable laws or
              regulations.
            </li>
            <li>
              Attempt to gain unauthorized access to the Website or its
              infrastructure.
            </li>
            <li>
              Use the contact form to send spam, abusive, or harmful content.
            </li>
            <li>Introduce malware, viruses, or any other malicious code.</li>
          </ul>
        </section>

        {/* 4. Contact Form & Communication */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-stone-800 mb-2">
            4. Contact Form & Communication
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-2">
            The Website features a contact form through which you may submit
            your name, email address and message. When you use this form:
          </p>
          <ul className="list-disc list-inside text-stone-700 text-sm sm:text-base leading-relaxed mb-2">
            <li>Your submission is transmitted securely over HTTPS.</li>
            <li>
              Your message is delivered to an email inbox through an email
              service (for example, a service such as Nodemailer connected to an
              email provider).
            </li>
            <li>
              The Website itself does <strong>not</strong> store your message in
              a public database or use it for analytics.
            </li>
          </ul>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mt-2">
            By using the contact form, you consent to being contacted via the
            email address you provide, solely for the purpose of responding to
            your inquiry.
          </p>
        </section>

        {/* 5. Data Protection & Privacy */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-stone-800 mb-2">
            5. Data Protection & Privacy
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-2">
            Any personal information you submit through the Website (such as
            your name and email address) is handled in accordance with the{" "}
            <a
              href="/privacy-policy"
              className="text-cyan-700 underline underline-offset-2 hover:text-cyan-800"
            >
              Privacy Policy
            </a>
            .
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-2">
            In summary:
          </p>
          <ul className="list-disc list-inside text-stone-700 text-sm sm:text-base leading-relaxed">
            <li>
              Your data is used only to read and respond to your inquiry and to
              maintain basic correspondence records for a limited period.
            </li>
            <li>
              Data is <strong>not</strong> sold, rented or used for marketing
              campaigns.
            </li>
            <li>
              The Website does <strong>not</strong> use cookies or third-party
              tracking tools at this time.
            </li>
          </ul>
        </section>

        {/* 6. No Medical Advice & No Emergency Use */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-stone-800 mb-2">
            6. No Medical Advice & No Emergency Use
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-2">
            The content on this Website is provided for general informational
            and educational purposes only. It does <strong>not</strong>{" "}
            constitute:
          </p>
          <ul className="list-disc list-inside text-stone-700 text-sm sm:text-base leading-relaxed mb-2">
            <li>Medical advice or diagnosis.</li>
            <li>Treatment recommendations for any individual.</li>
            <li>Creation of a doctor–patient relationship.</li>
          </ul>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-2">
            Always consult a licensed healthcare professional for medical advice
            specific to your situation. Never disregard professional medical
            advice or delay seeking it because of information you have read on
            this Website.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            <strong>Important:</strong> The Website and contact form are{" "}
            <strong>not</strong> intended for emergencies. If you experience a
            medical emergency, call your local emergency number or visit the
            nearest emergency department immediately.
          </p>
        </section>

        {/* 7. Intellectual Property */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-stone-800 mb-2">
            7. Intellectual Property
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-2">
            Unless otherwise indicated, all content on the Website-including
            text, layout, design, images and logos, is the intellectual property
            of <strong>Dr. Marios Zisis</strong> or used with permission.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            You may view the content for your personal, non-commercial use. Any
            reproduction, distribution, modification or republication of the
            Website&apos;s content without prior written consent is prohibited.
          </p>
        </section>

        {/* 8. Third-Party Links */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-stone-800 mb-2">
            8. Third-Party Links
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            The Website may include links to third-party websites (for example,
            journal articles or external resources). These links are provided
            solely for convenience and informational purposes.{" "}
            <strong>Dr. Zisis</strong> does not control and is not responsible
            for the content, privacy practices or availability of any
            third-party sites. Accessing such sites is at your own risk.
          </p>
        </section>

        {/* 9. Website Availability & Changes */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-stone-800 mb-2">
            9. Website Availability & Changes
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-2">
            The Website is provided on an &quot;as is&quot; and &quot;as
            available&quot; basis. While reasonable efforts are made to keep the
            Website available and up to date, there is no guarantee that:
          </p>
          <ul className="list-disc list-inside text-stone-700 text-sm sm:text-base leading-relaxed">
            <li>The Website will be uninterrupted or error-free.</li>
            <li>Defects will always be corrected immediately.</li>
            <li>
              The content is free from typographical errors or out-of-date
              information.
            </li>
          </ul>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mt-2">
            The content and structure of the Website may be updated, suspended
            or discontinued at any time without prior notice.
          </p>
        </section>

        {/* 10. Limitation of Liability */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-stone-800 mb-2">
            10. Limitation of Liability
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-2">
            To the fullest extent permitted by applicable law,{" "}
            <strong>Dr. Marios Zisis</strong> shall not be liable for any direct
            or indirect loss, damage or inconvenience arising out of:
          </p>
          <ul className="list-disc list-inside text-stone-700 text-sm sm:text-base leading-relaxed mb-2">
            <li>Your access to or use of the Website.</li>
            <li>Reliance on any information provided on the Website.</li>
            <li>Any technical issues, interruptions or errors.</li>
          </ul>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Nothing in these Terms excludes or limits any liability that cannot
            be excluded or limited under applicable law.
          </p>
        </section>

        {/* 11. Changes to These Terms */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-stone-800 mb-2">
            11. Changes to These Terms
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            <strong>Dr. Marios Zisis</strong> reserves the right to modify or
            update these Terms at any time. Any changes will be posted on this
            page with an updated &quot;Last updated&quot; date. Your continued
            use of the Website after such changes have been posted constitutes
            your acceptance of the revised Terms.
          </p>
        </section>

        {/* 12. Contact */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-stone-800 mb-2">
            12. Contact
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-2">
            If you have any questions about these Terms of Use, please contact:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:mailsystem.drzisis@gmail.com"
              className="text-cyan-700 underline underline-offset-2 hover:text-cyan-800"
            >
         contact@drzisis.com
            </a>
          </p>
        </section>

        <p className="text-stone-500 text-xs sm:text-sm mt-10 text-center">
          Last updated: September 20, 2025
        </p>
      </div>
    </main>
  );
}

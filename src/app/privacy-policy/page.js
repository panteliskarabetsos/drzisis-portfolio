import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-stone-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        <p className="text-sm text-center text-stone-500 mb-12">Effective Date: 12/3/2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to <strong>Dr. Marios Zisis Website</strong>. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we handle &quot;personal information&quot;.
          </p>

          <p>By using this website, you agree to the collection and use of information in accordance with this Privacy Policy.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <p>When you use our <strong>Contact Form</strong>, we collect the following personal information:</p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Full Name</strong> – to personalize our response.</li>
            <li><strong>Email Address</strong> – to reply to your inquiry.</li>
            <li><strong>Message Content</strong> – to understand and address your request.</li>
          </ul>
          <p>We <strong>do not</strong> collect any sensitive personal information (e.g., health data, financial details, passwords).</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
          <p>We collect and use your data for the following legitimate purposes:</p>
          <ul className="list-disc list-inside mt-2">
            <li>To respond to your <strong>inquiries and messages</strong>.</li>
            <li>To improve our <strong>website and services</strong>.</li>
            <li>To communicate with you regarding <strong>your request</strong>.</li>
          </ul>
          <p>We will <strong>never</strong> use your data for marketing purposes or share it with third parties.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Data Storage & Security</h2>
          <p>We take appropriate security measures to protect your personal data:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Your message is <strong>not stored in a database</strong> but sent securely to our <strong>email inbox</strong>.</li>
            <li>We use <strong>encryption protocols (HTTPS)</strong> to protect your information in transit.</li>
            <li>We <strong>limit access</strong> to personal data and use <strong>industry-standard security measures</strong>.</li>
          </ul>
          <p>However, while we take reasonable precautions, no method of electronic transmission is 100% secure.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Data Sharing & Third-Party Services</h2>
          <p>
            - We <strong>do not sell, rent, or share</strong> your information with third parties.<br />
            - Your message is only accessible to us and used <strong>solely for communication</strong>.<br />
            - We use <strong>email services</strong> to receive your contact form submissions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Cookies & Tracking Technologies</h2>
          <p>This website <strong>does not</strong> use cookies, analytics, or third-party tracking tools.</p>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Data Retention</h2>
          <p>We keep contact form submissions for <strong>6 months</strong> to ensure we have a record of inquiries. After this period, we securely delete them.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated <strong>&quot;Effective Date.&quot;</strong></p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact:</p>

          <p>📧 <strong>Email:</strong> mailsystem.drzisis@gmail.com</p>
        </section>
      </div>
    </main>
  );
}

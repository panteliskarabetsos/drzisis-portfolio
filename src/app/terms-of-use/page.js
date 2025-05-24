// app/terms-of-use/page.jsx
// eslint-disable-next-line
"use client";

export default function TermsOfUsePage() {
  return (
    <main className="bg-gradient-to-b from-stone-100 to-white py-20 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-stone-900 mb-6 text-center">Terms of Use</h1>

       <p className="text-stone-700 mb-6">
        Please read these Terms of Use (<span className="italic">&quot;Terms&quot;</span>) carefully before using this website. By accessing or using the site, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not access or use the website.
        </p>


        <h2 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">1. Website Purpose</h2>
        <p className="text-stone-700 mb-4">
          This website is operated by Dr. Zisis and is intended to provide visitors with information regarding the doctor’s background, services and professional approach. It also serves as a communication channel through the integrated contact form.
        </p>

        <h2 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">2. Contact Form & Data Handling</h2>
        <p className="text-stone-700 mb-4">
          The website features a contact form allowing users to submit their name, email address and message. This data is transmitted securely using HTTPS and is sent directly to Dr. Zisis’s email inbox via Nodemailer. 
        </p>
        <p className="text-stone-700 mb-4">
          <strong>Important:</strong> The website does not retain, log or store any user data submitted via the form. It does not use databases, cookies, or third-party tracking services.
        </p>

        <h2 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">3. Privacy Assurance</h2>
        <p className="text-stone-700 mb-4">
          The contact details you provide will be used solely for the purpose of responding to your inquiry. No marketing communications will be sent, and your details will not be shared with any third parties. For full details, please refer to our <a href="/privacy-policy" className="underline text-cyan-600">Privacy Policy</a>.
        </p>

        <h2 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">4. No Medical Advice</h2>
        <p className="text-stone-700 mb-4">
          The content on this site is provided for general informational purposes only. It is not intended as medical advice, diagnosis or treatment. Always seek the advice of a licensed healthcare professional for medical concerns.
        </p>

        <h2 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">5. Intellectual Property Rights</h2>
        <p className="text-stone-700 mb-4">
          All content on this website, including but not limited to text, graphics, logos and design elements, is the property of Dr. Zisis unless otherwise stated. Any reproduction, distribution or use of this material without express permission is prohibited.
        </p>

        <h2 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">6. Limitation of Liability</h2>
        <p className="text-stone-700 mb-4">
          While we strive to keep the information on this site accurate and up to date, we make no warranties or representations regarding its completeness, accuracy or reliability. Use of the site is at your own risk.
        </p>

        <h2 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">7. Modifications</h2>
        <p className="text-stone-700 mb-4">
          Dr. Zisis reserves the right to modify or update these Terms at any time. It is your responsibility to review this page periodically to stay informed about any changes. Continued use of the site after changes are posted constitutes your acceptance of the revised Terms.
        </p>

        <p className="text-stone-500 text-sm mt-10 text-center">
          Last updated: May 24, 2025
        </p>
      </div>
    </main>
  );
}

'use client';

import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen sm:py-8 py-4 px-3 md:px-12 lg:px-15 text-gray-800">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl py-5 md:py-10 px-4 sm:px-7 md:px-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#2c3e50] mb-3.5 md:mb-10">Privacy Policy</h1>

        <div className="space-y-5 sm:space-y-8 text-base leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">1. Introduction</h2>
            <p>
              At [YourCompanyName], we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our real estate platform or interact with our services.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">2. Information We Collect</h2>
            <p>We collect the following types of personal and non-personal information:</p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>Full name, email address, and phone number</li>
              <li>Property preferences and search behavior</li>
              <li>Location data (if enabled)</li>
              <li>IP address, browser type, and device information</li>
              <li>Messages and communication with agents</li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">3. How We Use Your Information</h2>
            <p>Your data helps us to:</p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>Provide personalized property recommendations</li>
              <li>Facilitate communication with agents and property owners</li>
              <li>Respond to inquiries and customer support requests</li>
              <li>Improve our website functionality and user experience</li>
              <li>Send updates, alerts, and newsletters (with your consent)</li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">4. Sharing Your Information</h2>
            <p>
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>Verified real estate agents or property owners with your inquiry</li>
              <li>Trusted third-party vendors for services like email, analytics, or CRM</li>
              <li>Law enforcement or government agencies when required by law</li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">5. Cookies & Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to track user activity, analyze traffic, and improve your browsing experience. You can modify your cookie preferences through your browser settings.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">6. Data Security</h2>
            <p>
              We implement strong security measures to protect your data, including encryption, secure servers, and restricted access. However, no online transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">7. Your Rights & Choices</h2>
            <p>
              You have the right to access, update, or delete your personal data. You may also opt-out of marketing communications at any time by clicking the unsubscribe link in our emails.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">8. Third-Party Links</h2>
            <p>
              Our website may include links to third-party websites. We are not responsible for the privacy practices of these external sites. We recommend reviewing their privacy policies individually.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">9. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect personal information from minors. If we become aware of such data, it will be deleted promptly.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">10. Changes to This Policy</h2>
            <p>
              We reserve the right to update or revise this Privacy Policy at any time. Changes will be effective immediately upon posting on this page. Please review this policy regularly to stay informed.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">11. Contact Us</h2>
            <p>
              If you have any questions or concerns about our privacy practices, please contact us at:{' '}
              <a
                href="mailto:privacy@yourrealestate.com"
                className="text-[#1f76cc] hover:underline"
              >
                privacy@yourrealestate.com
              </a>
              .
            </p>
          </section>

          <p className="text-sm text-gray-400 text-center mt-10">
            Last updated: May 19, 2025
          </p>
        </div>
      </div>
    </div>
  );
}

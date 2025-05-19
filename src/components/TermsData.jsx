'use client';

import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 min-h-screen sm:py-8 py-4 px-3 md:px-12 lg:px-15 text-gray-800">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl py-5 md:py-10 px-4 sm:px-7 md:px-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#2c3e50] mb-3.5 md:mb-10">Terms & Conditions</h1>

        <div className="space-y-5 sm:space-y-8 text-base leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">1. Introduction</h2>
            <p>
              Welcome to [YourCompanyName]. By accessing or using our real estate platform, you agree to be bound by the following terms and conditions. These terms govern your use of our services and website located at [yourwebsite.com].
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">2. Services</h2>
            <p>
              Our platform provides access to residential and commercial real estate listings, rental properties, property management tools, and agent services. We act as a facilitator and do not own or manage the listed properties.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">3. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide accurate and complete information when registering or submitting inquiries.</li>
              <li>Use the website only for lawful purposes and refrain from abusive, defamatory, or fraudulent activities.</li>
              <li>Respect the privacy and rights of property owners, agents, and other users.</li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">4. Listing Accuracy</h2>
            <p>
              While we strive to keep all property information accurate and up to date, [YourCompanyName] is not liable for errors in listing details including pricing, availability, and amenities. Users are encouraged to verify property information with the respective listing agent or owner.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">5. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and media on this site are the intellectual property of [YourCompanyName] or its licensors. No content may be copied, reused, or redistributed without written consent.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">6. Third-Party Links</h2>
            <p>
              Our site may contain links to third-party websites or services. These are provided for your convenience and do not imply endorsement. We are not responsible for the content or practices of external sites.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">7. Disclaimer of Warranties</h2>
            <p>
              All services are provided “as is” and “as available.” We do not guarantee the accuracy, timeliness, or reliability of listings or content. Use of our services is at your own risk.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">8. Limitation of Liability</h2>
            <p>
              In no event shall [YourCompanyName] be liable for any indirect, incidental, or consequential damages arising out of the use of our website or services, even if advised of the possibility of such damages.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">9. Modifications to Terms</h2>
            <p>
              We reserve the right to update or change these terms at any time. Continued use of the platform after changes constitutes your acceptance of the new terms. Please review this page periodically for updates.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">10. Governing Law</h2>
            <p>
              These terms shall be governed by the laws of [Your State/Country], without regard to its conflict of law provisions.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-semibold text-[#2c3e50] mb-2">11. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:{' '}
              <a
                href="mailto:support@yourrealestate.com"
                className="text-[#1f76cc] hover:underline"
              >
                support@yourrealestate.com
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


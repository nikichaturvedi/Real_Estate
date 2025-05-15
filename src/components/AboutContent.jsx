// components/About.js
export default function AboutContent() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6 underline underline-offset-8 decoration-[#BFA249] decoration-4">
          About Us
        </h2>
        <p className="text-lg text-gray-600  mb-6">
          For over two decades, <strong> [Your Company Name]</strong> has been Jaipur’s trusted real estate consultancy.
          We provide expert solutions in residential, commercial, and investment real estate for both local and international clients.
        </p>
        <div className="text-gray-700 space-y-4  mb-6">
          <p>
            Our portfolio spans township developments, group housing, IT parks, commercial hubs, retail, hospitality, and industrial spaces.
            As authorized partners of leading developers like <strong>Lodha Group, Emaar MGF, Omaxe, Vatika,</strong> and <strong>Suncity</strong>,
            we offer unmatched deals and services. Whether you're investing, developing, or looking for your dream property, we guide you with insight, integrity, and a personal touch.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>
              <strong>20+ years of proven real estate expertise:</strong>
              We’ve built a legacy in Jaipur's real estate sector, backed by decades of consistent performance and deep industry insight.
            </li>
            <li>
              <strong>Authorized partners with India’s top developers:</strong>
              Our official partnerships with Lodha Group, Emaar MGF, Omaxe, Vatika, Suncity, and more ensure you access to the best projects and deals.
            </li>
            <li>
              <strong>Successful handling of complex transactions:</strong>
              We specialize in navigating intricate property deals involving legal clearances, multiple stakeholders, and investment structuring.
            </li>
            <li>
              <strong>Deep knowledge of Jaipur’s market and trends:</strong>
              Our local expertise enables us to guide clients with precision, backed by insights into emerging neighborhoods and pricing shifts.
            </li>
            <li>
              <strong>Robust network of buyers, sellers, and investors:</strong>
              With a strong, vetted network, we can quickly match buyers with ideal properties and help sellers find qualified prospects.
            </li>
            <li>
              <strong>Detail-focused and client-centric approach:</strong>
              We listen to your needs, customize solutions, and handle every aspect of your real estate journey with meticulous attention.
            </li>
            <li>
              <strong>Exceptional client retention and satisfaction:</strong>
              Our service-first approach means most of our clients return to us for future transactions — and refer friends and family too.
            </li>
            <li>
              <strong>Complete advisory from start to finish:</strong>
              From the first consultation to post-sale support, we offer guidance on documentation, legalities, financing, and everything in between.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

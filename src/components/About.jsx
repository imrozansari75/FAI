import React from "react";

const About = () => {
  return (
     <section id="about" className="py-16 md:py-24 md:px-4">
     <div className="text-center max-w-4xl mx-auto">
        <h1 className="bg-blue inline text-white text-center px-4 py-1 rounded-full text-sm mb-4">
          About Us
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold my-3">Who We Are</h2>
        <p className="text-base text-gray-700 md:text-lg leading-relaxed">
          FAI Corporate Services Private Limited is a trusted provider of business support services across India, specializing in Accounts & Finance, HR & Administration, Procurement, Supply Chain Management, IT & ERP, and Legal & Compliance. Our tagline — <span className="italic font-medium">'Empowering Growth, Enabling Success: Innovate, Collaborate, Excel'</span> — reflects our commitment to delivering customized solutions that drive operational efficiency and ensure regulatory compliance. We are proud to be part of the Black Rose Group, which includes Black Rose Industries Limited, Accent Industries Limited, Tozai Safety Private Limited, and others.
        </p>
      </div>

      {/* Mission, Vision, Values */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {/* Mission */}
        <div className="border border-gray rounded-xl p-6 shadow-sm text-center">
          <div className="text-blue-600 text-3xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600 text-sm">
            To empower organizations with innovative corporate solutions that streamline operations, foster growth, and let businesses focus on what they do best.
          </p>
        </div>

        {/* Vision */}
        <div className="border border-gray rounded-xl p-6 shadow-sm text-center">
          <div className="text-blue-600 text-3xl mb-4">🌟</div>
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600 text-sm">
            To be the most reliable partner for integrated business services in India, known for excellence, adaptability, and long-term value.
          </p>
        </div>

        {/* Values */}
        <div className="border border-gray rounded-xl p-6 shadow-sm text-center">
          <div className="text-blue-600 text-3xl mb-4">💡</div>
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <ul className="text-gray-600 text-sm space-y-2 text-left inline-block">
            <li>✔️ Integrity and transparency</li>
            <li>✔️ Innovation through collaboration</li>
            <li>✔️ Excellence in service delivery</li>
            <li>✔️ Commitment to client success</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

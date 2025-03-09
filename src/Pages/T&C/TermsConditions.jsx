import React from "react";

const TermsConditions = () => {
  return (
<section className="bg-[#FDFBF5] px-3 flex flex-col items-center justify-center min-h-screen">
    <div className="max-w-4xl mx-auto bg-white p-6 border border-yellow-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>

      <div className="space-y-6 text-gray-700">
        <div>
          <h3 className="font-semibold">1. Acceptance Of Terms</h3>
          <p className="text-sm mt-1">
            By accessing and using bookpoint, you agree to these terms and conditions. If you do not agree, please do
            not use our website.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">2. User Responsibilities</h3>
          <ul className="list-disc ml-5 text-sm space-y-1">
            <li>You must provide accurate information when creating an account or making a purchase.</li>
            <li>Any misuse of the website or content is strictly prohibited.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">3. Intellectual Property</h3>
          <ul className="list-disc ml-5 text-sm space-y-1">
            <li>
              All content on bookpoint, including text, images, and logos, is our property and protected by copyright
              laws.
            </li>
            <li>You may not copy, distribute, or modify any content without permission.</li>
          </ul>
        </div>
      </div>
    </div>
</section>
  );
};

export default TermsConditions;

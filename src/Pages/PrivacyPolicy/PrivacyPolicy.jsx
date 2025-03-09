import React from "react";

const PrivacyPolicy = () => {
  return (
   <section className="min-h-screen flex flex-col justify-center items-center  p-3">
 <div className="max-w-4xl mx-auto bg-white p-6 border border-yellow-300 rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>

      <div className="space-y-6 text-gray-700">
        <div>
          <h3 className="font-semibold">1. Information Collection</h3>
          <p className="text-sm mt-1">
            We collect personal information such as name, email, and payment details when you purchase books,
            subscribe to our newsletter, or use our services.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">2. How We Use Your Information</h3>
          <ul className="list-disc ml-5 text-sm space-y-1">
            <li>To process orders and deliver purchased books.</li>
            <li>To send newsletters and updates if you subscribe.</li>
            <li>To improve our website experience and customer support.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">3. Data Protection & Security</h3>
          <p className="text-sm mt-1">
            We ensure your data is securely stored and protected. We do not sell, trade, or share your personal
            information with third parties.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">4. Cookies & Tracking Technologies</h3>
          <p className="text-sm mt-1">
            We use cookies to enhance user experience and track website analytics. You can manage cookie settings in
            your browser.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">5. User Rights</h3>
          <p className="text-sm mt-1">
            You can request access, updates, or deletion of your data at any time. You can also unsubscribe from our
            communications.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">6. Policy Updates</h3>
          <p className="text-sm mt-1">
            This privacy policy may be updated from time to time. Any changes will be posted on this page.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">7. Contact Us</h3>
          <p className="text-sm mt-1">
            For privacy-related concerns, contact us at [Your Email or Contact Page]. Let us know if you need any
            modifications!
          </p>
        </div>
      </div>
    </div>
   </section>
  );
};

export default PrivacyPolicy;

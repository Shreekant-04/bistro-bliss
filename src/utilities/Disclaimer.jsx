import React from "react";

const Disclaimer = () => {
  return (
    <main className="mt-[16vh] md:mt-[12vh] lg:mt-[19vh] flex flex-col items-center justify-center text-center p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Legal Disclaimer</h2>
      <p className="mb-4">
        Disclaimer: The information provided on this website is for general
        informational purposes only and does not constitute professional advice.
        All images, menu items, and content are for demonstration purposes only.
        Actual products, services, prices, and availability may vary.
      </p>
      <p className="mb-4">
        While we strive to keep the information up to date and correct, we make
        no representations or warranties of any kind, express or implied, about
        the completeness, accuracy, reliability, suitability, or availability of
        the information, products, services, or related graphics contained on
        this website.
      </p>
      <p className="mb-4">
        Food allergies and intolerances: Please note that our menu descriptions
        do not include all ingredients. Customers with allergies should consult
        our staff before placing orders.
      </p>
      <p className="font-medium mt-2">
        &copy; {new Date().getFullYear()} Bistro Bliss. All rights reserved. All
        trademarks, logos, and brand names are the property of their respective
        owners.
      </p>
    </main>
  );
};

export default Disclaimer;

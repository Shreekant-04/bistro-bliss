const Terms = () => {
  return (
    <main className="mt-[16vh] md:mt-[12vh] lg:mt-[19vh] flex flex-col items-center justify-center text-center p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-secondary">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing and using Bistro Bliss services, you agree to be
              bound by these Terms and Conditions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              2. Reservation Policy
            </h2>
            <p className="mb-4">
              Reservations are subject to availability and we reserve the right
              to cancel or modify reservations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">3. Privacy Policy</h2>
            <p className="mb-4">
              Your privacy is important to us. Please review our Privacy Policy
              to understand how we collect and use your data.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              4. Modification of Terms
            </h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Continued
              use of our services constitutes acceptance of modified terms.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Terms;

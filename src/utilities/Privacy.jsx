const Privacy = () => {
    return (
        <main className="mt-[16vh] md:mt-[12vh] lg:mt-[19vh] flex flex-col items-center justify-center text-center p-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
                
                <div className="space-y-6 text-left">
                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">Information We Collect</h2>
                        <p className="text-gray-600 mb-4">
                            We collect information that you provide directly to us, including name, email address, 
                            and any other information you choose to provide when making a reservation or contacting us.
                        </p>
                    </section>

                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">How We Use Your Information</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>To process your reservations and orders</li>
                            <li>To send you marketing communications (with your consent)</li>
                            <li>To improve our services and website experience</li>
                            <li>To respond to your inquiries and provide customer support</li>
                        </ul>
                    </section>

                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">Data Security</h2>
                        <p className="text-gray-600">
                            We implement appropriate security measures to protect your personal information 
                            and maintain its confidentiality. However, no method of transmission over the 
                            Internet is 100% secure.
                        </p>
                    </section>

                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">Contact Us</h2>
                        <p className="text-gray-600">
                            If you have any questions about our Privacy Policy, please contact us at:
                            <br />
                            <a href="mailto:privacy@bistrobliss.com" className="text-primary hover:underline">
                                privacy@bistrobliss.com
                            </a>
                        </p>
                    </section>
                </div>

                <p className="text-sm text-gray-500 mt-8">
                    Last updated: {new Date().toLocaleDateString()}
                </p>
            </div>
        </main>
    );
};

export default Privacy;

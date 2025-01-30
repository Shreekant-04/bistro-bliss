const Contact = () => {
    return (
        <main
            className="mt-[16vh] md:mt-[12vh] lg:mt-[19vh] flex flex-col items-center justify-center text-center py-8 px-4 gap-4"
            style={{
                background:
                    "linear-gradient(180deg, hsla(60, 14%, 97%, 1) 50%, hsla(0, 0%, 100%, 1) 50%)",
            }}
        >
            <div className="p-4 flex justify-center items-center flex-col gap-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair">Contact Us</h1>

                <p className="text-base md:text-lg text-gray-700 w-full md:w-3/4 lg:w-1/2">
                    We’d love to hear from you! Whether it’s about our menu, services, or
                    anything else, fill out the form below, and our team will get back to
                    you as soon as possible.
                </p>
            </div>
            <form className="w-full md:w-3/4 lg:w-2/5 bg-white p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-2 text-start shadow-lg">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Your name"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Your email"
                    />
                </div>
                <div className="mb-4 col-span-1 md:col-span-2">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="subject"
                    >
                        Subject
                    </label>
                    <input
                        className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="subject"
                        type="text"
                        placeholder="Subject"
                    />
                </div>
                <div className="mb-6 col-span-1 md:col-span-2">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        placeholder="Your message"
                        rows="5"
                    ></textarea>
                </div>

                <button
                    className="col-span-1 md:col-span-2 bg-[#AD343E] hover:bg-[#bd525b] text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Send
                </button>
            </form>
        </main>
    );
};

export default Contact;

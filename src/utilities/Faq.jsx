const Faq = [
  {
    id: 1,
    question: "What are your restaurant's operating hours?",
    answer:
      "We are open seven days a week. Monday to Friday: 11:00 AM - 10:00 PM, Saturday and Sunday: 10:00 AM - 11:00 PM.",
  },
  {
    id: 2,
    question: "Do you accept reservations?",
    answer:
      "Yes, we gladly accept reservations. You can book a table through our website or by calling us directly.",
  },
  {
    id: 3,
    question: "Is there a dress code?",
    answer:
      "We maintain a smart casual dress code. While we want you to be comfortable, we ask that guests avoid wearing beachwear or sportswear.",
  },
  {
    id: 4,
    question: "Do you accommodate dietary restrictions?",
    answer:
      "Yes, we offer various options for vegetarian, vegan, and gluten-free diets. Please inform your server about any allergies or dietary restrictions.",
  },
  {
    id: 5,
    question: "Is parking available?",
    answer:
      "Yes, we offer complimentary valet parking for our guests. There is also street parking available nearby.",
  },
  {
    id: 6,
    question: "Do you offer private dining or event spaces?",
    answer:
      "Yes, we have private dining rooms available for special events, corporate functions, and celebrations. Please contact us for details.",
  },
];

const FaqPage = () => {
  return (
    <main className="mt-[16vh] md:mt-[12vh] lg:mt-[19vh] flex flex-col items-center justify-center text-center p-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Find answers to common questions about our restaurant
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        {Faq.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-primary mb-3">
              {item.question}
            </h3>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FaqPage;

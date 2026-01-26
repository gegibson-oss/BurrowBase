export function FAQSection() {
  const faqs = [
    {
      question: "Is this software I have to learn?",
      answer: "No. This is a done-for-you digital operations manager. We set it up, configure it to your business, and you just use it. There's nothing to build or manage.",
    },
    {
      question: "What if I already have tools?",
      answer: "Burrow Base can work alongside your existing tools or replace them. During setup, we'll configure the system based on what you're currently using.",
    },
    {
      question: "How quickly can I get started?",
      answer: "Most businesses are live within 24-48 hours. Calls and email work immediately. Texting activates after carrier approval (usually 24-48 hours).",
    },
    {
      question: "What if my business is different?",
      answer: "Every contractor and service business has unique workflows. During setup, we tailor the system to how you actually operate.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. No contracts. No commitments. Cancel anytime.",
    },
    {
      question: "What kind of support do I get?",
      answer: "Direct support via email and text. If something isn't working right, we fix it—usually within hours, not days.",
    },
  ];

  return (
    <section className="py-24 md:py-32 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-border space-y-4"
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

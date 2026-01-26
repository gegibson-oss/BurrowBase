export function SocialProof() {
  const testimonials = [
    {
      quote: "I used to spend 2-3 hours a day just managing calls and scheduling. Now I focus on the actual work.",
      author: "Mike R.",
      business: "HVAC Contractor",
    },
    {
      quote: "The payment follow-ups alone have saved me countless awkward conversations. Everything just happens.",
      author: "Sarah T.",
      business: "General Contractor",
    },
    {
      quote: "My wife kept telling me I needed help. This gave me my evenings back without hiring anyone.",
      author: "James K.",
      business: "Remodeling",
    },
  ];

  return (
    <section className="py-24 md:py-32 border-t border-border bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Built for Owners
            </h2>
            <p className="text-xl text-muted-foreground">
              By people who understand the grind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-background p-8 rounded-2xl space-y-6"
              >
                <p className="text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

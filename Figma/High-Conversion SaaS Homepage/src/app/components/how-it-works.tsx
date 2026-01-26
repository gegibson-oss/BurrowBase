export function HowItWorks() {
  const steps = [
    { number: '1', title: 'Answer setup questions', description: '2-3 minutes to tell us about your business' },
    { number: '2', title: 'We install everything', description: 'Configuration, integrations, and testing' },
    { number: '3', title: 'Go live immediately', description: 'Calls and email start working right away' },
    { number: '4', title: 'Texting activates', description: 'After carrier approval (usually 24-48 hours)' },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Certainty, not complexity
            </p>
          </div>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-2xl font-semibold text-primary">
                  {step.number}
                </div>
                <div className="pt-2 space-y-2">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Emphasis */}
          <div className="pt-12 space-y-4 text-center">
            <p className="text-2xl md:text-3xl">You don't build anything.</p>
            <p className="text-2xl md:text-3xl">You don't manage anything.</p>
            <p className="text-2xl md:text-3xl font-semibold">You just use it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
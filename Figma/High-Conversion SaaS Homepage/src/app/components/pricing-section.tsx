import { Check } from 'lucide-react';

export function PricingSection() {
  const features = [
    'Digital front desk & lead response',
    'Protected scheduling with buffers',
    'Automated payments & invoicing',
    'Review management & reputation',
    'Setup & installation included',
    'Cancel anytime, no contracts',
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 border-t border-border bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Simple Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              One price. Everything included.
            </p>
          </div>

          {/* Price card */}
          <div className="max-w-xl mx-auto bg-background p-12 rounded-3xl border-2 border-primary/20 shadow-lg space-y-8">
            <div className="space-y-2">
              <div className="text-6xl md:text-7xl font-semibold">$297</div>
              <div className="text-xl text-muted-foreground">per month</div>
            </div>

            <div className="h-px bg-border"></div>

            <ul className="space-y-4 text-left">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-black text-white px-10 py-4 rounded-full hover:bg-black/90 transition-all hover:shadow-lg text-lg">
              Get Started
            </button>
          </div>

          {/* Comparison */}
          <p className="text-xl text-muted-foreground">
            Less than one missed job per month.
          </p>
        </div>
      </div>
    </section>
  );
}
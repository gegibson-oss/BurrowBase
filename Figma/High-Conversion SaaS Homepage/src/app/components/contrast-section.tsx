import { X, Check } from 'lucide-react';

export function ContrastSection() {
  const beforeItems = [
    'Missed calls = lost jobs',
    'Phone anxiety while working',
    'Nights spent on admin',
    'Constant interruptions',
    '"Did I forget something?"',
  ];

  const afterItems = [
    'Every lead handled instantly',
    'Jobs book themselves',
    'Customers stay informed automatically',
    'Payments chased for you',
    'Calm, predictable days',
  ];

  return (
    <section className="py-24 md:py-40 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Before */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl tracking-tight">
                Before Digital Operations Manager™
              </h2>
              <ul className="space-y-5">
                {beforeItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="h-6 w-6 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="space-y-8 md:border-l md:border-primary/20 md:pl-16">
              <h2 className="text-3xl md:text-4xl tracking-tight">
                After Digital Operations Manager™
              </h2>
              <ul className="space-y-5">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-foreground shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Emphasis */}
          <div className="mt-16 pt-16 border-t border-border text-center">
            <p className="text-xl md:text-2xl text-muted-foreground italic">
              Emotional relief, not just productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
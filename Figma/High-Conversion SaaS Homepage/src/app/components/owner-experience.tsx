import { Eye, EyeOff } from 'lucide-react';

export function OwnerExperience() {
  const whatYouSee = [
    "Today's and tomorrow's jobs",
    'New leads (already handled)',
    'Pending estimates',
    'Outstanding invoices',
    'Alerts only when needed',
  ];

  const whatYouStop = [
    'Manually replying to every lead',
    'Scheduling every single job',
    'Chasing down payments',
    'Remembering to follow up',
    'Asking for reviews',
  ];

  return (
    <section className="py-24 md:py-32 border-t border-border bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              The Owner Experience
            </h2>
            <p className="text-xl text-primary italic">
              This is the product
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
            {/* What you see */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">What you see</h3>
              </div>
              <ul className="space-y-4 pl-16">
                {whatYouSee.map((item, index) => (
                  <li key={index} className="text-lg flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What you stop doing */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <EyeOff className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold">What you stop doing</h3>
              </div>
              <ul className="space-y-4 pl-16">
                {whatYouStop.map((item, index) => (
                  <li key={index} className="text-lg text-muted-foreground line-through flex items-start gap-3">
                    <span className="mt-1 opacity-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quote */}
          <div className="pt-12 text-center">
            <blockquote className="text-3xl md:text-4xl italic text-primary font-light">
              "You finally get your head back."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
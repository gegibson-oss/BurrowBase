import { ArrowRight } from 'lucide-react';

export function ProblemsSolutions() {
  const items = [
    { problem: 'Missed calls', solution: 'Always-on digital front desk' },
    { problem: 'Slow response times', solution: 'Instant lead acknowledgment' },
    { problem: 'Scheduling chaos', solution: 'Protected booking with buffers' },
    { problem: 'Owner as dispatcher', solution: 'Automated job handoff' },
    { problem: 'Late invoices', solution: 'Auto-invoicing on completion' },
    { problem: 'Awkward payment follow-ups', solution: 'Automated reminders' },
    { problem: 'Review inconsistency', solution: 'Post-job automation' },
    { problem: 'Constant interruptions', solution: 'Exception-only alerts' },
  ];

  return (
    <section className="py-24 md:py-32 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Problems → Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Common pain points, handled automatically
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex-1 text-muted-foreground font-medium">
                  {item.problem}
                </div>
                <ArrowRight className="h-5 w-5 text-primary shrink-0" />
                <div className="flex-1 font-medium">
                  {item.solution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
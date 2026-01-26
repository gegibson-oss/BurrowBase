import { Plus } from 'lucide-react';

export function ClaritySection() {
  const roles = [
    'Front Desk',
    'Scheduler',
    'Dispatcher',
    'Billing Assistant',
    'Reputation Manager',
  ];

  return (
    <section className="py-24 md:py-40 border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* What this is NOT */}
          <div className="space-y-8 text-center">
            <h2 className="text-3xl md:text-5xl tracking-tight">
              What This Actually Is
            </h2>
            
            <div className="space-y-3 text-lg md:text-xl text-muted-foreground">
              <p>This is not a CRM login.</p>
              <p>This is not software you manage.</p>
              <p>This is not DIY automation.</p>
            </div>
          </div>

          {/* What this IS */}
          <div className="space-y-8 text-center">
            <p className="text-2xl md:text-3xl">
              This is:
            </p>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              An installed digital operations manager that runs your office—without hiring staff.
            </p>
          </div>

          {/* Visual metaphor */}
          <div className="space-y-8">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {roles.map((role, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="px-4 py-2 border border-border bg-background rounded-lg">
                    <span className="text-base md:text-lg">{role}</span>
                  </div>
                  {index < roles.length - 1 && (
                    <Plus className="h-5 w-5 text-muted-foreground hidden sm:block" />
                  )}
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-center text-xl md:text-2xl italic">
                — without payroll
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
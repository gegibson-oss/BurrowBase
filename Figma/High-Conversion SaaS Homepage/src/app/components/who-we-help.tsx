export function WhoWeHelp() {
  return (
    <section className="bg-white py-24 md:py-32 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">Who We Help</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Built for contractors and service businesses that want their operations handled without adding staff or juggling tools.
            </p>
          </div>

          {/* Three cards - more premium spacing */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-10 rounded-2xl">
              <h3 className="text-2xl mb-4">General Contractors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Keep projects moving without chasing calls or payments.
              </p>
            </div>

            <div className="bg-background p-10 rounded-2xl">
              <h3 className="text-2xl mb-4">Remodelers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Protect your schedule and stay focused on the work.
              </p>
            </div>

            <div className="bg-background p-10 rounded-2xl">
              <h3 className="text-2xl mb-4">Service Pros</h3>
              <p className="text-muted-foreground leading-relaxed">
                HVAC, plumbing, electrical—where missed calls mean lost revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
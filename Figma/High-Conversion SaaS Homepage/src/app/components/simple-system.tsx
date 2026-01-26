export function SimpleSystem() {
  return (
    <section className="bg-white py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
            One system.<br />Installed for you.
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Burrow Base quietly handles leads, scheduling, customer communication, payments, and reviews—so you can focus on the work, not the office.
          </p>

          <div className="pt-8">
            <button className="bg-black text-white px-10 py-4 rounded-full hover:bg-black/90 transition-all hover:shadow-lg text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export function FinalCTASection() {
  return (
    <section className="bg-gradient-to-br from-background to-[#F5F0EB] py-32 md:py-40 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
            Calm operations.<br />Real results.
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for businesses that serve real customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="bg-black text-white px-10 py-4 rounded-full hover:bg-black/90 transition-all hover:shadow-lg text-lg">
              Start Free
            </button>
            <button className="bg-white text-black px-10 py-4 rounded-full hover:bg-gray-50 transition-all border border-border text-lg">
              See How It Works
            </button>
          </div>

          <p className="text-muted-foreground pt-4">
            $297/month · No contracts · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
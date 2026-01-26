import { MessageSquare, Calendar, CreditCard, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-background py-24 md:py-40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm tracking-widest uppercase text-muted-foreground">
                For Contractors & Service Businesses
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
                Run your business.<br />
                Not the office.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                A digital operations manager that handles leads, scheduling, payments, and customer communication—automatically.
              </p>
            </div>
            
            <div className="space-y-4 pt-4">
              <button className="bg-black text-white px-10 py-4 rounded-full hover:bg-black/90 transition-all hover:shadow-lg text-lg">
                See How It Works
              </button>
              <p className="text-muted-foreground">
                $297/month · No contracts · Cancel anytime
              </p>
            </div>
          </div>

          {/* Right content - Cleaner phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="bg-white rounded-[3rem] p-3 shadow-2xl border-[12px] border-black w-[340px]">
                <div className="bg-[#E8DFD5] rounded-[2.2rem] overflow-hidden">
                  {/* Notch */}
                  <div className="bg-black h-7 rounded-b-3xl mx-auto w-36 mb-6"></div>
                  
                  {/* Phone content - clean grid layout */}
                  <div className="px-8 pb-12 space-y-6">
                    {/* Leads & Messages */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 rounded-xl p-3">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">Leads & Messages</p>
                          <p className="text-xs text-muted-foreground">Auto-response</p>
                        </div>
                      </div>
                    </div>

                    {/* Scheduling */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 rounded-xl p-3">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">Scheduling</p>
                          <p className="text-xs text-muted-foreground">Protected buffers</p>
                        </div>
                      </div>
                    </div>

                    {/* Payments */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 rounded-xl p-3">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">Payments</p>
                          <p className="text-xs text-muted-foreground">Auto-invoicing</p>
                        </div>
                      </div>
                    </div>

                    {/* Reviews */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 rounded-xl p-3 flex items-center justify-center">
                          <svg className="w-6 h-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">Reviews</p>
                          <p className="text-xs text-muted-foreground">Smart requests</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function FeaturesSection() {
  return (
    <div className="bg-background">
      {/* Digital Front Desk */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="space-y-8 max-w-xl">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">Never miss a lead</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Instant responses to every call, text, and inquiry—even when you're on a job site.
                </p>
              </div>
              
              <div className="space-y-6 pt-4">
                <div className="space-y-2">
                  <h3 className="text-xl">Automatic engagement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Conversations start and move forward without you touching your phone.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl">Clean inbox</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All messages tracked and organized. No call anxiety.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="bg-gradient-to-br from-[#1a1f2e] to-[#2d3748] rounded-[3rem] p-8 shadow-2xl w-[360px]">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-white/60 text-sm">
                    <span>Messages</span>
                    <span>All handled</span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-primary/20 border border-primary/30 rounded-2xl p-5 text-white">
                      <p className="text-sm mb-2 text-white/80">Missed Call</p>
                      <p className="font-medium">+1 (423) 555-0184</p>
                      <p className="text-sm text-white/60 mt-2">Auto-reply sent</p>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-5 text-white">
                      <p className="leading-relaxed">
                        Thanks for reaching out! We're on a job right now. Book instantly below.
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-4 text-white/80 text-sm">
                      <p className="font-medium mb-1">Appointment Confirmed</p>
                      <p className="text-white/60">Friday · 9:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#1a1f2e] to-[#2d3748] rounded-[3rem] p-8 shadow-2xl w-[360px]">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-white/60 text-sm">
                    <span>Today's Schedule</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">Protected</span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-blue-600/30 border border-blue-500/30 rounded-xl p-4 text-white">
                      <p className="font-medium mb-1">Service Visit</p>
                      <p className="text-sm text-white/70">8:15 - 9:30 AM</p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-3 text-center text-white/50 text-sm">
                      Buffer · 30 min
                    </div>

                    <div className="bg-blue-600/30 border border-blue-500/30 rounded-xl p-4 text-white">
                      <p className="font-medium mb-1">Installation</p>
                      <p className="text-sm text-white/70">10:00 - 11:15 AM</p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-3 text-center text-white/50 text-sm">
                      Buffer · 30 min
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 max-w-xl order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">Protected calendar</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Jobs spaced properly with built-in buffers. No double bookings. No impossible days.
                </p>
              </div>
              
              <div className="space-y-6 pt-4">
                <div className="space-y-2">
                  <h3 className="text-xl">Automatic confirmations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Customers know exactly when you're coming.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl">Smart rescheduling</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Changes handled without back-and-forth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payments */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="space-y-8 max-w-xl">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">Get paid faster</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Invoices sent automatically when jobs complete. Friendly reminders for outstanding payments.
                </p>
              </div>
              
              <div className="space-y-6 pt-4">
                <div className="space-y-2">
                  <h3 className="text-xl">Zero chasing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The system handles follow-ups professionally.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl">Clear visibility</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    See paid, unpaid, and overdue at a glance.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="bg-gradient-to-br from-[#1a1f2e] to-[#2d3748] rounded-[3rem] p-8 shadow-2xl w-[360px]">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-white/60 text-sm">
                    <span>Payments</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">Automated</span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-5 text-white">
                      <p className="text-sm text-white/70 mb-2">Invoice #1247</p>
                      <p className="text-3xl font-semibold mb-3">$920</p>
                      <div className="flex gap-2 text-xs">
                        <span className="bg-blue-500/30 px-3 py-1 rounded-full">Sent</span>
                        <span className="bg-blue-500/30 px-3 py-1 rounded-full">Viewed</span>
                        <span className="bg-green-500/30 px-3 py-1 rounded-full">Paid</span>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 text-white/70 text-sm">
                      <p className="mb-1">Auto-sent after job completion</p>
                      <p className="text-white/50">No manual work required</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reputation */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#1a1f2e] to-[#2d3748] rounded-[3rem] p-8 shadow-2xl w-[360px]">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-white/60 text-sm">
                    <span>Reputation</span>
                    <span className="text-white/80">Exception-only</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-900/30 border-2 border-green-600/40 rounded-xl p-6 text-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-3"></div>
                      <p className="text-xs text-white/80">Happy customer</p>
                      <p className="text-xs text-white/50 mt-1">Review requested</p>
                    </div>
                    <div className="bg-amber-900/30 border-2 border-amber-600/40 rounded-xl p-6 text-center">
                      <div className="w-3 h-3 bg-amber-500 rounded-full mx-auto mb-3"></div>
                      <p className="text-xs text-white/80">Issue detected</p>
                      <p className="text-xs text-white/50 mt-1">Owner notified</p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 text-white/70 text-sm">
                    <p className="mb-1">Problems flagged before going public</p>
                    <p className="text-white/50">You only hear when needed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 max-w-xl order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">Protect your reputation</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Automatic review requests to happy customers. Issues surface privately before going public.
                </p>
              </div>
              
              <div className="space-y-6 pt-4">
                <div className="space-y-2">
                  <h3 className="text-xl">Grow reviews organically</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The best customers are prompted automatically.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl">Early warning system</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fix problems before they become bad reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

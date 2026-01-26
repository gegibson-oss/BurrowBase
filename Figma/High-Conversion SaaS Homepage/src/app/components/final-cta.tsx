import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function FinalCTA() {
  return (
    <section className="py-24 md:py-40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-6xl tracking-tight leading-[1.1]">
            Stop Being the Office.<br />
            Install Your Digital Operations Manager™.
          </h2>

          <div className="pt-4 space-y-4">
            <Button 
              size="lg" 
              className="h-14 px-8 text-lg group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-muted-foreground">
              No demos. No learning curve. Installed for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
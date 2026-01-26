import { Star } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Star className="w-6 h-6 text-white fill-white" />
          </div>
          <span className="text-xl font-semibold">Burrow Base</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-foreground hover:text-foreground/70 transition-colors">
            Products
          </a>
          <a href="#pricing" className="text-foreground hover:text-foreground/70 transition-colors">
            Pricing
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-foreground/70 transition-colors">
            How It Works
          </a>
          <a href="#login" className="text-foreground hover:text-foreground/70 transition-colors">
            Login
          </a>
          <button className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-black/90 transition-colors">
            Start Free
          </button>
        </nav>
      </div>
    </header>
  );
}
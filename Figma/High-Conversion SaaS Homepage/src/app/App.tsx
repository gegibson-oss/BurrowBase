import { Header } from './components/header';
import { HeroSection } from './components/hero-section';
import { WhoWeHelp } from './components/who-we-help';
import { ProblemsSolutions } from './components/problems-solutions';
import { FeaturesSection } from './components/features-section';
import { HowItWorks } from './components/how-it-works';
import { OwnerExperience } from './components/owner-experience';
import { SocialProof } from './components/social-proof';
import { PricingSection } from './components/pricing-section';
import { FAQSection } from './components/faq-section';
import { SimpleSystem } from './components/simple-system';
import { FinalCTASection } from './components/final-cta-section';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhoWeHelp />
        <ProblemsSolutions />
        <FeaturesSection />
        <HowItWorks />
        <OwnerExperience />
        <SocialProof />
        <PricingSection />
        <FAQSection />
        <SimpleSystem />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
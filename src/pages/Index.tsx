import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FlowSection from '@/components/FlowSection';
import BenefitsSection from '@/components/BenefitsSection';
import UploadSection from '@/components/UploadSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FlowSection />
      <BenefitsSection />
      <UploadSection />
      <Footer />
    </div>
  );
};

export default Index;

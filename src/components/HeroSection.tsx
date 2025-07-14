import { motion } from 'framer-motion';
import { Shield, Lock, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const scrollToFlow = () => {
    document.querySelector('#flow')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow rounded-full filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-border/20 text-sm font-medium text-muted-foreground">
              <Shield className="w-4 h-4 mr-2 text-primary" />
              Confidential Computing Platform
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            VishwasSetu
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Retailers can securely collaborate and analyze customer data without ever exposing it — using confidential computing.
          </motion.p>

          {/* Description */}
          <motion.div 
            variants={itemVariants}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Customer data is encrypted and processed inside <strong className="text-foreground">TEEs (Trusted Execution Environments)</strong>, 
              which are secure hardware enclaves that allow data to be decrypted and analyzed only inside the enclave memory, 
              never exposing it to the OS, server, or cloud provider. Only anonymized or aggregated results are returned.
            </p>
          </motion.div>

          {/* Feature Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center items-center space-x-8 mb-12"
          >
            <div className="flex items-center space-x-2 text-success">
              <Lock className="w-5 h-5" />
              <span className="text-sm font-medium">Encrypted</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">TEE Protected</span>
            </div>
            <div className="flex items-center space-x-2 text-warning">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Zero Exposure</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="xl" onClick={scrollToFlow}>
              Discover How It Works
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="glass" size="xl">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
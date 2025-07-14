import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Database } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Processing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/insights');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            {/* Animated Secure Vault */}
            <motion.div
              className="relative w-32 h-32 mx-auto mb-8"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-md shadow-glow"></div>
              <div className="relative w-full h-full bg-card border-2 border-primary/30 rounded-md flex items-center justify-center">
                <Shield className="w-16 h-16 text-primary" />
              </div>
              
              {/* Orbiting Icons */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-sm flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Lock className="w-4 h-4 text-primary-foreground" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-2 w-8 h-8 bg-secondary rounded-sm flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Database className="w-4 h-4 text-secondary-foreground" />
              </motion.div>
            </motion.div>

            {/* Processing Text */}
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Processing Your Data Securely
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Your data is being analyzed within a secure trusted execution environment. 
              Please wait while we generate insights...
            </motion.p>

            {/* Progress Indicator */}
            <motion.div
              className="w-64 h-1 bg-muted rounded-full mx-auto overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                className="h-full bg-gradient-primary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>

            <motion.p
              className="text-sm text-muted-foreground mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              Encrypting • Analyzing • Anonymizing
            </motion.p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Processing;
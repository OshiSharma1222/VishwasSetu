import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Upload, Shield, Server, Eye, Download, Users, ArrowRight } from 'lucide-react';

const FlowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      id: 1,
      title: "Upload Encrypted Data",
      description: "Retailers securely upload customer data through our dashboard. Data is automatically encrypted before leaving your infrastructure.",
      icon: Upload,
      color: "text-blue-400"
    },
    {
      id: 2,
      title: "Transfer to TEE-Secured Server",
      description: "Your encrypted data is transferred to Azure Confidential VMs - secure hardware enclaves that provide complete isolation.",
      icon: Server,
      color: "text-purple-400"
    },
    {
      id: 3,
      title: "Private In-Memory Decryption",
      description: "Data is decrypted only inside the TEE memory. Customer segmentation, fraud detection, and trend analysis are performed securely.",
      icon: Shield,
      color: "text-green-400"
    },
    {
      id: 4,
      title: "Raw Data Never Visible",
      description: "Your sensitive data never leaves the secure enclave. The OS, server, or cloud provider cannot access your information.",
      icon: Eye,
      color: "text-yellow-400"
    },
    {
      id: 5,
      title: "Anonymized Results Only",
      description: "Only aggregated insights and anonymized results are returned to you - no personal identities or raw data ever exposed.",
      icon: Download,
      color: "text-red-400"
    },
    {
      id: 6,
      title: "Secure Collaboration",
      description: "Optional: Send targeted messages to customer segments without exposing their identities or sharing data with other retailers.",
      icon: Users,
      color: "text-indigo-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const stepVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <section id="flow" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            How It Works
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Behind the Scenes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            See the complete journey of your data through our confidential computing pipeline
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={stepVariants}
              className="relative group"
            >
                <div className="bg-card border border-border rounded-md p-8 shadow-card hover:shadow-glow transition-all duration-300 group-hover:scale-105 h-full relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-primary rounded-sm flex items-center justify-center text-white font-bold text-sm shadow-elegant">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-sm bg-muted/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-8 h-8 text-primary`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connection Lines */}
                  {index < steps.length - 1 && (
                    <>
                      {/* Horizontal line for desktop */}
                      <div className="hidden lg:block absolute -right-8 top-1/2 w-16 h-0.5 bg-gradient-to-r from-primary to-primary/30 transform -translate-y-1/2"></div>
                      {/* Vertical line for mobile/tablet */}
                      <div className="lg:hidden absolute -bottom-8 left-1/2 w-0.5 h-16 bg-gradient-to-b from-primary to-primary/30 transform -translate-x-1/2"></div>
                    </>
                  )}
                </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-success/10 border border-success/20 text-success font-medium">
            <Shield className="w-5 h-5 mr-2" />
            Zero-Trust Architecture • End-to-End Encryption • GDPR Compliant
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlowSection;
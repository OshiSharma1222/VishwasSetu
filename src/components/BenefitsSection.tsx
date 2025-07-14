import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Store, 
  Shield, 
  TrendingUp, 
  Lock, 
  User, 
  FileCheck, 
  Users, 
  Eye,
  Zap,
  Heart
} from 'lucide-react';

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const retailerBenefits = [
    {
      icon: Users,
      title: "Secure Collaboration",
      description: "Share insights with other retailers without exposing your raw customer data or competitive information.",
      color: "text-blue-400"
    },
    {
      icon: TrendingUp,
      title: "Valuable Insights",
      description: "Unlock powerful analytics including customer segmentation, fraud detection, and market trends.",
      color: "text-green-400"
    },
    {
      icon: Shield,
      title: "Zero Compliance Risk",
      description: "Maintain full GDPR, CCPA, and data protection compliance while analyzing sensitive customer data.",
      color: "text-purple-400"
    },
    {
      icon: Store,
      title: "Competitive Advantage",
      description: "Access broader market insights while keeping your business intelligence and customer base private.",
      color: "text-orange-400"
    }
  ];

  const customerBenefits = [
    {
      icon: Lock,
      title: "Data Never Exposed",
      description: "Your personal information is never visible to retailers, servers, or even cloud providers during analysis.",
      color: "text-red-400"
    },
    {
      icon: Eye,
      title: "Privacy Preserved",
      description: "Advanced cryptographic techniques ensure your identity remains anonymous throughout the process.",
      color: "text-indigo-400"
    },
    {
      icon: FileCheck,
      title: "Regulatory Aligned",
      description: "Full compliance with GDPR, CCPA, and other privacy regulations that protect your rights.",
      color: "text-emerald-400"
    },
    {
      icon: Heart,
      title: "Trust & Transparency",
      description: "Know exactly how your data is being used with complete transparency and control over permissions.",
      color: "text-pink-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <section id="benefits" className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-glow rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            Benefits for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Everyone</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A win-win solution that empowers retailers while protecting customer privacy
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Retailers Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 shadow-glow">
                <Store className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">For Retailers</h3>
              <p className="text-muted-foreground">Unlock the power of collaborative analytics</p>
            </div>

            <div className="space-y-6">
              {retailerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:bg-card/70 hover:border-border/50 transition-all duration-300 hover:shadow-card"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Customers Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 shadow-glow">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">For Customers</h3>
              <p className="text-muted-foreground">Your privacy is our top priority</p>
            </div>

            <div className="space-y-6">
              {customerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:bg-card/70 hover:border-border/50 transition-all duration-300 hover:shadow-card"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-8 px-8 py-4 rounded-full bg-card/30 backdrop-blur-sm border border-border/20">
            <div className="flex items-center space-x-2 text-success">
              <Zap className="w-5 h-5" />
              <span className="font-medium">Zero Knowledge</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <Shield className="w-5 h-5" />
              <span className="font-medium">TEE Secured</span>
            </div>
            <div className="flex items-center space-x-2 text-warning">
              <FileCheck className="w-5 h-5" />
              <span className="font-medium">GDPR Compliant</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
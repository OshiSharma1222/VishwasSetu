import { motion } from 'framer-motion';
import { ArrowLeft, User, Tag, Hash, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Insights = () => {
  const navigate = useNavigate();

  const customers = [
    {
      id: 1,
      name: "Priya Sharma",
      insight: "Frequent buyer of organic and eco-friendly products",
      segment: "Environmentally Conscious Shoppers",
      token: "VSH-8475QX",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      insight: "Tech enthusiast with preference for premium gadgets",
      segment: "Premium Tech Buyers",
      token: "VSH-9231MN",
    },
    {
      id: 3,
      name: "Anita Patel",
      insight: "Health-focused shopper with regular fitness purchases",
      segment: "Health & Wellness Enthusiasts",
      token: "VSH-7642LP",
    },
    {
      id: 4,
      name: "Vikram Singh",
      insight: "Budget-conscious family shopper with bulk purchases",
      segment: "Value-Driven Families",
      token: "VSH-5893RK",
    },
    {
      id: 5,
      name: "Meera Reddy",
      insight: "Fashion-forward early adopter of trending styles",
      segment: "Fashion Trendsetters",
      token: "VSH-3047ZY",
    },
    {
      id: 6,
      name: "Arjun Gupta",
      insight: "Business professional with preference for quality tools",
      segment: "Professional Service Users",
      token: "VSH-6158BH",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-4 -ml-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Customer Insights Generated
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Your data has been securely processed using confidential computing. 
              Below are the behavioral insights and customer segments identified.
            </p>
          </motion.div>

          {/* Insights Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {customers.map((customer) => (
              <motion.div key={customer.id} variants={cardVariants}>
                <Card className="h-full border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-primary rounded-sm flex items-center justify-center">
                        <User className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {customer.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Insight */}
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Behavioral Insight</p>
                      <p className="text-foreground font-medium leading-relaxed">
                        {customer.insight}
                      </p>
                    </div>

                    {/* Segment */}
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Segment:</span>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-sm">
                        {customer.segment}
                      </span>
                    </div>

                    {/* Token */}
                    <div className="flex items-center gap-2 pt-2 border-t border-border">
                      <Hash className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Token:</span>
                      <code className="text-xs font-mono bg-muted px-2 py-1 rounded-sm text-foreground">
                        {customer.token}
                      </code>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Message */}
          <motion.div
            className="bg-card border border-border rounded-md p-6 shadow-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Secure Processing Complete</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your data has been securely processed and customers have been grouped based on behavioral insights. 
                  Tokens have been generated for traceability and privacy compliance. All raw data was processed 
                  within trusted execution environments and has been permanently removed from our systems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Insights;
import { motion } from 'framer-motion';
import { Shield, Mail, Github, Twitter, Linkedin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gradient-secondary border-t border-border relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    SecureVault
                  </span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-md">
                  Enabling secure analytics and collaboration on encrypted retail data using confidential computing technology. 
                  Your data stays private, your insights stay powerful.
                </p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Trusted by leading retailers worldwide</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {['Home', 'Flow', 'Benefits', 'Upload'].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@securevault.dev"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    <span>contact@securevault.dev</span>
                  </a>
                  
                  {/* Social Links */}
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground mb-3">Follow us</p>
                    <div className="flex space-x-3">
                      {[
                        { icon: Github, href: "#", label: "GitHub" },
                        { icon: Twitter, href: "#", label: "Twitter" },
                        { icon: Linkedin, href: "#", label: "LinkedIn" }
                      ].map(({ icon: Icon, href, label }) => (
                        <a
                          key={label}
                          href={href}
                          aria-label={label}
                          className="w-10 h-10 bg-muted/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110"
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-sm text-muted-foreground"
            >
              <span>© {currentYear} SecureVault. All rights reserved.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-sm text-muted-foreground"
            >
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>using Confidential Computing & React</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary"
              >
                Back to Top ↑
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
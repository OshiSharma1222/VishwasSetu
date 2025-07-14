import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Upload, FileCheck, Lock, Shield, AlertCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const UploadSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [file, setFile] = useState<File | null>(null);
  const [encryptionKey, setEncryptionKey] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadStatus('idle');
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a CSV file to upload.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      setUploadStatus('success');
      toast({
        title: "Upload Successful",
        description: "Redirecting to secure processing...",
      });
      
      // Navigate to processing page after short delay
      setTimeout(() => {
        navigate('/processing');
      }, 1000);
      
    }, 1500);
  };

  const getStatusIcon = () => {
    switch (uploadStatus) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-success" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-destructive" />;
      default:
        return <Upload className="w-5 h-5 text-primary" />;
    }
  };

  const getStatusMessage = () => {
    switch (uploadStatus) {
      case 'success':
        return "Data securely uploaded to TEE enclave";
      case 'error':
        return "Upload failed. Please try again.";
      default:
        return "Ready to upload";
    }
  };

  return (
    <section id="upload" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary-glow rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            Retailer
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Upload Portal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Securely upload your customer data for confidential analysis. Your data will be encrypted and processed in a trusted execution environment.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card border border-border rounded-3xl shadow-elegant p-8 md:p-12"
        >
          {/* Security Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success font-medium">
              <Shield className="w-4 h-4 mr-2" />
              Encrypted • TEE Protected • Zero Knowledge
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* File Upload */}
            <div>
              <label htmlFor="file-upload" className="block text-sm font-medium text-foreground mb-4">
                Upload Customer Data (CSV)
              </label>
              <div className="relative">
                <input
                  id="file-upload"
                  type="file"
                  accept=".csv"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-xl cursor-pointer bg-muted/20 hover:bg-muted/30 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">CSV files only</p>
                  </div>
                </label>
              </div>
              {file && (
                <div className="mt-4 flex items-center space-x-2 text-sm text-foreground">
                  <FileCheck className="w-4 h-4 text-success" />
                  <span>{file.name}</span>
                  <span className="text-muted-foreground">({(file.size / 1024).toFixed(1)} KB)</span>
                </div>
              )}
            </div>

            {/* Encryption Key */}
            <div>
              <label htmlFor="encryption-key" className="block text-sm font-medium text-foreground mb-4">
                Encryption Key (Optional)
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="encryption-key"
                  type="password"
                  value={encryptionKey}
                  onChange={(e) => setEncryptionKey(e.target.value)}
                  placeholder="Enter your encryption key"
                  className="w-full pl-12 pr-4 py-4 bg-muted/20 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Leave blank to use our default encryption. Your own key provides additional security.
              </p>
            </div>

            {/* Status Display */}
            <div className="flex items-center justify-center space-x-2 py-4">
              {getStatusIcon()}
              <span className={`text-sm font-medium ${
                uploadStatus === 'success' ? 'text-success' :
                uploadStatus === 'error' ? 'text-destructive' :
                'text-muted-foreground'
              }`}>
                {getStatusMessage()}
              </span>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                variant="hero"
                size="xl"
                disabled={!file || isUploading}
                className="min-w-48"
              >
                {isUploading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Uploading...
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5 mr-2" />
                    Secure Upload
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Security Information */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <Lock className="w-6 h-6 text-primary mx-auto" />
                <h4 className="text-sm font-semibold text-foreground">End-to-End Encrypted</h4>
                <p className="text-xs text-muted-foreground">Data encrypted before leaving your system</p>
              </div>
              <div className="space-y-2">
                <Shield className="w-6 h-6 text-primary mx-auto" />
                <h4 className="text-sm font-semibold text-foreground">TEE Processing</h4>
                <p className="text-xs text-muted-foreground">Processed in secure hardware enclaves</p>
              </div>
              <div className="space-y-2">
                <FileCheck className="w-6 h-6 text-primary mx-auto" />
                <h4 className="text-sm font-semibold text-foreground">Compliant</h4>
                <p className="text-xs text-muted-foreground">GDPR & CCPA compliant processing</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UploadSection;
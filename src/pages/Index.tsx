import { useState } from "react";
import { PackageCard } from "@/components/PackageCard";
import { PhoneModal } from "@/components/PhoneModal";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { SuccessAlert } from "@/components/SuccessAlert";
import { Wifi, Signal, Globe } from "lucide-react";

interface Package {
  id: string;
  duration: string;
  price: number;
  isPopular?: boolean;
}

const packages: Package[] = [
  { id: "1", duration: "1 Hour", price: 10 },
  { id: "2", duration: "2 Hours", price: 15, isPopular: true },
  { id: "3", duration: "6 Hours", price: 35 },
  { id: "4", duration: "24 Hours", price: 60 },
];

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePackageSelect = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handlePayment = async (phoneNumber: string) => {
    setIsLoading(true);
    setIsModalOpen(false);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
    }, 3000);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    setSelectedPackage(null);
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card border-b border-border shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-center gap-3">
              <div className="bg-wifi-gradient rounded-full p-3">
                <Wifi className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">WiFi Portal</h1>
                <p className="text-muted-foreground">High-speed internet access</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center gap-2 mb-6">
              <div className="flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
                <Signal className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-accent-foreground">Strong Signal</span>
              </div>
              <div className="flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-accent-foreground">Worldwide Access</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Choose Your 
              <span className="bg-wifi-gradient bg-clip-text text-transparent"> WiFi Plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get instant access to high-speed internet. Select a plan that suits your needs and start browsing immediately.
            </p>
          </div>

          {/* Package Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                duration={pkg.duration}
                price={pkg.price}
                isPopular={pkg.isPopular}
                onSelect={() => handlePackageSelect(pkg)}
              />
            ))}
          </div>

          {/* Features */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wifi className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">High-Speed Connection</h3>
                <p className="text-muted-foreground">Enjoy blazing fast internet speeds for all your browsing needs</p>
              </div>
              
              <div className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Signal className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Strong Signal</h3>
                <p className="text-muted-foreground">Reliable connection with excellent coverage throughout the area</p>
              </div>
              
              <div className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Global Access</h3>
                <p className="text-muted-foreground">Access any website and service from anywhere in the world</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modals and Overlays */}
      <PhoneModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPayment={handlePayment}
        selectedPackage={selectedPackage}
        isLoading={isLoading}
      />

      {isLoading && <LoadingSpinner />}

      <SuccessAlert
        isVisible={showSuccess}
        onClose={handleSuccessClose}
        package={selectedPackage}
      />
    </>
  );
};

export default Index;

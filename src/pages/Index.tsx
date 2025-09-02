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
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-wifi-gradient rounded-full p-3">
                  <Wifi className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">WiFi Portal</h1>
                  <p className="text-muted-foreground">High-speed internet access</p>
                </div>
              </div>
              
              {/* Admin Button */}
              <a 
                href="/admin"
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium"
              >
                Admin Panel
              </a>   
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* Welcome Section */}
          <div className="text-center mb-12">
           
            
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

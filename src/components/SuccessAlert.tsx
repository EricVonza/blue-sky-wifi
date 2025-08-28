import { CheckCircle, Wifi, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessAlertProps {
  isVisible: boolean;
  onClose: () => void;
  package: { duration: string; price: number } | null;
}

export const SuccessAlert = ({ isVisible, onClose, package: selectedPackage }: SuccessAlertProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-card border border-border rounded-2xl p-8 max-w-md mx-4 shadow-wifi-hover animate-scale-in">
        <div className="text-center">
          <div className="relative mb-6">
            <div className="bg-primary/10 rounded-full p-4 inline-block">
              <CheckCircle className="h-16 w-16 text-primary" />
            </div>
            <div className="absolute -top-2 -right-2 bg-wifi-gradient rounded-full p-2">
              <Wifi className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Payment Successful!
          </h2>
          
          <p className="text-lg text-primary font-semibold mb-4">
            Enjoy high-speed WiFi
          </p>
          
          {selectedPackage && (
            <div className="bg-accent rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-accent-foreground">
                  Duration: {selectedPackage.duration}
                </span>
                <span className="font-bold text-primary">
                  Ksh {selectedPackage.price}
                </span>
              </div>
            </div>
          )}
          
          <p className="text-muted-foreground mb-6">
            You are now connected to our high-speed WiFi network. Happy browsing!
          </p>
          
          <Button 
            onClick={onClose}
            className="w-full bg-wifi-gradient hover:opacity-90 shadow-wifi"
            size="lg"
          >
            Start Browsing
          </Button>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 h-8 w-8 p-0 hover:bg-muted"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
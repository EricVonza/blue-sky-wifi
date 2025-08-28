import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Smartphone, Wifi } from "lucide-react";

interface PhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPayment: (phoneNumber: string) => void;
  selectedPackage: { duration: string; price: number } | null;
  isLoading: boolean;
}

export const PhoneModal = ({ 
  isOpen, 
  onClose, 
  onPayment, 
  selectedPackage, 
  isLoading 
}: PhoneModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      onPayment(phoneNumber);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      setPhoneNumber("");
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md animate-scale-in">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-primary">
            <Wifi className="h-5 w-5" />
            Complete Your WiFi Purchase
          </DialogTitle>
        </DialogHeader>
        
        {selectedPackage && (
          <div className="bg-accent rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center">
              <span className="font-medium text-accent-foreground">
                {selectedPackage.duration}
              </span>
              <span className="font-bold text-primary text-lg">
                Ksh {selectedPackage.price}
              </span>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="07XX XXX XXX"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={isLoading}
              className="transition-all duration-200 focus:ring-primary/20"
              required
            />
            <p className="text-sm text-muted-foreground">
              Enter your M-Pesa number to complete payment
            </p>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isLoading}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!phoneNumber.trim() || isLoading}
              className="flex-1 bg-wifi-gradient hover:opacity-90 shadow-wifi"
            >
              {isLoading ? "Processing..." : "Pay Now"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
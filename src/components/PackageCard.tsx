import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Clock } from "lucide-react";

interface PackageCardProps {
  duration: string;
  price: number;
  isPopular?: boolean;
  onSelect: () => void;
}

export const PackageCard = ({ duration, price, isPopular = false, onSelect }: PackageCardProps) => {
  return (
    <Card 
      className={`
        relative p-6 transition-all duration-300 cursor-pointer
        bg-card border-border hover:border-primary/30
        shadow-wifi hover:shadow-wifi-hover transform hover:-translate-y-1
        ${isPopular ? 'ring-2 ring-primary/20 animate-pulse-glow' : ''}
      `}
      onClick={onSelect}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-wifi-gradient text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-wifi">
            Popular
          </span>
        </div>
      )}
      
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Wifi className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 mb-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <h3 className="text-xl font-bold text-foreground">{duration}</h3>
        </div>
        
        <div className="mb-6">
          <span className="text-3xl font-bold text-primary">Ksh {price}</span>
        </div>
        
        <Button 
          className="w-full bg-wifi-gradient hover:opacity-90 transition-all duration-300 shadow-wifi font-semibold"
          size="lg"
        >
          Select Plan
        </Button>
      </div>
    </Card>
  );
};
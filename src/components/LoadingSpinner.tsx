import { Wifi, Loader2 } from "lucide-react";

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
      <div className="text-center p-8">
        <div className="relative mb-6">
          <div className="animate-pulse-glow">
            <Wifi className="h-16 w-16 text-primary mx-auto" />
          </div>
          <Loader2 className="h-8 w-8 text-primary-light animate-spin-slow absolute -bottom-2 -right-2" />
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Processing Payment
        </h3>
        <p className="text-muted-foreground">
          Please wait while we confirm your payment...
        </p>
        
        <div className="flex justify-center mt-4">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
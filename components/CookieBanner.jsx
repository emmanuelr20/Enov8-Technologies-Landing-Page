"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-200 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-2xl p-6 rounded-none relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex items-start gap-4 mb-6">
          <div className="bg-light-primary/10 p-3 rounded-none">
            <Cookie className="text-light-primary" size={24} />
          </div>
          <div>
            <h3 className="font-space font-bold text-lg mb-1 dark:text-white uppercase tracking-tight">Cookie Consent</h3>
            <p className="text-sm text-gray-600 dark:text-zinc-400 font-poppins leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            variant="outline" 
            onClick={handleDecline}
            className="flex-1 rounded-none font-bold uppercase text-[11px] tracking-widest border-zinc-200 dark:border-zinc-700"
          >
            Decline
          </Button>
          <Button 
            onClick={handleAccept}
            className="flex-1 rounded-none bg-light-primary hover:bg-light-primary/90 text-white font-bold uppercase text-[11px] tracking-widest shadow-lg shadow-light-primary/20"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}

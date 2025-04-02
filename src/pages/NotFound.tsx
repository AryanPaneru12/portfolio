
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-bold text-navy-500">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Oops! Market Crash!</p>
        
        <div className="mb-8">
          <img 
            src="https://media.giphy.com/media/3o7TKEP6YngkCKFofC/giphy.gif" 
            alt="Finance meme" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <p className="text-gray-600 mb-8">
          Looks like this page has gone bearish. Let's return to a bull market!
        </p>
        
        <Button asChild>
          <a href="/">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;


import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, Code } from "lucide-react";
import ThreeScene from "./ThreeScene";

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Aryan Paneru";
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        // Typing forward
        setDisplayText(prev => prev + fullText[index]);
        setIndex(index + 1);
        setTypingSpeed(150);
      } else if (!isDeleting && index >= fullText.length) {
        // Finished typing, pause before deleting
        setIsDeleting(true);
        setTypingSpeed(1000); // Pause before starting to delete
      } else if (isDeleting && displayText.length > 0) {
        // Deleting
        setDisplayText(prev => prev.slice(0, -1));
        setTypingSpeed(75); // Delete faster than typing
      } else if (isDeleting && displayText.length === 0) {
        // Finished deleting, start typing again
        setIsDeleting(false);
        setIndex(0);
        setTypingSpeed(500); // Pause before starting to type again
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [index, fullText, isDeleting, displayText.length, typingSpeed]);

  const downloadResume = () => {
    // This would typically link to an actual PDF file
    alert('Resume download functionality would be linked here');
  };

  return (
    <div id="home" className="relative min-h-screen flex flex-col md:flex-row items-center justify-center">
      {/* Background gradient effect */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-fintech-500 opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-navy-500 opacity-10 rounded-full blur-3xl -z-10"></div>
      
      {/* Content container */}
      <div className="w-full md:w-1/2 px-6 py-12 md:py-0 z-10 animate-fade-in">
        <h2 className="text-fintech-500 font-medium tracking-wider mb-2">Hi there, I'm</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {displayText}
          <span className="inline-block w-1 h-8 md:h-10 lg:h-12 bg-fintech-500 ml-1 animate-pulse">
            |
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-heading text-navy-500 mb-6">
          Bridging FinTech Innovation & Data Science
        </p>
        <p className="text-gray-600 mb-8 max-w-lg">
          Financial technology enthusiast with expertise in machine learning and data science. 
          Experienced in time series forecasting, system integration, and developing real-time 
          dashboards for financial institutions. Passionate about bridging the gap between finance 
          and technology.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Button className="bg-fintech-500 hover:bg-fintech-600 text-white">
            <Code className="mr-2 h-4 w-4" />
            View Projects
          </Button>
          <Button variant="outline" className="border-fintech-500 text-fintech-500" onClick={downloadResume}>
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button variant="ghost" className="text-navy-500">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </div>
      
      {/* 3D Scene */}
      <div className="w-full md:w-1/2 h-[300px] md:h-screen">
        <ThreeScene />
      </div>
    </div>
  );
};

export default HeroSection;

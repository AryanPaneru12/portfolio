import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-white text-2xl font-bold font-heading">
              Aryan<span className="text-fintech-500">.</span>
            </a>
            <p className="text-gray-400 mt-2">Bridging FinTech Innovation & Data Science</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Aryanpaneru" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-fintech-500 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/aryanpaneru/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-fintech-500 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Aryan Paneru. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/aryan-paneru/portfolio" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Repository
                </a>
              </li>
              <li>
                <a 
                  href="https://aryan-paneru.github.io" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Live Site
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

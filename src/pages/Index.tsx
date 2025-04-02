
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Aryan Paneru | Portfolio";
    
    // Add meta tags for SEO
    const metaTags = [
      {
        name: "description",
        content: "Portfolio of Aryan Paneru - FinTech innovator and Data Science specialist"
      },
      {
        name: "keywords",
        content: "Aryan Paneru, FinTech, Machine Learning, Data Science, Portfolio"
      }
    ];
    
    metaTags.forEach(tag => {
      const metaTag = document.createElement('meta');
      metaTag.name = tag.name;
      metaTag.content = tag.content;
      document.head.appendChild(metaTag);
    });
    
    // Cleanup function
    return () => {
      metaTags.forEach(tag => {
        const element = document.querySelector(`meta[name="${tag.name}"]`);
        if (element) {
          element.remove();
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

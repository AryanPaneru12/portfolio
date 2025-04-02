
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send the form data to a server
    console.log("Form submitted:", formData);
    alert("Thanks for your message! In a real app, this would be sent to a server.");
  };
  
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-heading font-bold mb-2 text-center">
          Get In Touch
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Have a question or want to work together? Reach out to me.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-fintech-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-fintech-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">aryan.paneru@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 bg-fintech-100 rounded-full flex items-center justify-center mr-4">
                  <Linkedin className="h-5 w-5 text-fintech-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/aryan-paneru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-navy-500 hover:underline"
                  >
                    linkedin.com/in/aryan-paneru
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 bg-fintech-100 rounded-full flex items-center justify-center mr-4">
                  <Github className="h-5 w-5 text-fintech-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <a 
                    href="https://github.com/aryan-paneru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-navy-500 hover:underline"
                  >
                    github.com/aryan-paneru
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button type="submit" className="bg-fintech-500 hover:bg-fintech-600">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

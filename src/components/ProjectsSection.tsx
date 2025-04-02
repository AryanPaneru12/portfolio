
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "FinTrack: Predictive Analytics Platform",
    description: "A fintech predictive modeling platform that forecasts market trends using SARIMAX models and machine learning algorithms. Features real-time dashboard with interactive visualizations.",
    tags: ["Python", "TensorFlow", "PostgreSQL", "React"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "BlockChain DeFi Prototype",
    description: "A decentralized finance prototype built on blockchain technology. Implemented smart contracts for automated lending and borrowing in a trustless environment.",
    tags: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-heading font-bold mb-2 text-center">
          Projects
        </h2>
        <p className="text-center text-gray-500 mb-10">Selected works showcasing my expertise</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-navy-500 to-fintech-500 text-white">
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-gray-600 mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-navy-100 text-navy-700 text-xs font-medium px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                {project.demoUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

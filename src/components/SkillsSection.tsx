
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  LineChart, Clock, Database, Code, Cpu, 
  BarChart, GitBranch, Award, Wrench
} from "lucide-react";

interface Skill {
  id: number;
  name: string;
  icon: React.ReactNode;
  level: number; // 1-5
  category: 'technical' | 'tool';
}

const skills: Skill[] = [
  {
    id: 1,
    name: "Time Series Forecasting",
    icon: <Clock className="h-6 w-6 skill-icon" />,
    level: 5,
    category: 'technical'
  },
  {
    id: 2,
    name: "Machine Learning",
    icon: <Cpu className="h-6 w-6 skill-icon" />,
    level: 4,
    category: 'technical'
  },
  {
    id: 3,
    name: "Front-End Development",
    icon: <Code className="h-6 w-6 skill-icon" />,
    level: 4,
    category: 'technical'
  },
  {
    id: 4,
    name: "Data Visualization",
    icon: <BarChart className="h-6 w-6 skill-icon" />,
    level: 5,
    category: 'technical'
  },
  {
    id: 5,
    name: "Version Control",
    icon: <GitBranch className="h-6 w-6 skill-icon" />,
    level: 4,
    category: 'technical'
  },
  {
    id: 6,
    name: "Sci-Kit Learn",
    icon: <LineChart className="h-6 w-6 skill-icon" />,
    level: 5,
    category: 'tool'
  },
  {
    id: 7,
    name: "Keras",
    icon: <Wrench className="h-6 w-6 skill-icon" />,
    level: 4,
    category: 'tool'
  },
  {
    id: 8,
    name: "PostgreSQL",
    icon: <Database className="h-6 w-6 skill-icon" />,
    level: 4,
    category: 'tool'
  }
];

const certifications = [
  {
    id: 1,
    name: "E-Business Certification",
    issuer: "VIT University",
    year: "2022"
  }
];

const SkillBar: React.FC<{level: number}> = ({ level }) => {
  return (
    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-fintech-500" 
        style={{ width: `${level * 20}%` }} 
      />
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const toolSkills = skills.filter(skill => skill.category === 'tool');
  
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-heading font-bold mb-10 text-center">
          Skills & Expertise
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-navy-500">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skill) => (
                <Card key={skill.id} className="skill-card">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-100 p-2 rounded-full mr-4">
                        {skill.icon}
                      </div>
                      <h4 className="font-medium">{skill.name}</h4>
                    </div>
                    <SkillBar level={skill.level} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-navy-500">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolSkills.map((skill) => (
                <Card key={skill.id} className="skill-card">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-100 p-2 rounded-full mr-4">
                        {skill.icon}
                      </div>
                      <h4 className="font-medium">{skill.name}</h4>
                    </div>
                    <SkillBar level={skill.level} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-navy-500">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.id} className="skill-card">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-fintech-100 p-2 rounded-lg mr-4">
                        <Award className="h-6 w-6 text-fintech-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">{cert.name}</h4>
                        <p className="text-gray-500 text-sm">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  LineChart, Clock, Database, Code, Cpu, 
  BarChart, GitBranch, Award, Wrench, Monitor
} from "lucide-react";

interface Skill {
  id: number;
  name: string;
  icon: React.ReactNode;
  level: number; // 1-5
  category: 'technical' | 'tool';
}

interface Language {
  id: number;
  name: string;
  level: number; // 1-5
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
    name: "Full Stack Development",
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
    name: "Computer Vision",
    icon: <Monitor className="h-6 w-6 skill-icon" />,
    level: 4,
    category: 'technical'
  },
  {
    id: 7,
    name: "Sci-Kit Learn",
    icon: <LineChart className="h-6 w-6 skill-icon" />,
    level: 5,
    category: 'tool'
  },
  {
    id: 8,
    name: "Keras",
    icon: <Wrench className="h-6 w-6 skill-icon" />,
    level: 4,
    category: 'tool'
  },
  {
    id: 9,
    name: "PostgreSQL",
    icon: <Database className="h-6 w-6 skill-icon" />,
    level: 4,
    category: 'tool'
  },
  {
    id: 10,
    name: "Docker",
    icon: <Clock className="h-6 w-6 skill-icon" />,
    level: 4,
    category: 'tool'
  }
];

const languages: Language[] = [
  {
    id: 1,
    name: "Python",
    level: 5,
  },
  {
    id: 2,
    name: "JavaScript",
    level: 4,
  },
  {
    id: 3,
    name: "HTML",
    level: 5,
  },
  {
    id: 4,
    name: "CSS",
    level: 4,
  },
  {
    id: 5,
    name: "SQL",
    level: 4,
  },
  {
    id: 6,
    name: "C",
    level: 3,
  },
  {
    id: 7,
    name: "C++",
    level: 3,
  },
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
              Languages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {languages.map((language) => (
                <Card key={language.id} className="skill-card">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-100 p-2 rounded-full mr-4">
                        <Code className="h-6 w-6 skill-icon" />
                      </div>
                      <h4 className="font-medium">{language.name}</h4>
                    </div>
                    <SkillBar level={language.level} />
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

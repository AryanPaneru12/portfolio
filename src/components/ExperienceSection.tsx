
import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: "Nepal Clearing House Ltd. (NCHL)",
    position: "Machine Learning Intern",
    duration: "Jun 2023 - Aug 2023",
    location: "Kathmandu, Nepal",
    responsibilities: [
      "Developed SARIMAX models for time-series forecasting of financial transactions",
      "Designed and implemented real-time dashboards using TensorFlow and PostgreSQL",
      "Optimized system integration workflows, reducing data processing time by 25%",
      "Created automated reporting systems for transaction monitoring",
      "Collaborated with cross-functional teams to implement ML-based anomaly detection"
    ]
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-heading font-bold mb-10 text-center">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experienceData.map((item) => (
            <div 
              key={item.id}
              className="animate-fade-in opacity-0"
              style={{ animationDelay: `${item.id * 0.3}s` }}
            >
              <Card className="border-l-4 border-navy-500 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="bg-navy-100 p-2 rounded-lg">
                      <Briefcase className="h-6 w-6 text-navy-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">
                            {item.position}
                          </h3>
                          <h4 className="text-fintech-500 font-medium mb-2">{item.company}</h4>
                        </div>
                        
                        <div className="flex items-center text-gray-500 mb-4 md:mb-0">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{item.duration}</span>
                          <span className="mx-2">•</span>
                          <span className="text-sm">{item.location}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                        <ul className="list-disc ml-5 text-gray-600 grid grid-cols-1 gap-2">
                          {item.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

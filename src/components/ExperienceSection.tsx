
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
  },
  {
    id: 2,
    company: "FinTech Solutions Inc.",
    position: "Data Science Associate",
    duration: "Jan 2023 - May 2023",
    location: "Bangalore, India",
    responsibilities: [
      "Analyzed large-scale financial transaction data for pattern recognition",
      "Built predictive models to identify potential fraud cases with 92% accuracy",
      "Developed interactive data visualizations for quarterly business reviews",
      "Collaborated with product teams to implement new features based on data insights",
      "Optimized ETL pipelines for improved data processing efficiency"
    ]
  },
  {
    id: 3,
    company: "Global Banking Technologies",
    position: "Frontend Development Intern",
    duration: "May 2022 - Aug 2022",
    location: "Chennai, India",
    responsibilities: [
      "Developed responsive user interfaces for banking applications using React",
      "Implemented data visualization components for financial analytics dashboards",
      "Collaborated with UX designers to improve user experience for mobile banking",
      "Participated in daily scrum meetings and sprint planning",
      "Contributed to the development of reusable UI component library"
    ]
  },
  {
    id: 4,
    company: "TechStart Innovation Lab",
    position: "Research Assistant",
    duration: "Sep 2021 - Dec 2021",
    location: "Vellore, India",
    responsibilities: [
      "Conducted research on blockchain applications in financial services",
      "Assisted in developing prototype DeFi applications for academic purposes",
      "Prepared technical documentation and research papers",
      "Presented findings at university research symposium",
      "Collaborated with faculty on grant proposals for fintech innovation"
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

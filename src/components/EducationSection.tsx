
import React from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  details: string[];
}

const educationData: EducationItem[] = [
  {
    id: 1,
    institution: "Vellore Institute of Technology",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "2022 - 2026",
    location: "Vellore, India",
    details: [
      "Minor in Finance",
      "CGPA: 8.5/10",
      "Focus on Machine Learning and Data Science"
    ]
  },
  {
    id: 2,
    institution: "Gems Institute",
    degree: "Cambridge International AS & A Levels",
    duration: "2018 - 2020",
    location: "Kathmandu, Nepal",
    details: [
      "Science Stream with Computer Science",
      "Percentage: 85%",
      "Clubs: music club, sport club, MUN club"
    ]
  },
  {
    id: 3,
    institution: "Gems School",
    degree: "SEE",
    duration: "2018",
    location: "Kathmandu, Nepal",
    details: [
      "GPA: 3.85/4.0",
      "Merit Scholarship Recipient"
    ]
  }
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-heading font-bold mb-10 text-center">
          Education
        </h2>

        <div className="timeline-container">
          {educationData.map((item) => (
            <div 
              key={item.id} 
              className={`timeline-item ${
                item.id % 2 === 0 ? "sm:ml-[50%]" : "sm:mr-[50%]"
              }`}
              style={{ animationDelay: `${item.id * 0.2}s` }}
            >
              <Card className="border-l-4 border-fintech-500 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-fintech-100 p-2 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-fintech-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {item.institution}
                      </h3>
                      <h4 className="text-navy-500 mb-2">{item.degree}</h4>
                      
                      <div className="flex items-center text-gray-500 mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{item.duration}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">{item.location}</span>
                      </div>
                      
                      <ul className="list-disc ml-5 text-gray-600">
                        {item.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
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

export default EducationSection;

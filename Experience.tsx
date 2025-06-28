import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovation Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead development of microservices architecture serving 1M+ users. Implemented CI/CD pipelines reducing deployment time by 60%.",
      achievements: [
        "Architected and deployed scalable cloud infrastructure",
        "Mentored junior developers and led code reviews",
        "Optimized application performance improving load times by 40%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams.",
      achievements: [
        "Built responsive web applications from scratch",
        "Integrated third-party APIs and payment systems",
        "Improved user experience through A/B testing"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Stripe"]
    },
    {
      title: "Software Developer",
      company: "StartUp Ventures",
      location: "Austin, TX",
      period: "2019 - 2020",
      description: "Contributed to product development in fast-paced startup environment. Focused on feature development and bug fixes.",
      achievements: [
        "Implemented user authentication and authorization",
        "Developed RESTful APIs and database schemas",
        "Participated in agile development processes"
      ],
      technologies: ["React", "Python", "Django", "MySQL", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of growth, learning, and delivering impactful solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-blue-600 font-semibold text-lg mb-4">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col lg:items-end space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Expertise in both frontend and backend technologies"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Proficient in SQL and NoSQL database systems"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      description: "Modern web frameworks and development practices"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Cross-platform mobile application development"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Passionate Developer with 5+ Years of Experience
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm a dedicated software engineer with a strong background in full-stack development. 
              My journey in technology began with a curiosity for how things work, which evolved 
              into a passion for creating innovative solutions that make a real impact.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              I specialize in modern web technologies, cloud platforms, and agile development 
              methodologies. I believe in writing clean, maintainable code and staying up-to-date 
              with the latest industry trends and best practices.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                React/Next.js
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Node.js
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                AWS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                John Doe
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Full Stack Developer & Software Engineer
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Passionate about creating innovative solutions and building exceptional digital experiences 
              with modern technologies and best practices.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="mailto:john@example.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-green-600" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Download Resume
            </button>
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;
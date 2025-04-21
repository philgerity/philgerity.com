import React from 'react';
import { ExternalLink, Users, Sparkles } from 'lucide-react';

const Projects = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="section-height py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Current Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Products That Count */}
          <a 
            href="https://productsthatcount.com/product-awards/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-in-out group"
          >
            <div className="flex items-center justify-start h-32 mb-4">
              <img 
                src="/product-awards.jpg"
                alt="Products That Count Awards Advisory Board"
                className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">Advisory Board, Products That Count</h3>
            <p className="text-gray-600">Products That Count is a nonprofit accelerating the careers of 500,000+ Product Managers, over 30% of Product Managers worldwide, through prestigious awards and exceptional programming, including award-winning podcasts and widely-read learning material — all free of charge.</p>
            <div className="mt-4 text-blue-600 inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
              Learn more <ExternalLink className="ml-1 h-4 w-4" />
            </div>
          </a>

          {/* Collaborations */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-in-out group">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-blue-600 mr-2 transform group-hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">Collaborations</h3>
            </div>
            <p className="text-gray-600">I am collaborating with friends on resources to help product managers advance their careers.</p>
            <p className="text-gray-600 mt-4">
              If you'd like to know more{' '}
              <a 
                href="#contact" 
                onClick={scrollToContact} 
                className="text-blue-600 hover:text-blue-800 inline-flex items-center group-hover:translate-x-1 transition-transform duration-300"
              >
                please get in touch
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </p>
          </div>

          {/* Apps */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-in-out group">
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 text-blue-600 mr-2 transform group-hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">Apps</h3>
            </div>
            <p className="text-gray-600">I am working on some apps and AI agents to help consumers and businesses get more done.</p>
            <p className="text-gray-600 mt-4">
              If you'd like to know more{' '}
              <a 
                href="#contact" 
                onClick={scrollToContact} 
                className="text-blue-600 hover:text-blue-800 inline-flex items-center group-hover:translate-x-1 transition-transform duration-300"
              >
                please get in touch
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
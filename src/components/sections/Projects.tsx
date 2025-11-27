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
    <section id="projects" className="section-height py-20 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-modern">
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-center mb-16 md:mb-20 text-gray-900">Current Projects</h2>
        
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Products That Count */}
          <a 
            href="https://productsthatcount.com/product-awards/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 md:p-10 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out group"
          >
            <div className="flex items-center justify-start h-32 mb-4">
              <img 
                src="/product-awards.jpg"
                alt="Products That Count Awards Advisory Board"
                className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Advisory Board, Products That Count</h3>
            <p className="text-gray-600 leading-relaxed">Products That Count is a nonprofit accelerating the careers of 500,000+ Product Managers, over 30% of Product Managers worldwide, through prestigious awards and exceptional programming, including award-winning podcasts and widely-read learning material — all free of charge.</p>
            <div className="mt-4 text-blue-600 inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
              Learn more <ExternalLink className="ml-1 h-4 w-4" />
            </div>
          </a>

          {/* Collaborations */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out group">
            <div className="flex items-center mb-6">
              <Users className="w-10 h-10 text-blue-600 mr-3 transform group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Collaborations</h3>
            <p className="text-gray-600 leading-relaxed">I am collaborating with friends on resources to help product managers advance their careers.</p>
            <p className="text-gray-600 mt-4 leading-relaxed">
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
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out group">
            <div className="flex items-center mb-6">
              <Sparkles className="w-10 h-10 text-blue-600 mr-3 transform group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Apps</h3>
            <p className="text-gray-600 leading-relaxed">I am working on some apps and AI agents to help consumers and businesses get more done.</p>
            <p className="text-gray-600 mt-4 leading-relaxed">
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

import { ExternalLink, Users, Sparkles, Trophy } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section-height py-10 md:py-16 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-modern">
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-center mb-16 md:mb-20 text-gray-900">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Morning Seeds */}
          <a
            href="https://morningseeds.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 md:p-10 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out group"
          >
            <div className="flex items-center mb-6">
              <Sparkles className="w-10 h-10 text-blue-600 mr-3 transform group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Morning Seeds</h3>
            <p className="text-gray-600 leading-relaxed">A daily quote generator featuring wisdom from Ralph Waldo Emerson. Start your day with inspiration and philosophical insights from one of America's great thinkers.</p>
            <div className="mt-4 text-blue-600 inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
              Visit app <ExternalLink className="ml-1 h-4 w-4" />
            </div>
          </a>

          {/* Academic Optimizer */}
          <a
            href="https://academic-optimizer-app.vercel.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 md:p-10 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out group"
          >
            <div className="flex items-center mb-6">
              <Users className="w-10 h-10 text-blue-600 mr-3 transform group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Academic Optimizer</h3>
            <p className="text-gray-600 leading-relaxed">A study planning app designed to help students organize their coursework, manage assignments, and optimize their academic schedules. Built to help my kids stay on top of school.</p>
            <div className="mt-4 text-blue-600 inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
              Visit app <ExternalLink className="ml-1 h-4 w-4" />
            </div>
          </a>

          {/* NFL Prop Bets */}
          <a
            href="https://github.com/philgerity/nflpropbets"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 md:p-10 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out group"
          >
            <div className="flex items-center mb-6">
              <Trophy className="w-10 h-10 text-blue-600 mr-3 transform group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">NFL Prop Bets</h3>
            <p className="text-gray-600 leading-relaxed">A prop betting app that allows families and friends to create, place, and track prop bets on NFL games. Synchronizes live game data to keep bets current and exciting.</p>
            <div className="mt-4 text-blue-600 inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
              Visit app <ExternalLink className="ml-1 h-4 w-4" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

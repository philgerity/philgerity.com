import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const Learn = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.card-hover');
    cards?.forEach(card => card.classList.add('entrance-animation'));
  }, []);

  return (
    <section id="learn" className="section-height py-20 md:py-32 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-modern">
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-center mb-16 md:mb-20 text-gray-900 entrance-animation">What I Do</h2>
        
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Windows 365 */}
          <a 
            href="https://www.microsoft.com/en-us/windows-365"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cream-50 p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out group"
          >
            <img 
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
              alt="Microsoft Logo"
              className="w-32 h-auto mb-4 transform group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Windows 365</h3>
            <p className="text-gray-600 leading-relaxed">I lead end user experiences for Windows 365, a Microsoft service that streams a cloud-based, personalized Windows experience to any device, enabling secure access and consistent performance from virtually anywhere.</p>
            <div className="mt-4 text-blue-600 inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
              Learn more <ExternalLink className="ml-1 h-4 w-4" />
            </div>
          </a>

          {/* Azure Virtual Desktop */}
          <a 
            href="https://azure.microsoft.com/en-us/products/virtual-desktop"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cream-50 p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out group"
          >
            <img 
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
              alt="Microsoft Logo"
              className="w-32 h-auto mb-4 transform group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Azure Virtual Desktop</h3>
            <p className="text-gray-600 leading-relaxed">I lead end user experiences for Azure Virtual Desktop, a Microsoft service that delivers secure, fully managed virtual desktops and applications from the Azure cloud to any device.</p>
            <div className="mt-4 text-blue-600 inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
              Learn more <ExternalLink className="ml-1 h-4 w-4" />
            </div>
          </a>
          
          {/* Encore Health */}
          <a 
            href="https://www.linkedin.com/company/encorehealth/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cream-50 p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out group h-full"
          >
            <div className="flex items-center justify-start h-16 mb-4">
              <img 
                src="/encore-health.jpg"
                alt="Encore Health Logo"
                className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Encore Health</h3>
            <p className="text-gray-600 leading-relaxed">I am an Investor/Advisor to Encore Health, an MIT incubated, Cambridge-based, AI-first healthtech startup that combines clinically-led revenue cycle innovation with decades of unmatched industry experience and proven technological prowess to create transformative revenue cycle solutions.</p>
            <div className="mt-4 text-blue-600 inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
              Learn more <ExternalLink className="ml-1 h-4 w-4" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Learn;

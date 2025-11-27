import React from 'react';
import { ExternalLink } from 'lucide-react';

type TimelineEvent = {
  year: string;
  title: string;
  hoverText: string;
  link?: string;
};

const TimelineItem = ({ event }: { event: TimelineEvent }) => {
  return (
    <div className="relative pl-8 pb-8 group">
      {/* Vertical line */}
      <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gray-200" />
      
      {/* Dot */}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow-md z-10" />
      
      {/* Content */}
      <div className="relative group">
        <span className="text-sm font-bold text-blue-600 block mb-1">{event.year}</span>
        <h4 className="text-base font-medium text-gray-900 mb-2">
          {event.link ? (
            <a 
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
            >
              {event.title}
              <ExternalLink className="h-3 w-3" />
            </a>
          ) : (
            event.title
          )}
        </h4>
        
        {/* Hover tooltip */}
        <div className="absolute left-0 ml-4 p-4 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none w-64">
          {event.hoverText}
          <div className="absolute left-[-8px] top-4 w-0 h-0 border-8 border-transparent border-r-gray-900" />
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      year: '2005',
      title: 'Milliman: Management Consultant',
      hoverText: 'Senior Consultant at Milliman working with health insurers on operational improvements.'
    },
    {
      year: '2006-2009',
      title: 'ECG: Management Consultant',
      hoverText: 'Manager at ECG Management Consultants working with hospitals and physician groups on business strategy and operational improvements.'
    },
    {
      year: '2009-2014',
      title: 'Microsoft: Business & Operations',
      hoverText: 'Worked in licensing, pricing, and business planning roles.'
    },
    {
      year: '2014-2015',
      title: 'Smartsheet: Business Development',
      hoverText: 'Built a channel model and partnerships for Smartsheet when it was pre-IPO.'
    },
    {
      year: '2015-Present',
      title: 'Microsoft: Product Management',
      hoverText: 'I lead a group of product managers responsible for building and maintaining the Windows 365 and Azure Virtual Desktop services from Microsoft.'
    },
    {
      year: '2021-2023',
      title: 'MIT Executive MBA',
      hoverText: 'I hold an MBA from MIT Sloan School of Management. Sloan\'s mission is to develop principled, innovative leaders who improve the world and to generate ideas that advance management practice.'
    },
    {
      year: '2022',
      title: 'Patent US20240028335A1',
      hoverText: 'Application state synchronization across computing environments to an alternate application',
      link: 'https://patents.google.com/patent/US20240028335A1'
    }
  ];

  return (
    <section id="about" className="section-height py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-modern">
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-center mb-16 md:mb-20 text-gray-900">About Me</h2>

        {/* Profile Image */}
        <div className="flex justify-center mb-12">
          <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl">
            <img
              src="/phil-gerity-2.jpg"
              alt="Phil Gerity"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mb-12">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">Career Journey</h3>
          <div className="text-gray-600 max-w-3xl mx-auto text-center mb-8">
            <p className="mb-6 text-lg leading-relaxed">
              I enjoy tackling complex problems by designing innovative business models and products. My experience spans three separate startups at Microsoft (two of which I cofounded, Partner Center and Windows 365), and one pre-IPO startup at Smartsheet. I'm currently at Microsoft as the product leader for Windows Cloud end user experiences.
            </p>
            <a 
              href="https://www.youtube.com/watch?v=oDELjln7uZs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
            >
              Watch my Product School webinar about my career journey
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
          <div className="max-w-2xl mx-auto mt-12">
            {/* Timeline Items */}
            <div className="relative">
              {/* First vertical line segment */}
              <div className="absolute left-[7px] top-0 w-0.5 h-full bg-gray-200" />
              
              {timelineEvents.map((event, index) => (
                <TimelineItem key={event.year} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
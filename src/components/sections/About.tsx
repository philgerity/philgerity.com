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
        <span className="text-base font-bold text-blue-600 block mb-1">{event.year}</span>
        <h4 className="text-lg md:text-xl font-medium text-gray-900 mb-2">
          {event.link ? (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
            >
              {event.title}
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            event.title
          )}
        </h4>

        {/* Hover tooltip */}
        <div className="absolute left-0 ml-4 p-4 bg-gray-900 text-white text-base rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none w-64">
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
      title: 'US Patent: Application state synchronization across computing environments to an alternate application',
      hoverText: 'Patent US20240028335A1',
      link: 'https://patents.google.com/patent/US20240028335A1'
    }
  ];

  return (
    <section id="bio" className="section-height py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-modern">
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-center mb-16 md:mb-20 text-gray-900">Bio</h2>

        {/* Profile Image */}
        <div className="flex justify-center mb-12">
          <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl">
            <img
              src="/phil-gerity.jpg"
              alt="Phil Gerity"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mb-12">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">Career Journey</h3>
          <div className="text-gray-600 max-w-3xl mx-auto text-center mb-8">
            <p className="mb-4 text-lg leading-relaxed">
              Phil Gerity is a Partner Group Product Manager for Windows Cloud and AI at Microsoft, where he leads the end-user experiences and AI product group for Windows 365 and Azure Virtual Desktop (AVD). In Windows Cloud, Phil's work enables millions of people to get to work everyday on cloud-computers, streamed from cloud to client via the Windows app. Windows app connects users to a first-class Windows experiences on all major OS platforms. Windows Cloud's streaming platforms, redirections, and protocols enable Windows to be delivered fast and reliably, anywhere in the world. Phil's most recent work leverages AI to redefine the interfaces we use to interact with cloud-based computers.
            </p>
            <p className="text-lg leading-relaxed">
              At Microsoft, Phil previously was a founding member of Microsoft Partner Center, which now drives billions in annual revenue. He is also a Featured Speaker at Product School. Phil holds an MBA from MIT Sloan School of Management. He is an expert in Product Management, Cloud Computing, and Artificial Intelligence (AI), with a track record of building great products and innovative, high-performing teams.
            </p>
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
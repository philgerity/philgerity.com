import React, { useEffect, useRef } from 'react';
import { ExternalLink, Play } from 'lucide-react';

const Media = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cards = sectionRef.current?.querySelectorAll('.card-hover');
        cards?.forEach(card => card.classList.add('entrance-animation'));
    }, []);

    const talks = [
        {
            title: "Be a PM With a Non-Traditional Background",
            description: "A webinar discussing how to break into product management without a traditional background, sharing insights from my journey at Microsoft.",
            url: "https://youtu.be/oDELjln7uZs",
            thumbnail: "https://img.youtube.com/vi/oDELjln7uZs/maxresdefault.jpg",
            platform: "Product School"
        },
        {
            title: "Agents at Work: Windows Powers the Era of Intelligent Productivity",
            description: "Microsoft Ignite session on how Windows combines security, adaptability, cloud, and AI to empower organizations and people to create, decide, and grow.",
            url: "https://ignite.microsoft.com/en-US/sessions/BRK344",
            thumbnail: "https://medius.ignite.microsoft.com/api/v1/image?id=BRK344&fallback=true",
            platform: "Microsoft Ignite"
        },
        {
            title: "Windows in the Cloud: Ignite 2025 Special",
            description: "Special Ignite 2025 edition covering AI, flexible and security experiences in Windows 365 and Azure Virtual Desktop.",
            url: "https://youtu.be/GAGXqk5emy8",
            thumbnail: "https://img.youtube.com/vi/GAGXqk5emy8/maxresdefault.jpg",
            platform: "Windows in the Cloud"
        }
    ];

    return (
        <section id="media" className="section-height py-10 md:py-16 bg-white" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-modern">
                <h2 className="font-serif text-4xl md:text-6xl font-bold text-center mb-16 md:mb-20 text-gray-900 entrance-animation">Media</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {talks.map((talk, index) => (
                        <a
                            key={index}
                            href={talk.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-cream-50 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out group overflow-hidden card-hover"
                        >
                            {/* Thumbnail */}
                            <div className="relative overflow-hidden aspect-video bg-gray-200">
                                <img
                                    src={talk.thumbnail}
                                    alt={talk.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="225"%3E%3Crect width="400" height="225" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%239ca3af"%3EVideo Thumbnail%3C/text%3E%3C/svg%3E';
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                    <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                <div className="text-xs font-semibold text-blue-600 mb-2">{talk.platform}</div>
                                <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                    {talk.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                                    {talk.description}
                                </p>
                                <div className="text-blue-600 inline-flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                                    Watch now <ExternalLink className="ml-1 h-4 w-4" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Media;

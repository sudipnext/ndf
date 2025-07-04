import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { successStories, technologyIcons } from '@/data/successStoriesData';

const WorkWeLoveSection = () => {
  // Get all available success stories for display
  const featuredStories = successStories;

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1e2d] mb-4">
            Work we <span className="text-primary">love</span>
          </h2>
          <p className="text-xl text-gray-600">
            Success stories from all over the world
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {featuredStories.map((story, index) => (
            <Link 
              key={story.id} 
              href={`/success-stories/${story.id}`} 
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* Story Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {story.category}
                    </span>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {story.year}
                    </span>
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a1e2d] mb-2 group-hover:text-primary transition-colors duration-300">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {story.description}
                  </p>
                  
                  {/* Client */}
                  <p className="text-sm text-gray-500 mb-4">
                    Client: {story.client}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.technologies.slice(0, 3).map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md text-xs"
                      >
                        <span className="w-4 h-4 flex items-center justify-center">
                          {React.cloneElement(
                            technologyIcons[tech] || <span className="text-primary font-bold">{tech.charAt(0)}</span>,
                            { className: "w-3 h-3" }
                          )}
                        </span>
                        <span className="text-gray-700 font-medium">{tech}</span>
                      </div>
                    ))}
                    {story.technologies.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{story.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Read More Link */}
                  <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary/80 transition-colors duration-300">
                    <span>View Case Study</span>
                    <svg 
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/success-stories"
            className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 hover:text-primary hover:border-primary-500 transition-colors duration-200 inline-flex items-center gap-2"
          >
            <span>See all success stories</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkWeLoveSection;

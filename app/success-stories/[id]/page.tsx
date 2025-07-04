'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import { successStories, technologyIcons } from '@/data/successStoriesData';

export default function CaseStudyPage() {
  const params = useParams();
  const storyId = parseInt(params.id as string);
  const story = successStories.find(s => s.id === storyId);

  if (!story) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0a1e2d] mb-4">Case Study Not Found</h1>
            <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
            <Link 
              href="/success-stories"
              className="bg-[#0a1e2d] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0a1e2d]/90 transition-colors duration-200"
            >
              Back to Success Stories
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#0a1e2d] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-40 h-40 dotted-pattern-light opacity-20"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 dotted-pattern opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back button */}
          <Link 
            href="/success-stories"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Success Stories
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                  Completed
                </span>
                <span className="text-blue-400 font-medium">{story.category}</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {story.title}
              </h1>
              <h2 className="text-xl text-gray-300 mb-6">
                {story.subtitle}
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {story.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {story.link && (
                  <a
                    href={story.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
                  >
                    Visit Live Site
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                )}
                <Link
                  href="/#discover-us"
                  className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#0a1e2d] transition-all duration-200"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
            
            {/* Project Image */}
            <div className="aspect-video relative overflow-hidden rounded-2xl">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a1e2d] mb-4">
              Technology <span className="text-primary">Stack</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern, scalable technologies selected for optimal performance and maintainability.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {story.technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4 hover:bg-gray-100 transition-colors duration-300">
                  {(technologyIcons as Record<string, React.ReactNode>)[tech] || (
                    <span className="text-primary font-bold text-lg">{tech.charAt(0)}</span>
                  )}
                </div>
                <h3 className="font-semibold text-[#0a1e2d] text-sm">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a1e2d] mb-4">
              Key <span className="text-primary">Features</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive functionality designed to meet specific business requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {story.features.map((feature, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-6 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Results */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Challenges */}
            <div>
              <h2 className="text-3xl font-bold text-[#0a1e2d] mb-8">
                <span className="text-primary">Challenges</span> We Solved
              </h2>
              <div className="space-y-6">
                {story.challenges.map((challenge, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-bold text-[#0a1e2d] mb-3">{challenge}</h3>
                    <p className="text-gray-600">
                      Each challenge required innovative solutions and careful planning to ensure project success.
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Results */}
            <div>
              <h2 className="text-3xl font-bold text-[#0a1e2d] mb-8">
                <span className="text-primary">Results</span> Achieved
              </h2>
              <div className="space-y-6">
                {story.results.map((result, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                    <h3 className="font-bold text-green-700 mb-3">{result}</h3>
                    <p className="text-gray-600">
                      Measurable impact that demonstrates the success of our solution.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#0a1e2d] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl mx-1">★</span>
            ))}
          </div>
          
          <blockquote className="text-xl lg:text-2xl italic mb-8 leading-relaxed">
            "{story.testimonial.quote}"
          </blockquote>
          
          <div className="border-t border-gray-600 pt-6">
            <div className="font-semibold text-lg mb-1">
              {story.testimonial.author}
            </div>
            <div className="text-gray-400">
              {story.testimonial.position}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0a1e2d] mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you build innovative solutions that drive real business results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#discover-us"
              className="bg-[#0a1e2d] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0a1e2d]/90 transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              href="/success-stories"
              className="border-2 border-[#0a1e2d] text-[#0a1e2d] px-8 py-4 rounded-full font-medium hover:bg-[#0a1e2d] hover:text-white transition-all duration-200"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

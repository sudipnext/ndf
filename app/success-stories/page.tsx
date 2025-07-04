import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { successStories, successStoriesStats, industries } from '@/data/successStoriesData';
import { ExternalLink, Calendar, Users, Award, TrendingUp } from 'lucide-react';

export default function SuccessStories() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#0a1e2d] text-white py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-40 h-40 dotted-pattern-light opacity-20"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 dotted-pattern opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Success <span className="text-blue-400">Stories</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover how we've helped businesses achieve their goals through 
                innovative software solutions, AI/ML training, and digital transformation.
              </p>
              
              {/* Featured highlight */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <div className="flex items-center mb-3">
                  <Award className="w-6 h-6 text-blue-400 mr-3" />
                  <span className="text-blue-400 font-semibold">Recent Achievement</span>
                </div>
                <p className="text-gray-300">
                  Successfully delivered the ICRTAI 2024 conference platform, 
                  managing 500+ attendees and receiving outstanding feedback.
                </p>
              </div>
              
              <Link
                href="#stories"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200"
              >
                Explore Our Work
              </Link>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {successStoriesStats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-300">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a1e2d] mb-4">
              Industries We've <span className="text-primary">Transformed</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored solutions 
              that address unique challenges and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-[#0a1e2d] mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {industry.projects} projects
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Stories Grid */}
      <section id="stories" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1e2d] mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories of innovation, problem-solving, and successful digital transformation 
              across various industries and technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card 
                key={story.id} 
                className="group border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="aspect-video w-full relative overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    {/* Overlay for featured project */}
                    {story.id === 1 && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Recent
                      </div>
                    )}
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-primary font-medium bg-blue-100 px-3 py-1 rounded-full">
                        {story.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {story.year}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#0a1e2d] mb-2 group-hover:text-primary transition-colors duration-200">
                      {story.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {story.subtitle}
                    </p>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {story.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {story.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {story.technologies.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          +{story.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex items-center justify-between">
                      <Link 
                        href={`/success-stories/${story.id}`} 
                        className="text-primary font-medium hover:text-primary/80 transition-colors duration-200 flex items-center"
                      >
                        Read case study
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                      
                      {story.link && (
                        <a 
                          href={story.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0a1e2d] mb-6">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.slice(0, 3).map((story) => (
              <div 
                key={story.id}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{story.testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-[#0a1e2d]">
                    {story.testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {story.testimonial.position}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0a1e2d] to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 gap-4 h-full">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-white rounded-full"
                    style={{ 
                      opacity: Math.random() * 0.5 + 0.2,
                      animation: `pulse ${2 + (i % 3)}s ease-in-out infinite ${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Become Our Next Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Whether you need a conference platform, ML training, or custom software development, 
                we're here to help you achieve your goals with innovative technology solutions.
              </p>
              
              {/* Service highlights */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Conference Platforms</h3>
                  <p className="text-sm text-blue-100">End-to-end event management solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">AI/ML Training</h3>
                  <p className="text-sm text-blue-100">Corporate education and skill development</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Custom Development</h3>
                  <p className="text-sm text-blue-100">Tailored software solutions for your business</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#discover-us"
                  className="bg-white text-[#0a1e2d] px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/how-we-work"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[#0a1e2d] transition-all duration-200"
                >
                  Learn Our Process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
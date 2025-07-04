'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Lightbulb, 
  Users, 
  Award, 
  RefreshCw, 
  Linkedin,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { 
  companyValues, 
  companyStats, 
  teamMembers, 
  // companyMilestones, 
  coreServices,
  aboutHero 
} from '@/data/aboutData';

// Icon mapping for dynamic icon rendering
const iconMap = {
  lightbulb: Lightbulb,
  users: Users,
  award: Award,
  'refresh-cw': RefreshCw,
};

export default function About() {
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
                {aboutHero.title}
              </h1>
              <h2 className="text-2xl text-blue-400 mb-6">
                {aboutHero.subtitle}
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {aboutHero.description}
              </p>
              
              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {aboutHero.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
              
              <Link
                href="/#discover-us"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200"
              >
                Let's work together
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            {/* Right side - Company stats */}
            <div className="grid grid-cols-2 gap-6">
              {companyStats.map((stat, index) => (
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

      {/* Company Values Section */}
      <section className="bg-white py-20 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-20 w-32 h-32 dotted-pattern-light opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1e2d] mb-6">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we create, 
              ensuring we deliver exceptional value to our clients and partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = iconMap[value.icon as keyof typeof iconMap];
              
              return (
                <div 
                  key={index} 
                  className="text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1e2d] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      {/* <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1e2d] mb-6">
                Our <span className="text-primary">Journey</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2018, Numa Digital Farm started with a simple mission: to bridge 
                the gap between complex business needs and innovative technology solutions. 
                What began as a small team of passionate developers has grown into a trusted 
                partner for businesses worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we're proud to have helped over 30 clients transform their ideas 
                into successful digital products, from startups building their first MVP 
                to enterprises modernizing their legacy systems.
              </p>
              <Link
                href="/success-stories"
                className="inline-flex items-center bg-[#0a1e2d] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0a1e2d]/90 transition-colors duration-200"
              >
                View our success stories
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            {/* Timeline */}
            {/* <div className="space-y-6">
              {companyMilestones.slice(0, 5).map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">{milestone.year}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-[#0a1e2d] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div> 
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1e2d] mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in 
              software development, design, and business strategy to deliver 
              exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Social links overlay */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a1e2d] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 text-primary text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.expertise.length > 2 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{member.expertise.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all team members CTA */}
          <div className="text-center mt-12">
            <Link
              href="/career"
              className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-200"
            >
              Join our amazing team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1e2d] mb-6">
              What We <span className="text-primary">Do Best</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions that cover every aspect 
              of your technology needs, from initial concept to ongoing support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-[#0a1e2d] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA to services */}
          <div className="text-center mt-16">
            <Link
              href="/#discover-us"
              className="inline-flex items-center bg-[#0a1e2d] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0a1e2d]/90 transition-colors duration-200"
            >
              Explore our services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
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
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Ideas into Reality?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your business goals 
                with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#discover-us"
                  className="bg-white text-[#0a1e2d] px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Start a project
                </Link>
                <Link
                  href="/how-we-work"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[#0a1e2d] transition-all duration-200"
                >
                  Learn our process
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

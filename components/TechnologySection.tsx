"use client"
import React from 'react';
import Image from 'next/image';

const techIcons = [
  { name: 'Node.js', icon: '/techstack/nodejs.svg' },
  { name: 'Vue.js', icon: '/techstack/vuejs.svg' },
  { name: 'Flutter', icon: '/techstack/flutter.svg' },
  { name: 'Swift', icon: '/techstack/swift.svg' },
  { name: 'Python', icon: '/techstack/python.svg' },
  { name: 'Django', icon: '/techstack/django.svg' },
  { name: 'React', icon: '/techstack/react.svg' },
  { name: 'AWS', icon: '/techstack/aws.svg' },
  { name: 'Docker', icon: '/techstack/docker.svg' },
];

const TechnologySection = () => {
  return (
    <section className="bg-gray-50 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Stats and tech icons */}
          <div className="space-y-12">
            {/* Technology icons grid */}
            <div className="grid grid-cols-3 gap-8 mt-8"> {/* Increased gap for more space */}
              {techIcons.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center"
                >
                  <div className="w-32 h-32 bg-white rounded-2xl shadow-sm border flex flex-col items-center justify-center group transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:border-blue-400">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={100}
                      height={100}
                      className="w-12 h-12 object-contain transition-transform duration-500 group-hover:animate-crazy"
                    />
                    <span className="mt-2 text-sm text-gray-700 font-bold">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1e2d] mb-6">
                Developing the <span className="text-primary">future</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Top class front-end technology, to build frictionless, custom web and mobile
                applications which create extensive capabilities and cover all needs. Remarkable
                back-end development services are designed with the best industry standards and
                people with huge knowledge to build tailored and flexible solutions.
              </p>

              <a
                href="/technology-stack"
                className="inline-block NDF-blue text-white px-8 py-4 rounded-full font-medium hover:NDF-blue/90 transition-colors duration-200"
              >
                see our technology stack
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 dotted-pattern-light opacity-20"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 dotted-pattern opacity-10"></div>
      </div>
      <style jsx global>{`
        @keyframes crazy {
          0% { transform: scale(1) rotate(0deg) translateY(0); }
          20% { transform: scale(1.2) rotate(12deg) translateY(-10px); }
          40% { transform: scale(0.9) rotate(-12deg) translateY(10px); }
          60% { transform: scale(1.1) rotate(8deg) translateY(-5px); }
          80% { transform: scale(0.95) rotate(-8deg) translateY(5px); }
          100% { transform: scale(1) rotate(0deg) translateY(0); }
        }
        .animate-crazy {
          animation: crazy 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default TechnologySection;

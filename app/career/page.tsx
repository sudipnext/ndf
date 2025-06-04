import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function Career() {
  const positions = [
    {
      title: "Senior Full Stack Developer",
      type: "Full-time",
      location: "Remote",
      description: "We're looking for an experienced Full Stack Developer with expertise in React, Node.js, and cloud technologies."
    },
    {
      title: "UX/UI Designer",
      type: "Full-time",
      location: "Hybrid",
      description: "Join our design team to create beautiful, intuitive interfaces for web and mobile applications."
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote",
      description: "Help us build and maintain our cloud infrastructure and CI/CD pipelines."
    },
    {
      title: "Project Manager",
      type: "Full-time",
      location: "Hybrid",
      description: "Lead our development teams and ensure project success through effective planning and communication."
    }
  ];

  const benefits = [
    {
      title: "Flexible Work Environment",
      description: "Work remotely or in our offices with flexible hours to maintain a healthy work-life balance."
    },
    {
      title: "Competitive Compensation",
      description: "We offer competitive salaries, bonuses, and stock options to reward your contributions."
    },
    {
      title: "Professional Development",
      description: "Access to training, conferences, courses, and certification programs to grow your skills."
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support."
    },
    {
      title: "Team Building",
      description: "Regular team events, retreats, and activities to foster collaboration and friendship."
    },
    {
      title: "Modern Equipment",
      description: "Top-of-the-line hardware and software to help you perform at your best."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-[#0a1e2d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl">
              Build your career with us and work on exciting projects that make a difference.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-[#0a1e2d] mb-6">
                Why Work With Us?
              </h2>
              <p className="text-gray-600 mb-6">
                We're a team of passionate technologists who love solving complex problems and creating impactful solutions. Our collaborative culture fosters innovation, growth, and work-life balance.
              </p>
              <p className="text-gray-600">
                When you join our team, you become part of a supportive community that values diverse perspectives, continuous learning, and technical excellence.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#0a1e2d] mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Innovation</h4>
                    <p className="text-sm text-gray-600">We embrace creativity and forward-thinking approaches</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Excellence</h4>
                    <p className="text-sm text-gray-600">We hold ourselves to the highest standards in everything we do</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Collaboration</h4>
                    <p className="text-sm text-gray-600">We achieve more by working together and sharing knowledge</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Growth</h4>
                    <p className="text-sm text-gray-600">We invest in continuous learning and personal development</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-[#0a1e2d] mb-8">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#0a1e2d] mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-center text-[#0a1e2d] mb-8">Open Positions</h2>
            <div className="space-y-6">
              {positions.length > 0 ? (
                positions.map((position, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-[#0a1e2d]">{position.title}</h3>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-sm text-gray-600">{position.type}</span>
                            <span className="text-sm text-gray-600">{position.location}</span>
                          </div>
                          <p className="text-gray-600 mt-4">{position.description}</p>
                        </div>
                        <Link
                          href={`/career/${position.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="mt-4 md:mt-0 inline-block bg-[#0a1e2d] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0a1e2d]/90 transition-colors duration-200"
                        >
                          Apply Now
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <h3 className="text-xl text-gray-600 mb-2">No open positions at the moment</h3>
                  <p className="text-gray-500">
                    Please check back later or send your resume to careers@numadigitalfarm.com
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0a1e2d] mb-6">Don't see a perfect match?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals to join our team. Send your resume and let us know how you can contribute.
          </p>
          <Link
            href="mailto:careers@numadigitalfarm.com"
            className="bg-[#0a1e2d] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0a1e2d]/90 transition-colors duration-200"
          >
            Send your resume
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
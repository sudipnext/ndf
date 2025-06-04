import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FaUserCircle, 
  FaRocket, 
  FaCode, 
  FaShieldAlt, 
  FaExpandArrowsAlt, 
  FaChartBar,
  FaHandshake,
  FaBullseye,
  FaTools,
  FaComments,
  FaChartLine,
  FaCalendarAlt
} from 'react-icons/fa';

export default function Approach() {
  const principles = [
    {
      title: 'User-Centered Design',
      description: 'We build with the end user in mind, ensuring intuitive, accessible, and engaging user experiences.',
      icon: <FaUserCircle className="w-10 h-10 text-primary mb-4" />
    },
    {
      title: 'Agile Development',
      description: 'Our iterative approach allows for flexibility, continuous improvement, and faster time to market.',
      icon: <FaRocket className="w-10 h-10 text-green-500 mb-4" />
    },
    {
      title: 'Technical Excellence',
      description: 'We maintain high coding standards, architectural integrity, and performance optimization.',
      icon: <FaCode className="w-10 h-10 text-blue-600 mb-4" />
    },
    {
      title: 'Security By Design',
      description: 'Security considerations are built into every step of our process, not added as an afterthought.',
      icon: <FaShieldAlt className="w-10 h-10 text-red-500 mb-4" />
    },
    {
      title: 'Scalable Solutions',
      description: 'We design systems that can grow with your business, handling increased load and expanded functionality.',
      icon: <FaExpandArrowsAlt className="w-10 h-10 text-purple-500 mb-4" />
    },
    {
      title: 'Data-Driven Decisions',
      description: 'We use analytics and metrics to guide development priorities and optimize user experiences.',
      icon: <FaChartBar className="w-10 h-10 text-yellow-500 mb-4" />
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-[#0a1e2d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Our Approach</h1>
            <p className="text-xl">
              We combine technical expertise with strategic thinking to create solutions that drive business growth.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-[#0a1e2d] mb-8">Core Principles</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Our approach is built on fundamental principles that ensure we deliver exceptional quality, value, and results for every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="border-t-4 border-primary hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-8 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1e2d] mb-4">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <FaHandshake className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-[#0a1e2d]">
                  Strategic Partnership
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                We don't just build software; we build relationships. Our team becomes an extension of yours, aligning our technical expertise with your business objectives.
              </p>
              <p className="text-gray-600 mb-4">
                This collaborative approach ensures we understand your unique challenges and deliver solutions that address your specific needs, both immediate and long-term.
              </p>
              <p className="text-gray-600">
                Through regular communication, transparent reporting, and shared goals, we create a partnership that drives mutual success.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <FaBullseye className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1e2d] mb-2">Understand Your Goals</h3>
                    <p className="text-gray-600">We start by gaining a deep understanding of your business objectives</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <FaTools className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1e2d] mb-2">Align Technical Solutions</h3>
                    <p className="text-gray-600">We recommend technologies and approaches that best serve your needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <FaComments className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1e2d] mb-2">Collaborate Continuously</h3>
                    <p className="text-gray-600">We maintain open communication and adapt as your needs evolve</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <FaChartLine className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1e2d] mb-2">Measure Success Together</h3>
                    <p className="text-gray-600">We track metrics that matter to your business, not just technical KPIs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0a1e2d] mb-6">Ready to experience our approach?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how our development philosophy can transform your business challenges into opportunities.
          </p>
          <Link
            href="/#discover-us"
            className="bg-[#0a1e2d] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0a1e2d]/90 transition-colors duration-300 hover:shadow-md inline-flex items-center"
          >
            <FaCalendarAlt className="mr-2 h-5 w-5" />
            Schedule a consultation
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
"use client"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FaSearch, 
  FaChartPie, 
  FaPencilRuler, 
  FaLaptopCode, 
  FaClipboardCheck, 
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaRegComments,
  FaTools,
  FaChartLine,
  FaComments,
  FaArrowRight
} from 'react-icons/fa';

export default function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We begin by understanding your business goals, requirements, and challenges through comprehensive discussions and research.',
      icon: <FaSearch className="w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Our team develops a tailored approach, defining the technology stack, timeline, and resources needed for your project.',
      icon: <FaChartPie className="w-10 h-10 text-green-500 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      number: '03',
      title: 'Design',
      description: 'We create prototypes and wireframes that visualize the solution before development begins.',
      icon: <FaPencilRuler className="w-10 h-10 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      number: '04',
      title: 'Development',
      description: 'Our engineers build your solution using agile methodologies, ensuring quality and regular updates throughout.',
      icon: <FaLaptopCode className="w-10 h-10 text-red-500 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Rigorous quality assurance ensures your solution works flawlessly across all platforms and scenarios.',
      icon: <FaClipboardCheck className="w-10 h-10 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      number: '06',
      title: 'Launch & Support',
      description: 'We help you deploy the solution and provide ongoing maintenance and support to ensure long-term success.',
      icon: <FaRocket className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-[#0a1e2d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">How We Work</h1>
            <p className="text-xl">
              Our streamlined process ensures we deliver exceptional results efficiently and transparently.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-[#0a1e2d] mb-6">
                A collaborative approach designed for your success
              </h2>
              <p className="text-gray-600 mb-6">
                We believe in transparent communication, collaborative problem-solving, and iterative development to ensure your project succeeds.
                Our methodology combines the best practices of agile development with our years of industry experience.
              </p>
              <p className="text-gray-600">
                Each step in our process is designed to minimize risk, maximize efficiency, and ensure the final product aligns perfectly with your business goals.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 z-0"></div>
              
              {/* Core values icons with animations */}
              <div className="relative z-10 grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center" style={{animation: "float 6s ease-in-out infinite"}}>
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <FaUsers className="w-8 h-8 text-blue-500" />
                  </div>
                  <p className="font-medium text-[#0a1e2d]">Collaboration</p>
                </div>
                
                <div className="flex flex-col items-center text-center" style={{animation: "float 6s ease-in-out 1s infinite"}}>
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <FaLightbulb className="w-8 h-8 text-green-500" />
                  </div>
                  <p className="font-medium text-[#0a1e2d]">Innovation</p>
                </div>
                
                <div className="flex flex-col items-center text-center" style={{animation: "float 6s ease-in-out 2s infinite"}}>
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                    <FaRegComments className="w-8 h-8 text-purple-500" />
                  </div>
                  <p className="font-medium text-[#0a1e2d]">Communication</p>
                </div>
                
                <div className="flex flex-col items-center text-center" style={{animation: "float 6s ease-in-out 1.5s infinite"}}>
                  <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
                    <FaTools className="w-8 h-8 text-yellow-500" />
                  </div>
                  <p className="font-medium text-[#0a1e2d]">Expertise</p>
                </div>
                
                <div className="flex flex-col items-center text-center" style={{animation: "float 6s ease-in-out 0.5s infinite"}}>
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-3">
                    <FaChartLine className="w-8 h-8 text-red-500" />
                  </div>
                  <p className="font-medium text-[#0a1e2d]">Results</p>
                </div>
                
                <div className="flex flex-col items-center text-center" style={{animation: "float 6s ease-in-out 2.5s infinite"}}>
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <FaRocket className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="font-medium text-[#0a1e2d]">Delivery</p>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-center text-[#0a1e2d] mb-16">Our Process</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={step.number} 
                className="border-t-4 border-primary hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 hover:border-t-[6px] overflow-hidden"
              >
                <CardContent className="pt-6 relative">
                  {/* Large number in background */}
                  <span className="absolute text-[120px] font-bold text-gray-50 top-0 left-0 leading-none z-0 opacity-80 transition-all duration-300 group-hover:text-gray-100 group-hover:scale-110">
                    {step.number}
                  </span>
                  
                  <div className="flex justify-between items-start relative z-10">
                    <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">{step.number}</span>
                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0a1e2d] mt-4 mb-4 relative z-10 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 relative z-10 group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                  
                  {/* Show progress line for all except last item */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-10 w-8 border-t-2 border-dashed border-gray-200 z-0"></div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0a1e2d] mb-6">Ready to start your project?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how our development process can bring your ideas to life.
          </p>
          <Link
            href="/#discover-us"
            className="bg-[#0a1e2d] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0a1e2d]/90 transition-all duration-300 group hover:shadow-lg hover:scale-105"
          >
            <span className="inline-flex items-center">
              <FaComments className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              Start a conversation 
              <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </Link>
        </div>
      </section>
      
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
      
      <Footer />
    </main>
  );
}
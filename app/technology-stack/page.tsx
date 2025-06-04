import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaLaravel,
  FaJava,
  FaDocker,
  FaAws,
  FaGithub,
  FaJenkins,
  FaSearchengin,
  FaChartLine,
  FaShieldAlt,
  FaCoins,
  FaRocket,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiExpress,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiKubernetes,
} from "react-icons/si";

import { VscAzure } from "react-icons/vsc";

export default function TechnologyStack() {
  const technologies = {
    frontend: [
      { name: "React", icon: <FaReact className="w-12 h-12 text-blue-500" /> },
      {
        name: "Vue.js",
        icon: <FaVuejs className="w-12 h-12 text-green-500" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-12 h-12 text-black" />,
      },
      {
        name: "Angular",
        icon: <FaAngular className="w-12 h-12 text-red-600" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-12 h-12 text-blue-700" />,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="w-12 h-12 text-sky-500" />,
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-12 h-12 text-green-600" />,
      },
      {
        name: "Python",
        icon: <FaPython className="w-12 h-12 text-yellow-600" />,
      },
      {
        name: "Django",
        icon: <SiDjango className="w-12 h-12 text-green-800" />,
      },
      {
        name: "Laravel",
        icon: <FaLaravel className="w-12 h-12 text-red-500" />,
      },
      {
        name: "Spring Boot",
        icon: <FaJava className="w-12 h-12 text-orange-500" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="w-12 h-12 text-gray-800" />,
      },
    ],
    mobile: [
      {
        name: "Flutter",
        icon: <SiFlutter className="w-12 h-12 text-blue-400" />,
      },
      {
        name: "React Native",
        icon: <FaReact className="w-12 h-12 text-blue-500" />,
      },
      {
        name: "Swift",
        icon: <SiSwift className="w-12 h-12 text-orange-500" />,
      },
      {
        name: "Kotlin",
        icon: <SiKotlin className="w-12 h-12 text-purple-600" />,
      },
    ],
    devops: [
      {
        name: "Docker",
        icon: <FaDocker className="w-12 h-12 text-blue-600" />,
      },
      {
        name: "Kubernetes",
        icon: <SiKubernetes className="w-12 h-12 text-blue-700" />,
      },
      { name: "AWS", icon: <FaAws className="w-12 h-12 text-orange-400" /> },
      { name: "Azure", icon: <VscAzure className="w-12 h-12 text-blue-500" /> },
      {
        name: "GitHub Actions",
        icon: <FaGithub className="w-12 h-12 text-black" />,
      },
      {
        name: "Jenkins",
        icon: <FaJenkins className="w-12 h-12 text-red-500" />,
      },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-[#0a1e2d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Technology Stack</h1>
            <p className="text-xl">
              We use cutting-edge technologies to build robust, scalable, and
              innovative software solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-[#0a1e2d] mb-8">
              Our Technology Ecosystem
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              We strategically select technologies based on your project
              requirements, ensuring optimal performance, maintainability, and
              scalability.
            </p>
          </div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
            </TabsList>

            {Object.entries(technologies).map(([category, techs]) => (
              <TabsContent key={category} value={category} className="pt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  {techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center"
                    >
                      <div className="w-24 h-24 bg-white rounded-xl shadow-sm border flex items-center justify-center p-4 group transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                        {tech.icon}
                      </div>
                      <span className="mt-3 text-sm font-medium text-gray-700">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-[#0a1e2d] mb-6">
                How We Choose Technologies
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                  <div className="mr-4 text-blue-500 flex-shrink-0 mt-1">
                    <FaSearchengin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1e2d] mb-1">
                      Project Requirements
                    </h3>
                    <p className="text-gray-600">
                      We select technologies that best address your specific
                      project needs
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                  <div className="mr-4 text-green-500 flex-shrink-0 mt-1">
                    <FaChartLine size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1e2d] mb-1">
                      Scalability & Performance
                    </h3>
                    <p className="text-gray-600">
                      We prioritize solutions that can grow with your business
                      and handle increasing demands
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                  <div className="mr-4 text-red-500 flex-shrink-0 mt-1">
                    <FaShieldAlt size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1e2d] mb-1">
                      Security & Reliability
                    </h3>
                    <p className="text-gray-600">
                      We implement technologies with proven security track
                      records and robust stability
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                  <div className="mr-4 text-yellow-500 flex-shrink-0 mt-1">
                    <FaCoins size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1e2d] mb-1">
                      Cost-Effectiveness
                    </h3>
                    <p className="text-gray-600">
                      We balance technical excellence with budget considerations
                      for optimal ROI
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                  <div className="mr-4 text-purple-500 flex-shrink-0 mt-1">
                    <FaRocket size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1e2d] mb-1">
                      Future-Proofing
                    </h3>
                    <p className="text-gray-600">
                      We select technologies with active communities and ongoing
                      development
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 mb-8 md:mb-0">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                  {[
                    {
                      icon: <FaReact className="w-12 h-12 text-blue-500" />,
                      name: "React",
                    },
                    {
                      icon: <FaNodeJs className="w-12 h-12 text-green-600" />,
                      name: "Node.js",
                    },
                    {
                      icon: <FaPython className="w-12 h-12 text-yellow-600" />,
                      name: "Python",
                    },
                    {
                      icon: <SiFlutter className="w-12 h-12 text-blue-400" />,
                      name: "Flutter",
                    },
                    {
                      icon: <FaDocker className="w-12 h-12 text-blue-600" />,
                      name: "Docker",
                    },
                    {
                      icon: <FaAws className="w-12 h-12 text-orange-400" />,
                      name: "AWS",
                    },
                    {
                      icon: <SiNextdotjs className="w-12 h-12 text-black" />,
                      name: "Next.js",
                    },
                    {
                      icon: <FaGithub className="w-12 h-12 text-black" />,
                      name: "GitHub",
                    },
                    {
                      icon: <SiTailwindcss className="w-12 h-12 text-sky-500" />,
                      name: "Tailwind",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center"
                      style={{
                        animation: `float ${2 + (index % 3)}s ease-in-out infinite ${
                          index * 0.2
                        }s`,
                      }}
                    >
                      <div className="w-20 h-20 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center hover:scale-110 hover:shadow-md transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="mt-2 text-xs font-medium text-gray-600">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <h3 className="text-xl font-bold text-[#0a1e2d]">Tech We Love</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Our team is proficient in various modern technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0a1e2d] mb-6">
            Let's build something amazing together
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Ready to leverage our technical expertise for your next project?
            Let's discuss how we can help.
          </p>
          <Link
            href="/#discover-us"
            className="bg-[#0a1e2d] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0a1e2d]/90 transition-colors duration-200"
          >
            Start your project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

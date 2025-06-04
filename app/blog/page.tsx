import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FaLaptopCode, 
  FaLayerGroup, 
  FaPencilRuler, 
  FaServer, 
  FaCloud, 
  FaRocket,
  FaRegEnvelope,
  FaBolt
} from 'react-icons/fa';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiGithub, 
  SiDocker, 
  SiKubernetes 
} from 'react-icons/si';

export default function Blog() {
  // Map categories to icons
  const categoryIcons = {
    "Technology": <FaRocket className="w-4 h-4" />,
    "Web Development": <FaLaptopCode className="w-4 h-4" />,
    "Architecture": <FaLayerGroup className="w-4 h-4" />,
    "Design": <FaPencilRuler className="w-4 h-4" />,
    "DevOps": <FaServer className="w-4 h-4" />,
    "Cloud": <FaCloud className="w-4 h-4" />,
    "All": <FaBolt className="w-4 h-4" />
  };

  const posts = [
    {
      title: "How to Choose the Right Tech Stack for Your Startup",
      category: "Technology",
      date: "June 2, 2024",
      excerpt: "Selecting the right technologies for your startup can be a make-or-break decision. Here's our framework for making this critical choice.",
      image: "/blog/tech-stack.jpg",
      slug: "choose-right-tech-stack-startup",
      icon: <SiReact className="w-16 h-16 text-blue-500" />
    },
    {
      title: "The Future of Web Development: What's Coming in 2025",
      category: "Web Development",
      date: "May 28, 2024",
      excerpt: "From AI-powered development tools to new frameworks and standards, here's what to expect in web development next year.",
      image: "/blog/future-web-dev.jpg",
      slug: "future-web-development-2025",
      icon: <SiNextdotjs className="w-16 h-16 text-black" />
    },
    {
      title: "Building Scalable Microservices: Lessons Learned",
      category: "Architecture",
      date: "May 15, 2024",
      excerpt: "Our team shares key insights and best practices from building microservice architectures for enterprise clients.",
      image: "/blog/microservices.jpg",
      slug: "building-scalable-microservices-lessons",
      icon: <SiDocker className="w-16 h-16 text-blue-600" />
    },
    {
      title: "UI/UX Design Trends That Improve User Engagement",
      category: "Design",
      date: "May 5, 2024",
      excerpt: "Discover the latest design patterns and techniques that are proven to boost user engagement and conversion rates.",
      image: "/blog/ux-design.jpg",
      slug: "ui-ux-design-trends-user-engagement",
      icon: <SiTailwindcss className="w-16 h-16 text-sky-500" />
    },
    {
      title: "DevOps Best Practices for Continuous Delivery",
      category: "DevOps",
      date: "April 22, 2024",
      excerpt: "Learn how to implement efficient CI/CD pipelines and DevOps practices to accelerate your development workflow.",
      image: "/blog/devops.jpg",
      slug: "devops-best-practices-continuous-delivery",
      icon: <SiGithub className="w-16 h-16 text-gray-800" />
    },
    {
      title: "How We Reduced Cloud Costs by 40% for Our Clients",
      category: "Cloud",
      date: "April 10, 2024",
      excerpt: "A detailed case study on optimizing cloud resources and implementing cost-saving strategies for enterprise applications.",
      image: "/blog/cloud-costs.jpg",
      slug: "reduce-cloud-costs-case-study",
      icon: <SiKubernetes className="w-16 h-16 text-blue-700" />
    }
  ];

  const categories = ["All", "Technology", "Web Development", "Architecture", "Design", "DevOps", "Cloud"];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-[#0a1e2d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl">
              Insights, tutorials, and news from our team of technology experts.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                {categoryIcons[category]}
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video w-full relative bg-gray-50">
                  {/* Add fallback for images or use icon if no image */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 opacity-20">
                    {post.icon}
                  </div>
                  
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-30">
                    {categoryIcons[post.category]}
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold text-[#0a1e2d] mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary font-medium hover:underline inline-flex items-center"
                  >
                    Read more 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <span className="w-10 h-10 flex items-center justify-center rounded-md bg-primary text-white">1</span>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100">2</a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100">3</a>
              <span className="px-2">...</span>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100">10</a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100">
                <span className="sr-only">Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-[#0a1e2d] mb-3">Subscribe to our newsletter</h2>
                <p className="text-gray-600 mb-6">
                  Get the latest articles, tutorials, and industry insights delivered directly to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full sm:w-auto px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#0a1e2d] text-white rounded-lg font-medium hover:bg-[#0a1e2d]/90 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center group hover:bg-blue-100 transition-colors duration-300">
                  <FaRegEnvelope className="h-16 w-16 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
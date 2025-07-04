import { 
  FaPython, 
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaGitAlt,
  FaDocker,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiScikitlearn, 
  SiPandas, 
  SiNumpy, 
  SiJupyter,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiGraphql
} from 'react-icons/si';
import { 
  Brain, 
  Users, 
  Trophy, 
  BookOpen,
  Presentation,
  Network,
  Code,
  Server
} from 'lucide-react';

// Technology icons mapping
export const technologyIcons = {
  // Programming Languages
  "Python": <FaPython className="w-6 h-6 text-blue-500" />,
  "JavaScript": <FaJsSquare className="w-6 h-6 text-yellow-500" />,
  "TypeScript": <SiTypescript className="w-6 h-6 text-blue-600" />,
  "HTML5": <FaHtml5 className="w-6 h-6 text-orange-500" />,
  "CSS3": <FaCss3Alt className="w-6 h-6 text-blue-500" />,
  
  // Frameworks & Libraries
  "React": <FaReact className="w-6 h-6 text-blue-400" />,
  "Next.js": <SiNextdotjs className="w-6 h-6 text-black" />,
  "Node.js": <FaNodeJs className="w-6 h-6 text-green-500" />,
  "TensorFlow": <SiTensorflow className="w-6 h-6 text-orange-500" />,
  "Scikit-learn": <SiScikitlearn className="w-6 h-6 text-orange-600" />,
  "Pandas": <SiPandas className="w-6 h-6 text-blue-600" />,
  "NumPy": <SiNumpy className="w-6 h-6 text-blue-400" />,
  "Tailwind CSS": <SiTailwindcss className="w-6 h-6 text-teal-500" />,
  
  // Databases
  "MongoDB": <SiMongodb className="w-6 h-6 text-green-500" />,
  "PostgreSQL": <SiPostgresql className="w-6 h-6 text-blue-600" />,
  "Redis": <SiRedis className="w-6 h-6 text-red-500" />,
  "Database": <FaDatabase className="w-6 h-6 text-gray-600" />,
  
  // Cloud & DevOps
  "AWS": <FaAws className="w-6 h-6 text-orange-400" />,
  "Docker": <FaDocker className="w-6 h-6 text-blue-500" />,
  "Kubernetes": <SiKubernetes className="w-6 h-6 text-blue-600" />,
  "Vercel": <SiVercel className="w-6 h-6 text-black" />,
  "Git": <FaGitAlt className="w-6 h-6 text-orange-500" />,
  
  // Tools & Others
  "Jupyter": <SiJupyter className="w-6 h-6 text-orange-500" />,
  "GraphQL": <SiGraphql className="w-6 h-6 text-pink-500" />,
  
  // Conceptual/Service Icons
  "AI Research": <Brain className="w-6 h-6 text-purple-500" />,
  "Event Management": <Users className="w-6 h-6 text-blue-500" />,
  "Academic Networking": <Network className="w-6 h-6 text-green-500" />,
  "Knowledge Sharing": <BookOpen className="w-6 h-6 text-indigo-500" />,
  "Data Science": <Server className="w-6 h-6 text-gray-600" />,
  "Machine Learning": <Brain className="w-6 h-6 text-purple-600" />,
  "Software Development": <Code className="w-6 h-6 text-blue-600" />,
  "Training": <Presentation className="w-6 h-6 text-orange-500" />
};

// Success Stories data structure
export const successStories = [
  {
    id: 1,
    title: "ICRTAI 2025 Conference",
    subtitle: "International Conference on Recent Trends in AI",
    category: "Conference & Events",
    year: "2025",
    client: "Academic, Research Community",
    description: "Successfully organized a First time in Eastern Region the International Conference on Recent Trends in AI, bringing together researchers, academics, and industry professionals to share cutting-edge AI research and innovations.",
    image: "/projects/icrtai.png",
    technologies: ["AI Research", "Event Management", "Academic Networking", "Knowledge Sharing"],
    features: [
      "Multi-track conference sessions on AI trends",
      "Keynote presentations from industry leaders",
      "Research paper presentations and reviews",
      "Networking opportunities for participants",
      "Workshop sessions on practical AI applications",
      "Industry-academia collaboration initiatives"
    ],
    challenges: [
      "Coordinating international speakers and participants",
      "Managing diverse research topics and presentation quality",
      "Ensuring meaningful knowledge exchange between academia and industry"
    ],
    results: [
      "Successfully hosted 150+ researchers and professionals",
      "Featured 50+ research presentations",
      "Established new industry-academic partnerships",
      "Received outstanding feedback from participants"
    ],
    testimonial: {
      quote: "ICRTAI 2025 was excellently organized with high-quality presentations and valuable networking opportunities. The conference provided great insights into current AI trends.",
      author: "Prof. Dr. Sudan Jha",
      position: "Department of Computer Science and Engineering, School of Engineering, Kathmandu University"
    },
    link: "https://www.icrtai.com/"
  },
  {
    id: 2,
    title: "Machine Learning With Python",
    subtitle: "Hands-on AI/ML Education for Students at Mechi Multiple Campus",
    category: "Training and Development",
    year: "2024",
    client: "Mechi Multiple Campus, Bhadrapur, Jhapa",
    description: "Delivered the beginner friendly machine learning training program to students at Mechi Multiple Campus, providing hands-on experience with real-world datasets and practical AI implementation strategies.",
    image: "/projects/machine_learning.jpg",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Data Science", "Machine Learning"],
    features: [
        "Interactive workshops on machine learning fundamentals",
        "Hands-on projects using Python and popular ML libraries",
        "Real-world case studies to demonstrate AI applications",
        "Personalized mentorship for students",
        "Focus on practical skills and immediate workplace application"
    ],
    challenges: [
        "Adapting complex ML concepts for various technical backgrounds",
        "Ensuring participants can apply skills immediately at work"
    ],
    results: [
      "Trained 40+ students to the field of Machine Learning",
      "95% participant satisfaction rate",
      "85% of participants implemented ML solutions at work",
      "Established long-term training partnerships"
    ],
    testimonial: {
      quote: "The ML training was exceptional - practical, relevant, and immediately applicable. Our team gained confidence to implement AI solutions in our projects.",
      author: "Devi Prasad Acharya",
      position: "Campus Chief, Mechi Multiple Campus, Bhadrapur, Jhapa"
    }
  }
];

export const successStoriesStats = [
  {
    number: "500+",
    label: "Students Trained",
    description: "In AI/ML, cybersecurity, and software development"
  },
  {
    number: "95%",
    label: "Training Success Rate",
    description: "Participants achieving certification and career growth"
  },
  {
    number: "10+",
    label: "Industry Partners",
    description: "Long-term training and development partnerships"
  }
];

export const industries = [
  {
    name: "Education & Training",
    icon: "🎓",
    projects: 5
  },
  {
    name: "Software Development",
    icon: "💻",
    projects: 12
  },
  {
    name: "AI & Machine Learning",
    icon: "🤖",
    projects: 10
  },
  {
    name: "Conference & Events",
    icon: "🎯",
    projects: 1
  }
];

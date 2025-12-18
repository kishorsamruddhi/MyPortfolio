import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Shield, Users, Code, Cloud } from 'lucide-react';

// JSON format for project data
const projectsData = [
  {
    id: 1,
    title: "SecureLinkVPN",
    subtitle: "A Lightweight Peer-to-Peer Secure Communication System",
    description: "Custom-built, lightweight system designed to emulate Virtual Private Network (VPN) functionality, enabling secure peer-to-peer communication through a trusted server. Features hybrid cryptography with RSA for key exchange and AES-256-CBC for data encryption.",
    technologies: ["C++", "OpenSSL", "RSA", "AES-256-CBC", "SHA256", "TCP", "Ngrok"],
    features: [
      "Lightweight Design with minimal complexity",
      "Hybrid Cryptography (RSA + AES-256-CBC)",
      "Server-Mediated P2P Communication",
      "Integrity Assurance with SHA256",
      "End-to-end encryption with privacy focus"
    ],
    domain: "Network Security",
    icon: Shield,
    gradient: "from-blue-600 to-purple-600",
    imageUrl: "vpn.png",
    demoUrl: "#",
    githubUrl: "https://github.com/Tejaakshaykumar/SecureLinkVPN "
  },
  {
    id: 2,
    title: "EmployEase",
    subtitle: "Platform for both job seekers and employers",
    description: "User-friendly web application designed to streamline the job search and recruitment process. Provides a comprehensive platform where job seekers can find and apply for jobs, while employers can post jobs and manage applications efficiently.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Bootstrap", "Netlify", "Render"],
    features: [
      "User registration and secure login",
      "Separate dashboards for employers and job seekers",
      "Job posting and application management",
      "Real-time notifications system",
      "Secure data storage with Firebase"
    ],
    domain: "Web Development",
    icon: Users,
    gradient: "from-green-600 to-blue-600",
    imageUrl: "employease.png",
    demoUrl: "https://employease.netlify.app/",
    githubUrl: "https://github.com/Tejaakshaykumar/EmployEase"
  },
  {
    id: 3,
    title: "MakeMyVita",
    subtitle: "A Resume Builder Website",
    description: "User-friendly web application designed to help users create professional resumes quickly and efficiently. Features multiple templates, real-time preview, and export options in various formats including PDF, JPG, PNG, and DOCX.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Bootstrap", "Netlify", "Render"],
    features: [
      "Google Authentication integration",
      "Multiple professional resume templates",
      "Real-time preview with live updates",
      "Font and color customization options",
      "Export in multiple formats (PDF, JPG, PNG, DOCX)"
    ],
    domain: "Web Development",
    icon: Code,
    gradient: "from-purple-600 to-pink-600",
    imageUrl: "makemyvita.png",
    demoUrl: "https://makemyvita.netlify.app/",
    githubUrl: "https://github.com/Tejaakshaykumar/MakeMyVita-Resume-Builder-Website"
  },
  {
    id: 4,
    title: "Attendance Management System",
    subtitle: "Cloud-based School Attendance Solution",
    description: "Web-based application designed to streamline attendance recording and management in schools. Administrators can manage schools, classes, sections, students, and teachers, while teachers can efficiently mark attendance and generate reports.",
    technologies: ["HTML", "CSS", "PHP", "phpMyAdmin", "SQL", "AWS S3", "AWS IAM", "AWS EC2"],
    features: [
      "Administrator school management system",
      "Teacher login and student management",
      "Attendance marking and reporting",
      "Student search functionality",
      "AWS cloud infrastructure integration"
    ],
    domain: "Cloud Computing",
    icon: Cloud,
    gradient: "from-orange-600 to-red-600",
    imageUrl: "attendance_management.png",
    demoUrl: "#",
    githubUrl: "https://github.com/Tejaakshaykumar/Attendance-Management-System-Website"
  }
];

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  const current = projectsData[currentProject];
  const IconComponent = current.icon;

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`text-center mb-16 transition-all duration-1000`}>
          <h2 className="text-4xl text-white md:text-5xl font-bold mb-4 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Project Display */}
          <div>
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Project Card */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
                {/* Project Image */}
                <div className="relative h-64 md:h-110 overflow-hidden">
                  <div className={`absolute inset-0 `} />
                  <img
                    src={current.imageUrl}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  
                  {/* Project Icon */}
                  <div className="absolute top-6 left-6">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${current.gradient} shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Domain Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 bg-black/50 text-white text-sm rounded-full backdrop-blur-sm">
                      {current.domain}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left side - Project Info (75%) */}
                    <div className="lg:col-span-3">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{current.title}</h3>
                          <p className="text-blue-400 font-medium">{current.subtitle}</p>
                        </div>
                        <div className="flex gap-2">
                          <a
                            href={current.demoUrl}
                            className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all"
                            title="View Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <a
                            href={current.githubUrl}
                            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-all"
                            title="View Code"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {current.description}
                      </p>

                      {/* Key Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {current.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right side - Technologies (25%) */}
                    <div className="lg:col-span-1">
                      <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Code className="w-5 h-5 text-blue-400" />
                          Technologies
                        </h4>
                        <div className="space-y-3">
                          {current.technologies.map((tech, index) => (
                            <div
                              key={index}
                              className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm border border-gray-600 hover:border-blue-500 transition-all text-center"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {projectsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToProject(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentProject ? 'bg-blue-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Auto-play toggle */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isAutoPlaying
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {isAutoPlaying ? 'Auto-play ON' : 'Auto-play OFF'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
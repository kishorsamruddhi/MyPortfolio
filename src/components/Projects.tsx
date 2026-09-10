import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Shield, Users, Code, Cloud } from 'lucide-react';

// JSON format for project data
const projectsData = [
  {
    id: 1,
    title: "Flight Reservation System",
subtitle: "Scalable Microservices-Based Airline Booking Platform",
description: "A distributed flight reservation system built using microservices architecture, enabling users to search flights, calculate fares, and complete bookings through independent, loosely coupled services. The system leverages service discovery, centralized configuration, asynchronous messaging, and caching to ensure scalability, reliability, and low-latency performance.",
technologies: [
  "Java",
  "Spring Boot",
  "Spring Cloud",
  "REST APIs",
  "RabbitMQ",
  "Redis",
  "Eureka Service Discovery",
  "API Gateway",
  "Config Server"
],
features: [
  "Microservices-based architecture for flight search, fare calculation, and booking",
  "API Gateway for centralized routing and request handling",
  "Service discovery using Eureka for dynamic service registration",
  "Centralized configuration management with Spring Cloud Config Server",
  "Asynchronous booking and notification processing using RabbitMQ"
],
 domain: "Full-Stack Development | Distributed Systems",
    icon: Shield,
    gradient: "from-blue-600 to-purple-600",
    imageUrl: "fight.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/kishorsamruddhi/flight-booking-system"
  },
  {
    id: 2,
    title: "SportsWear Platform",
    subtitle: "End-to-End Sportswear E-Commerce Platform",
description: "A full-stack sportswear e-commerce web application that enables users to browse products, manage cart and wishlist, and place orders seamlessly. The platform supports secure JWT-based authentication, role-based access control, address management, order history, coupon application, and integrated Razorpay payments. Deployed using modern cloud hosting with Vercel for the frontend and Heroku for the backend.",
technologies: ["React.js", "Redux", "REST APIs", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Razorpay"],
features: [
  "User registration and secure JWT-based authentication",
  "Product browsing with cart and wishlist management",
  "Role-based access for users and administrators",
  "Address management, order history, and coupon support",
  "Secure online payments with Razorpay integration"
],
    domain: "Fullstack Development",
    icon: Users,
    gradient: "from-green-600 to-blue-600",
    imageUrl: "nike.png",
    demoUrl: "https://nike-clone-468u37uxv-samruddhis-projects-443f0d6e.vercel.app/",
    githubUrl: "https://github.com/kishorsamruddhi/Nike-Clone"
  },
  {
    id: 3,
   title: "Mera Bestie",
subtitle: "Seller-to-Consumer E-Commerce Platform",
description: "A full-stack e-commerce web application that enables sellers to list and manage products while allowing buyers to browse, review, and purchase items through a clean, user-friendly interface. The platform streamlines order management and transaction workflows, resulting in faster processing times and an improved shopping experience.",
technologies: [
  "React.js",
  "Material-UI",
  "Firebase Authentication",
  "Firebase Firestore",
  "Firebase Storage",
  "Firebase Hosting"
],
features: [
  "Seller product listing and management dashboard",
  "Buyer-facing product browsing with reviews and ratings",
  "Secure user authentication and role-based access",
  "Order management with optimized processing workflows",
  "Responsive UI for seamless experience across devices"
],   domain: "Web Development",
    icon: Code,
    gradient: "from-purple-600 to-pink-600",
    imageUrl: "merabestie.png",
    demoUrl: "https://merabestie-khaki.vercel.app/",
    githubUrl: "https://github.com/kishorsamruddhi/EcommerceWebsite"
  },
  {
    id: 4,
    title: "High-Concurrency Order Processing System",
subtitle: "Distributed Pre-Checkout Reservation & Inventory Management System",
description: "A high-performance backend system designed to handle extreme traffic during flash-sale events. The platform ensures safe inventory allocation, prevents overselling, and delivers sub-100ms responses by leveraging Redis atomic operations, asynchronous messaging, and scalable microservice-based APIs.",
technologies: [
  "Java",
  "Spring Boot",
  "Redis",
  "RabbitMQ",
  "MyBatis",
  "Thymeleaf",
  "Nginx",
  "REST APIs",
  "Distributed Systems"
],
features: 
  [
  "Pre-checkout inventory reservation using Redis atomic operations",
  "Overselling prevention under heavy concurrent traffic",
  "Asynchronous order processing with RabbitMQ",
  "High-throughput REST APIs built with Spring Boot",
  "Scalable architecture optimized for flash-sale traffic bursts"
],
domain: "High-Concurrency Systems",
    icon: Cloud,
    gradient: "from-orange-600 to-red-600",
    imageUrl: "high.png",
    demoUrl: "#",
    githubUrl: "https://github.com/kishorsamruddhi/High-Concurrency-Order-Processing-System"
  },
  {
    id: 5,
    title: "Sarkar Rental Vehicle",
    subtitle: "Vehicle Rental Agency Platform | Jun 2026 - Aug 2026",
    description: "A full-stack vehicle rental platform built from scratch with vehicle listings, availability checks, end-to-end booking flows, secure authentication, OTP verification, booking emails, and Razorpay test-mode payments.",
    technologies: ["MERN Stack", "Zustand", "REST APIs", "JWT Authentication", "SMTP", "Razorpay"],
    features: [
      "MongoDB schemas for vehicles, bookings, and users",
      "Zustand state management for a scalable client architecture",
      "JWT authentication with HTTP-only cookies and password hashing",
      "SMTP workflows for booking confirmations and OTP verification",
      "Razorpay payment order creation and verification"
    ],
    domain: "MERN Stack Development",
    icon: Users,
    gradient: "from-cyan-600 to-blue-600",
    imageUrl: "sarkarrentalvehicl.png",
    demoUrl: "https://sarkar-rental-vehicle.vercel.app/",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Digi Shiksha",
    subtitle: "Learning Management System | Oct 2024 - Dec 2024",
    description: "A full-stack LMS with role-based access for admins and users, course enrollment and progress tracking, certificate generation, and an agentic AI assistant for personalized learning support.",
    technologies: ["MERN Stack", "Agentic AI", "OpenAI API", "Tool Calling", "Prompt Engineering", "JWT Authentication"],
    features: [
      "Secure login and role-based authentication for admins and users",
      "Agentic AI assistant for course recommendations and learner queries",
      "Course enrollment, progress tracking, and certificate generation",
      "Admin panel for managing courses, users, and learning content",
      "Designed to support 20-30 users and 10+ courses"
    ],
    domain: "MERN Stack Development",
    icon: Code,
    gradient: "from-emerald-600 to-teal-600",
    imageUrl: "lms.png",
    demoUrl: "https://learning-management-azure.vercel.app/",
    githubUrl: "#"
  },
  {
    id: 7,
    title: "Manadhaar",
    subtitle: "Marathi Literature Sharing Platform",
    description: "A platform for sharing poems and Shayari that celebrates Marathi literature, helping preserve the language's literary heritage and connect readers with meaningful creative works.",
    technologies: ["React.js", "JavaScript", "Responsive UI", "Vercel"],
    features: [
      "Shared poems and Shayari for Marathi literature lovers",
      "A digital space dedicated to preserving Marathi literary culture",
      "Accessible reading experience across devices",
      "Production deployment on Vercel"
    ],
    domain: "Web Development",
    icon: Shield,
    gradient: "from-rose-600 to-orange-600",
    imageUrl: "manadhar.png",
    demoUrl: "https://manadhar.vercel.app/",
    githubUrl: "#"
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
                  {current.imageUrl && (
                    <img
                      src={current.imageUrl}
                      alt={current.title}
                      className="w-full h-full object-cover"
                    />
                  )}
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
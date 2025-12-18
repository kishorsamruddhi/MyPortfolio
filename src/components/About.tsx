import React, { useState, useEffect } from 'react';
import { GraduationCap, Code, MapPin, Calendar, Users, BookOpen, MessageCircle, ChevronRight, Sparkles } from 'lucide-react';
import { Handshake, BookOpenCheck, Hammer } from "lucide-react";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const currentWork = [
    {
      title: 'Workflow Automation Tool',
      description: 'Building an intelligent system to streamline proposal workflows and agent-driven analysis',
      tech: ['AI Agents', 'Automation', 'Workflow Management'],
      icon: Code
    }
  ];

  const interests = [
    {
      icon: Users,
      title: 'Looking to collaborate on',
      items: ['Web Development', 'Open Source Projects', 'Software Development'],
    },
    {
      icon: BookOpen,
      title: 'Currently learning',
      items: ['Deep Learning', 'Natural Language Processing (NLP)', 'Network Security'],
    },
    {
      icon: MessageCircle,
      title: 'Ask me about',
      items: ['Web Development', 'AI Agents', 'Automation Workflows'],
    }
  ];

  return (
    <section id="about" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        </div>

        {/* Personal Card */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="flex-shrink-0 relative">
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300 border border-white/20">
                  <GraduationCap className="w-16 h-16 text-white z-10" />
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
                  Samruddhi Bhamburkar
                </h3>
                <p className="text-gray-400 mb-4 text-lg">she/her</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-300 bg-white/10 rounded-full px-4 py-2 border border-white/20">
                    <MapPin className="w-4 h-4" />
                    <span>Tulsiramji Gaikwad Patil College of Engineering and Technology</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300 bg-white/10 rounded-full px-4 py-2 border border-white/20">
                    <Calendar className="w-4 h-4" />
                    <span>2022-2026</span>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed text-lg">
                  I'm a student who enjoys learning and building things with technology. I'm always looking to improve my skills and create useful solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Work Section */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
            <Code className="w-6 text-blue-600 h-6" />
            What I'm Working On
          </h3>
          {currentWork.map((work, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02]"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <work.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">
                    {work.title}
                  </h4>
                  <p className="text-gray-400 mb-6 text-lg leading-relaxed">{work.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {work.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20 hover:border-white/30 hover:bg-white/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interests Grid */}
        <div className={`transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
  <div className="flex justify-center items-center mb-8">
    <div className="flex items-center space-x-4 text-xl font-semibold">
      <Handshake className="text-blue-600" />
      <span>Collaborate.</span>
      <BookOpenCheck className="text-green-600" />
      <span>Learn.</span>
      <Hammer className="text-purple-600" />
      <span>Build.</span>
    </div>
  </div>
          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group cursor-pointer hover:scale-105"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <interest.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">
                    {interest.title}
                  </h4>
                </div>
                <div className="space-y-2">
                  {interest.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 ${
                        activeCard === index ? 'translate-x-2' : ''
                      }`}
                      style={{ 
                        transitionDelay: `${itemIndex * 100}ms` 
                      }}
                    >
                      <span className="text-gray-300">{item}</span>
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
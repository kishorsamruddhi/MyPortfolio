import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Terminal, Brain, GitBranch } from 'lucide-react';
import { 
  SiCplusplus, SiPython, SiPhp, SiTypescript,
  SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiReact,
  SiNodedotjs, SiExpress, SiFastapi,
  SiOracle, SiMysql, SiPostgresql, SiMongodb, SiSupabase, SiDbeaver,
  SiGit, SiGithub, SiGitlab,
  SiOpenai, SiTensorflow, SiN8N, SiProbot
} from 'react-icons/si';
import { FaJava } from "react-icons/fa6";


const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'Java', icon: FaJava, color: '#ED8B00' },
        { name: 'PHP', icon: SiPhp, color: '#777BB4' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }
      ]
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
        { name: 'React', icon: SiReact, color: '#61DAFB' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Terminal,
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688' }
      ]
    },
    {
      title: 'Databases & Tools',
      icon: Database,
      skills: [
        { name: 'Oracle', icon: SiOracle, color: '#F80000' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Supabase', icon: SiSupabase, color: '#3FCF8E' },
        { name: 'DBeaver', icon: SiDbeaver, color: '#382923' }
      ]
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' }
      ]
    },
    {
      title: 'AI, ML & Automation',
      icon: Brain,
      skills: [
        { name: 'AI', icon: SiOpenai, color: '#412991' },
        { name: 'ML', icon: SiTensorflow, color: '#FF6F00' },
        { name: 'N8N', icon: SiN8N, color: '#EA4B71' },
        { name: 'Agents', icon: SiProbot, color: '#000000' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white relative overflow-hidden">
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
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </div>

        {/* Skills Grid - 3 cards per row */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div 
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group cursor-pointer h-full"
                onMouseEnter={() => setActiveCategory(category.title)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`relative transition-all duration-300 ${
                        activeCategory === category.title ? 'translate-x-2' : ''
                      }`}
                      style={{ transitionDelay: `${skillIndex * 100}ms` }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 border border-white/20">
                            <skill.icon 
                              className="w-5 h-5 transition-all duration-300" 
                              style={{ color: skill.color }}
                            />
                          </div>
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>

                        {/* Skill Badge */}
                        <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white transform transition-all duration-300 ${
                          hoveredSkill === skill.name ? 'scale-110' : 'scale-0'
                        }`}
                        style={{ backgroundColor: skill.color }}>
                          ✓
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import { useState, useEffect } from 'react';
import { Code, Terminal, Coffee, Zap} from 'lucide-react';

const Intro = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  type Particle = {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    duration: number;
  };
  const [particles, setParticles] = useState<Particle[]>([]);

  const roles = [
    'Computer Science Student',
    'Full Stack Developer',
    'Prompt Engineer',
    'Tech Explorer'
  ];

  const codeSnippets = [
    'console.log("Hello World!");',
    'const developer = "Samruddhi";',
    'function innovate() { return true; }',
    'git commit -m "Building the future"'
  ];

  // Typing animation effect
  useEffect(() => {
    const currentText = roles[currentRole];
    let index = 0;
    setDisplayText('');
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index < currentText.length) {
        setDisplayText(currentText.substring(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating particles effect
  useEffect(() => {
    const createParticle = () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.3 + 0.1,
      duration: Math.random() * 20 + 10
    });

    const initialParticles = Array.from({ length: 15 }, createParticle);
    setParticles(initialParticles);

    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticles = prev.map(particle => ({
          ...particle,
          y: particle.y - 0.3,
          opacity: particle.opacity - 0.002
        })).filter(particle => particle.opacity > 0);
        
        if (newParticles.length < 15) {
          newParticles.push(createParticle());
        }
        
        return newParticles;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro" className="min-h-screen relative overflow-hidden bg-black text-white pt-30">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Code Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute text-xs font-mono text-gray-500"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              fontSize: `${particle.size*1.5}px`,
              transform: `translateY(-${particle.y * 0.5}px)`
            }}
          >
            {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Section */}
          <div className="mb-8 group">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-2 border-2 border-gray-300 rounded-full animate-pulse opacity-30"></div>
              <div className="absolute inset-4 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-gray-600">
                <img 
                  src="image.png" 
                  alt="Samruddhi's Profile"
                  className="w-full h-full object-cover rounded-full hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-white w-8 h-8 rounded-full flex items-center justify-center animate-bounce border border-gray-300">
                <Zap className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>

          {/* Dynamic Greeting */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Hey, I'm Samruddhi
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-2 font-mono">
              <span className="text-gray-500">const</span> role = "
              <span className="text-white border-r-2 border-white pr-1">
                {displayText}
              </span>
              <span className={`${isTyping ? 'animate-pulse' : ''}`}>
                {isTyping ? '|' : '"'}
              </span>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Passionate about crafting digital experiences and turning complex problems into elegant solutions. 
              Currently building the future, one line of code at a time.
            </p>
          </div>

          {/* Interactive Tech Stack */}
          <div className="mb-8">
            <div className="flex justify-center space-x-4 mb-6">
              {[
                { icon: Code, color:'blue', label: 'Clean Code' },
                { icon: Terminal, color:'black', label: 'Terminal' },
                { icon: Coffee, color:'yellow', label: 'Coffee Powered' },
                { icon: Zap, color:'green', label: 'Fast Learner' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:scale-110 border border-gray-800 hover:border-gray-600"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <item.icon className={`w-8 h-8 text-${item.color}-400 group-hover:text-${item.color}-700 transition-colors duration-300`} />
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Cursor Effect */}
      <div
        className="fixed pointer-events-none z-50 w-4 h-4 bg-white rounded-full opacity-30 transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'scale(0.5)',
          mixBlendMode: 'difference'
        }}
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </section>
  );
};

export default Intro;
import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

interface NavBarProps {
  navItems: { name: string; id: string }[];
  scrollToSection: (id: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ navItems, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (id: string) => {
    scrollToSection(id);
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' 
          : 'bg-black/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Code className="w-8 h-8 text-white mr-2" />
                <span className="text-white font-bold text-xl font-mono">Samruddhi</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`group relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeInDown 0.6s ease-out forwards'
                    }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-white/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Active Indicator */}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-white transform transition-transform duration-300 ${
                      activeSection === item.id ? 'scale-x-100' : 'scale-x-0'
                    }`}></div>
                    
                    {/* Hover Underline */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md border-t border-gray-800">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`group block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-white bg-white/10' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: isMobileMenuOpen ? 'fadeInUp 0.4s ease-out forwards' : 'none'
                }}
              >
                <span className="relative">
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-white rounded-full"></div>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div 
          className="h-full bg-white transition-all duration-300"
          style={{
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        />
      </div>
    </>
  );
};

export default NavBar;
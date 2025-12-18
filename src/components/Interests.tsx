import React, { useState, useEffect } from 'react';
import { 
  FaPlane, 
  FaLaptopCode, 
  FaFilm, 
  FaPaintBrush, 
  FaFeatherAlt 
} from 'react-icons/fa';
import { 
  GiSharkJaws, 
  GiCricketBat, 
  GiShuttlecock 
} from 'react-icons/gi';
import { TbPlayHandball } from "react-icons/tb";

const Interests: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('interests');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const interestCategories = [
    {
      title: 'Exploring',
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      borderColor: 'border-blue-200',
      interests: [
        { name: 'Travel', icon: FaPlane, color: '#3B82F6' },
        { name: 'Shark Tank', icon: GiSharkJaws, color: '#06B6D4' },
        { name: 'New Tech', icon: FaLaptopCode, color: '#8B5CF6' },
      ]
    },
    {
      title: 'Sports',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      borderColor: 'border-green-200',
      interests: [
        { name: 'Handball', icon: TbPlayHandball, color: '#059669' },
        { name: 'Cricket', icon: GiCricketBat, color: '#065F46' },
        { name: 'Badminton', icon: GiShuttlecock, color: '#047857' }
      ]
    },
    {
      title: 'Hobbies',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-100',
      borderColor: 'border-pink-200',
      interests: [
        { name: 'Movies', icon: FaFilm, color: '#EC4899' },
        { name: 'Drawing', icon: FaPaintBrush, color: '#BE185D' },
        { name: 'Creative Writing', icon: FaFeatherAlt, color: '#9D174D' }
      ]
    }
  ];

  return (
    <section id="interests" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl text-white md:text-5xl font-bold mb-4 bg-clip-text text-transparent">
            My Interests
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className=" text-lg max-w-2xl mx-auto">
            Things that inspire me, keep me active, and fuel my creativity
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interestCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div 
                className={`${category.bgColor} rounded-2xl p-8 border-2 ${category.borderColor} hover:shadow-xl transition-all duration-300 group cursor-pointer h-full`}
                onMouseEnter={() => setActiveCategory(category.title)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Interests List */}
                <div className="space-y-4">
                  {category.interests.map((interest, interestIndex) => (
                    <div
                      key={interest.name}
                      className={`${category.hoverColor} rounded-xl p-4 border ${category.borderColor} transition-all duration-300 transform ${
                        activeCategory === category.title ? 'translate-x-2 shadow-md' : ''
                      }`}
                      style={{ transitionDelay: `${interestIndex * 100}ms` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center border-2 border-gray-100">
                          <interest.icon 
                            className="w-5 h-5 transition-all duration-300" 
                            style={{ color: interest.color }}
                          />
                        </div>
                        <span className="text-gray-800 font-medium text-lg">{interest.name}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className={`mt-8 h-2 rounded-full bg-gradient-to-r ${category.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
import React from "react";
import {
  ChevronUp,
  Mail,
  Phone,
  Github,
  Linkedin,
  Heart,
} from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9518545256",
      href: "tel:+919518545256",
    },
    {
      icon: Mail,
      label: "Email",
      value: "samruddhibhamburkar34@gmail.com",
      href: "mailto:samruddhibhamburkar34@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/samruddhi-bhamburkar",
      href: "https://github.com/kishorsamruddhi",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/samruddhi-bhamburkar",
      href: "https://www.linkedin.com/in/samruddhi-bhamburkar-0a53712b9/",
    },
  ];

  return (
    <footer id="contact" className="bg-black text-white relative">
      <div className="border-t border-white-800 mx-9"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="mb-8">
          {/* Contact Me Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Let's Connect!
            </h2>
            <p className="text-gray-400 mb-6">
              Feel free to reach out for collaborations or just to say hello.
            </p>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-700 hover:border-gray-600 transition-all"
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <IconComponent className="w-4 h-4 text-blue-600" />
                    <div>
                      <p className="text-xs text-gray-500">{contact.label}</p>
                      <p className="text-sm text-white">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6"></div>
        <div className="flex flex-col items-center gap-4 md:hidden">
          {/* Back to Top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 border border-gray-700 hover:border-gray-600 rounded-lg transition-all text-sm"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
          {/* Made with love */}
          <div className="text-center">
            <div className="flex items-center gap-2 text-gray-300 justify-center">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Samruddhi Bhamburkar</span>
            </div>
            <p className="text-gray-500 text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>

        <div className="hidden md:flex relative items-center justify-center">
          <button
            onClick={scrollToTop}
            className="absolute right-0 flex items-center gap-2 px-4 py-2 border border-gray-700 hover:border-gray-600 rounded-lg transition-all text-sm"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4" />
          </button>

          {/* Centered info */}
          <div className="text-center">
            <div className="flex items-center gap-2 text-gray-300 justify-center">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Samruddhi Bhamburkar</span>
            </div>
            <p className="text-gray-500 text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
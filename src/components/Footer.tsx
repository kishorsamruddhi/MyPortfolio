import React, { useState } from "react";
import {
  ChevronUp,
  Mail,
  Phone,
  Github,
  Linkedin,
  Coffee,
  X,
  Heart,
  Copy,
  Check,
} from "lucide-react";

const Footer: React.FC = () => {
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyUPI = () => {
    navigator.clipboard.writeText("tejaakshaykumar970@ybl");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Contact Me Section */}
          <div className="lg:col-span-2">
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

          {/* Buy Me a Coffee Section */}
          <div className="lg:col-span-1">
            <div className="border border-gray-700 rounded-lg p-4 bg-gray-900/20">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="w-5 h-5 text-yellow-500" />
                <h3 className="text-lg font-medium text-white">
                  Buy Me a Coffee
                </h3>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setShowQR(!showQR)}
                  className="w-full bg-white text-black hover:bg-gray-200 font-medium py-2 px-4 rounded-md transition-all text-sm"
                >
                  {showQR ? "Hide QR" : "Show QR"}
                </button>

                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-800 rounded-md px-3 py-2 text-xs text-gray-300 border border-gray-700">
                    9518545256@ybl
                  </div>
                  <button
                    onClick={copyUPI}
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-all border border-gray-700"
                    title="Copy UPI ID"
                  >
                    {copied ? (
                      <Check className="w-3 h-3 text-green-400" />
                    ) : (
                      <Copy className="w-3 h-3 text-gray-300" />
                    )}
                  </button>
                </div>
              </div>

              {/* QR Code Modal */}
              {showQR && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                  <div className="bg-gray-900 rounded-lg p-6 max-w-sm w-full border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-white">
                        Scan to Pay
                      </h3>
                      <button
                        onClick={() => setShowQR(false)}
                        className="p-1 hover:bg-gray-800 rounded-full transition-all"
                      >
                        <X className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                        <img
                          src="QR.png"
                          alt="QR Code"
                          className="h-40 object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-400">
                      9518545256@ybl
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6"></div>
        <div className="flex flex-col items-center gap-4 md:hidden">
          Back to Top button
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

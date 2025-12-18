import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000`}>
          <h2 className="text-4xl text-white md:text-5xl font-bold mb-4 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        </div>
        
        <div className="space-y-8">
          {/* Main Experience Card */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800 hover:border-gray-700 transition-colors duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mr-4 border border-gray-700 overflow-hidden">
  <img
    src="1747457288219.jpeg"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Software Intern</h3>
                  <p className="text-gray-300 text-lg">Gamutx, Mumbai</p>
                </div>
              </div>
              <div className="mt-4 lg:mt-0">
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Aug 2025 - Nov 2025
                </span>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-8">
              {/* Project 1 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-semibold text-white mb-4"> Developer Enablement & Integration Tool</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="text-lg font-medium text-gray-200 mb-2">Built Full-Stack Workflow Modules:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Explain <strong className="text-white"> Python Programming Concepts </strong> used in <strong className="text-white">VFX Pipelines </strong> and <strong className="text-white">Tools</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Provides <strong className="text-white">configuration steps</strong> to set up in the target system</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-medium text-gray-200 mb-2">Developed Workflow Recommendation & Insight Engine:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span><strong className="text-white">Logic-based suggestions</strong> with actionable insights (e.g., Assign, Review, Update) based on workflow status <span className="text-green-400 font-semibold">~80% workflow coverage</span></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span><strong className="text-white">Data grouping logic</strong>  to organize related items and suggest handling them together</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'TailwindCSS', 'Python (FastAPI)', 'PostgreSQL', 'Prompt Engineering'].map((tech) => (
                        <span key={tech} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-semibold text-white mb-4"> Workflow Automation Tool</h4>
                
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Designed and developed an <strong className="text-white">automation tool to streamline repetitive content</strong>  and  <strong className="text-white">file-handling tasks, reducing manual effort</strong> for day-to-day operations.
                  </p>

                  <div>
                    <h5 className="text-lg font-medium text-gray-200 mb-2">Implemented Workflow Automation:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span> <strong className="text-white">Automated extraction </strong> and <strong className="text-white">handling of file names </strong> and content from tools like <strong className="text-white">GitHub and Atlassian, </strong>eliminating manual copy-paste work</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span><strong className="text-white">Standardized content organization</strong> and   <strong className="text-white">integration</strong> into the target system through backend automation.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span> Resulted in  <span className="text-green-400 font-semibold"> ~65% reduction in repetitive manual work </span> and <span className="text-green-400 font-semibold">~75% reduction in turnaround time.</span></span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'TailwindCSS', 'Python (FastAPI)', 'PostgreSQL', 'Prompt Engineering', 'n8n', 'Google Cloud Console'].map((tech) => (
                        <span key={tech} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
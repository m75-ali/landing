// Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import NavBar from './NavBar';
import Footer from './Footer';
import BackgroundAnimation from './BackgroundAnimation';

const Projects = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Navbar */}
      <NavBar />

      {/* Projects Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow relative z-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-indigo-800 mb-10">My Projects</h2>
        
        {/* Project Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {/* Project Card 1 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <img src="/Images/twincity.png" alt="Twin Cities Weather and Tourism web application" className="w-full h-48 sm:h-56 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-indigo-800">Twin Cities Weather and Tourism web application</h3>
              <p className="text-gray-600 mt-2">An application displaying a map of tourist spots and live weather forecast with city information.</p>
            </div>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <img src="/Images/javafx.png" alt="UWE Accommodation System" className="w-full h-48 sm:h-56 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-indigo-800">UWE Accommodation System</h3>
              <p className="text-gray-600 mt-2">Desktop application for managing tenant and hall data, streamlining operations for hall managers.</p>
            </div>
          </motion.div>

          {/* Project Card 3 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <img src="/Images/chatbot.png" alt="UWE Chatbot" className="w-full h-48 sm:h-56 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-indigo-800">UWE Chatbot</h3>
              <p className="text-gray-600 mt-2">A chatbot using SpaCy, NLTK, and GPT-3.5 to improve student access to self-help resources at UWE.</p>
            </div>
          </motion.div>

          {/* Project Card 4 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <img src="/Images/ev.png" alt="EV Charging Point Locator" className="w-full h-48 sm:h-56 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-indigo-800">EV Charging Point Locator</h3>
              <p className="text-gray-600 mt-2">Web application helping users locate the nearest EV charging stations based on their postcode.</p>
            </div>
          </motion.div>

          {/* Project Card 5 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <img src="/Images/calc.png" alt="Calculator" className="w-full h-48 sm:h-56 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-indigo-800">Calculator</h3>
              <p className="text-gray-600 mt-2">Front-end project implementing a functional calculator with logical validation for calculations.</p>
              <a href="https://m75-ali.github.io/calculator/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 mt-3 inline-block hover:underline">
                View Live <img src="/Images/arrow.png" alt="New Tab Icon" className="inline-block h-4 w-4 ml-1"/>
              </a> 
            </div>
          </motion.div>

          {/* Project Card 6 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <img src="/Images/quiz questions.png" alt="Music Quiz" className="w-full h-48 sm:h-56 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-indigo-800">Music Quiz</h3>
              <p className="text-gray-600 mt-2">Interactive web app to help users discover their preferred music genre through quiz questions.</p>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
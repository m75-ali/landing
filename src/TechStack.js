// TechStack.js
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundAnimation from './BackgroundAnimation';
import NavBar from './NavBar';
import Footer from './Footer';

const TechStack = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gray-900">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <BackgroundAnimation />
      </div>

      {/* Navbar */}
      <NavBar />

      <motion.main
        className="flex-grow max-w-5xl mx-auto px-4 md:px-6 space-y-10 pb-16 text-gray-100 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Tech Stack Overview */}
        <motion.section
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-4">My Technology Stack</h2>
          <p className="text-base md:text-lg text-blue-100">
            Explore the technologies I've worked with to build scalable and efficient applications.
          </p>
        </motion.section>

        {/* Section Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Programming Languages */}
          <motion.section
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">Programming Languages</h3>
            <ul className="space-y-2">
              <li><strong>Python:</strong> Web applications, data analysis, scripting.</li>
              <li><strong>JavaScript:</strong> Frontend development, React framework.</li>
              <li><strong>Java:</strong> JavaFX for desktop applications.</li>
              <li><strong>HTML/CSS:</strong> Web design and responsive layouts.</li>
              <li><strong>PHP:</strong> Server-side scripting for dynamic pages.</li>
              <li><strong>SQL:</strong> Relational databases and queries.</li>
            </ul>
          </motion.section>

          {/* Frameworks */}
          <motion.section
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">Frameworks</h3>
            <ul className="space-y-2">
              <li><strong>Django:</strong> Rapid Python web development.</li>
              <li><strong>React:</strong> Dynamic user interfaces.</li>
              <li><strong>Flask:</strong> Web applications with Python.</li>
              <li><strong>Bootstrap CSS:</strong> Responsive web design.</li>
              <li><strong>Tailwind CSS:</strong> Utility-first UI development.</li>
            </ul>
          </motion.section>

          {/* Libraries */}
          <motion.section
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">Libraries</h3>
            <ul className="space-y-2">
              <li><strong>NLTK:</strong> Natural language processing in Python.</li>
              <li><strong>SpaCy:</strong> Advanced NLP tasks.</li>
              <li><strong>Framer Motion:</strong> Animation library for React.</li>
            </ul>
          </motion.section>

          {/* Tools and Technologies */}
          <motion.section
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">Tools and Technologies</h3>
            <ul className="space-y-2">
              <li><strong>Git:</strong> Version control for collaborative projects.</li>
              <li><strong>Node.js:</strong> Server-side JavaScript development.</li>
              <li><strong>PostgreSQL:</strong> Relational database management.</li>
              <li><strong>Heroku:</strong> Deployment for web applications.</li>
              <li><strong>VS Code:</strong> Preferred IDE for coding and debugging.</li>
              <li><strong>API:</strong> Protocols for software communication.</li>
            </ul>
          </motion.section>
        </motion.div>

        {/* Highlighted Projects */}
        <motion.section
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-blue-300 mb-6">Highlighted Projects</h3>
          <p className="text-blue-100 mb-8">
            Discover some of the key projects where I applied the above technologies.
          </p>

          {/* Project Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Project 1 */}
            <motion.div
              className="bg-blue-800 p-6 rounded-lg shadow-lg hover:bg-blue-900 transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold text-blue-200">Twin Cities Weather and Tourism Web Application</h4>
              <p className="text-blue-100 mt-2"><strong>Technologies:</strong> PHP, JavaScript, HTML, CSS</p>
              <p className="text-blue-100 mt-2"><strong>Description:</strong> A comprehensive application integrating maps and live weather to enhance tourist experiences.</p>
              <a
                href="http://mohamedali5981.000.pe/index.php?city=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 mt-2 inline-block hover:underline"
              >
                View Live
              </a>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="bg-blue-800 p-6 rounded-lg shadow-lg hover:bg-blue-900 transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold text-blue-200">UWE Chatbot</h4>
              <p className="text-blue-100 mt-2"><strong>Technologies:</strong> Python, Flask, HTML, CSS</p>
              <p className="text-blue-100 mt-2"><strong>Description:</strong> An intelligent chatbot for university students to get quick answers to their queries.</p>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TechStack;
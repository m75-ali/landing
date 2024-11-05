// About.js
import React from 'react';
import { motion } from 'framer-motion';
import NavBar from './NavBar';
import Footer from './Footer';
import BackgroundAnimation from './BackgroundAnimation';

const About = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Navbar */}
      <NavBar />

      {/* About Section */}
      <motion.main
        className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-12 text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Introduction Section */}
        <motion.section
          className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="md:flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-300">About Me</h2>
            <p className="text-gray-200 mt-4 text-sm sm:text-base">
              Hello! I’m Mohamed Ali, a developer passionate about building modern, scalable applications. My journey started with curiosity, and today, I specialize in full-stack development. With a focus on clean code and efficient solutions, I’ve built projects across different technologies.
            </p>
            <p className="text-gray-200 mt-2 text-sm sm:text-base">
              From working on web platforms to learning about the latest technologies, I’m constantly looking to grow as a developer. Let’s connect and explore how we can collaborate!
            </p>
          </div>
          <motion.div
            className="md:flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <img src="/Images/mohamed.jpeg" alt="Mohamed Ali" className="rounded-lg shadow-lg w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 object-cover"/>
          </motion.div>
        </motion.section>

        {/* Journey Section */}
        <motion.section
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-300">My Journey</h3>
          <p className="text-gray-200 text-sm sm:text-base">
            I began my coding journey at university after developing an interest during my gap year. Over time, I became deeply interested in full-stack development, learning and working with frontend frameworks like React, backend systems like Node.js, and more in my time at university. Today, I thrive on building efficient, scalable applications and tackling complex problems.
          </p>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-300">Get in Touch</h3>
          <p className="text-gray-200 mt-2 text-sm sm:text-base">
            Want to work together or have a question?{' '}
            <a href="mailto:ali.mohamed5981@gmail.com" className="text-blue-400 hover:underline">Reach out to me</a>, and let’s collaborate on exciting projects!
          </p>
        </motion.section>
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
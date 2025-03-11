// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = () => {
  // Define animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      className="bg-white p-4 flex justify-between items-center shadow-md flex-wrap"
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.h1 
        className="text-xl font-semibold text-gray-800"
        variants={navVariants}
      >
        Mohamed Ali
      </motion.h1>
      <ul className="flex gap-4">
        <motion.li 
          variants={navVariants}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Link to="/" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">Home</Link>
        </motion.li>
        <motion.li 
          variants={navVariants}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link to="/about" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">About</Link>
        </motion.li>
        <motion.li 
          variants={navVariants}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link to="/projects" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">Projects</Link>
        </motion.li>
        <motion.li 
          variants={navVariants}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link to="/techstack" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">Tech Stack</Link>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
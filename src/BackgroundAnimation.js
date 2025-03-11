// BackgroundAnimation.js
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  const circleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.2, scale: 1.1, transition: { duration: 4, yoyo: Infinity, ease: 'easeInOut' } },
  };

  const lineVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.3, transition: { duration: 6, repeat: Infinity, repeatType: 'mirror' } },
  };

  return (
    <motion.div
      className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-gray-900 to-black"
      initial="hidden"
      animate="visible"
      style={{ overflow: 'hidden' }}
    >
      {/* Neon Glowing Circles */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-blue-500 opacity-50 filter blur-xl"
        variants={circleVariants}
        animate={{ x: [0, 250, 0], y: [0, -200, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ top: '10%', left: '15%' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-purple-500 opacity-50 filter blur-lg"
        variants={circleVariants}
        animate={{ x: [0, -300, 0], y: [0, 300, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        style={{ bottom: '15%', right: '10%' }}
      />

      {/* Animated Neon Lines */}
      <motion.div
        className="absolute h-full w-1 bg-cyan-400 opacity-30"
        variants={lineVariants}
        animate={{ x: [0, 50, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ top: 0, left: '30%' }}
      />
      <motion.div
        className="absolute h-full w-1 bg-pink-400 opacity-30"
        variants={lineVariants}
        animate={{ x: [0, -75, 75, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
        style={{ top: 0, right: '20%' }}
      />

      {/* Diagonal Neon Bars */}
      <motion.div
        className="absolute w-1 h-64 bg-teal-300 opacity-50 rotate-45 filter blur-sm"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ bottom: '20%', left: '40%' }}
      />
      <motion.div
        className="absolute w-1 h-48 bg-pink-300 opacity-50 -rotate-45 filter blur-sm"
        animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '25%', right: '35%' }}
      />
    </motion.div>
  );
};

export default BackgroundAnimation;
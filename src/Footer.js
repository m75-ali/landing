// Footer.js
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    // Define animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3, ease: 'easeInOut', duration: 0.6 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
    };

    return (
        <footer className="bg-gray-800 text-white py-6">
            <motion.div 
                className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex space-x-6">
                    <motion.a 
                        href="https://github.com/m75-ali" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-white transition-colors"
                        variants={itemVariants}
                    >
                        GitHub
                    </motion.a>
                    <motion.a 
                        href="https://www.linkedin.com/in/alimohamed5981/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-white transition-colors"
                        variants={itemVariants}
                    >
                        LinkedIn
                    </motion.a>
                    <motion.a 
                        href="mailto:ali.mohamed5981@gmail.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-white transition-colors"
                        variants={itemVariants}
                    >
                        Email
                    </motion.a>
                </div>
                <motion.p 
                    className="text-sm text-gray-400"
                    variants={itemVariants}
                >
                    &copy; 2024 Mohamed Ali. All rights reserved.
                </motion.p>
            </motion.div>
        </footer>
    );
};

export default Footer;
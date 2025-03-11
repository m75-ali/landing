import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NavBar from './NavBar';
import Footer from './Footer';
import BackgroundAnimation from './BackgroundAnimation';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <Helmet>
        <title>Home | Mohamed Ali</title>
      </Helmet>

      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <main className="hero flex-grow flex flex-col items-center justify-center px-4 md:px-8 relative z-10">
        <div className="hero-content flex flex-col items-center gap-6 sm:gap-8 text-center">
          <div className="hero-text">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
              Building modern, scalable web applications
            </h2>
            <p className="mt-4 text-base sm:text-lg text-blue-600 px-2 sm:px-6 md:px-0">
              Welcome! I'm Mohamed Ali, a developer passionate about creating clean and efficient code. Explore my work and skills below.
            </p>
            <Link
              to="/projects"
              className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
            >
              View My Work
            </Link>
          </div>
          <div className="hero-image">
            <img
              src="/Images/chen-Qtu3hGinLF8-unsplash.jpg"
              alt="Coding at Work"
              className="w-56 sm:w-72 md:w-80 lg:w-96 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
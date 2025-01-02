import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white">
      <div className="container mx-auto flex justify-between items-center p-6"> {/* Increased padding for a larger header */}
        {/* Logo */}
        <div className="flex items-start space-x-4"> {/* Increased space between logo and text */}
          <img
            src="./images/logo.png" // Replace with the actual path to your logo
            alt="Car Finder Logo"
            className="w-12 h-12" 
          />
          <div className="text-3xl font-bold"> 
            <a href="/">Car Finder</a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8"> {/* Increased spacing between links */}
          <a href="/" className="hover:underline">Home</a>
          <a href="/cars" className="hover:underline">Cars</a>
          <a href="/compare" className="hover:underline">Compare</a>
          <a href="/about" className="hover:underline">About</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl"> {/* Increased font size for the mobile menu icon */}
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;

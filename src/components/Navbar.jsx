import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 md:px-16 lg:px-24 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto py-3 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-yellow-500">Abhijeet</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {/* <a href="#home" className="hover:text-gray-400 transition">Home</a> */}
          <a href="#about" className="hover:text-gray-400 transition">About Me</a>
          <a href="#project" className="hover:text-gray-400 transition">Projects</a>
          <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
        </div>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold 
            px-5 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
        >
          Connect Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-center py-4 space-y-4">
          <a href="#home" className="block hover:text-yellow-400">Home</a>
          <a href="#about" className="block hover:text-yellow-400">About Me</a>
          <a href="#project" className="block hover:text-yellow-400">Projects</a>
          <a href="#contact" className="block hover:text-yellow-400">Contact</a>
          <a
            href="#contact"
            className="mt-4 block w-40 mx-auto bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold px-5 py-2 rounded-full text-center"
          >
            Connect Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

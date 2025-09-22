import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          {/* Brand Info */}
          <div className="flex-1 mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Abhijeet</h3>
            <p className="text-gray-400">
              Full-Stack Developer , specializing in web and
              software development.
            </p>
          </div>

          {/* Subscribe Form */}
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="abhijeetkambale548@gmail.com"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider + Bottom Section */}
        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Abhijeet. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6 my-4 md:my-0">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-sky-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-400 transition"
            >
              <FaGithub />
            </a>
          </div>

          {/* Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social-links flex gap-6 mt-4 text-3xl">
      <a
        href="https://facebook.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 hover:scale-125 hover:rotate-12 transition-transform duration-300 ease-in-out"
      >
        <FaFacebook />
      </a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 hover:scale-125 hover:rotate-12 transition-transform duration-300 ease-in-out"
      >
        <FaTwitter />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-700 hover:scale-125 hover:rotate-12 transition-transform duration-300 ease-in-out"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-900 hover:scale-125 hover:rotate-12 transition-transform duration-300 ease-in-out"
      >
        <FaGithub />
      </a>
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500 hover:scale-125 hover:rotate-12 transition-transform duration-300 ease-in-out"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialLinks;

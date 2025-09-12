import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../Pages/Themeswitcher.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Set a default theme if none is active
    if (!document.documentElement.getAttribute("data-theme")) {
      document.documentElement.setAttribute("data-theme", "light");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold underline"
      : "text-base-content hover:text-secondary transition-colors";

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div>
      {/* NAVBAR */}
      <div
        className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-base-100/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        {/* Left Section */}
        <div className="navbar-start">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost text-base-content"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold tracking-widest text-primary"
          >
            PINGAIL
          </NavLink>
        </div>

        {/* Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 italic">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/works" className={navLinkClass}>
                Works
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end space-x-3">
          <ThemeSwitcher />
          <NavLink to="/contact">
            <button className="btn btn-primary">Contact Me</button>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 w-full overflow-hidden bg-base-100/95 backdrop-blur-md shadow-xl z-40 transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="menu menu-vertical p-3 space-y-2">
          <li>
            <NavLink to="/" className={navLinkClass} onClick={handleLinkClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={handleLinkClick}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={navLinkClass}
              onClick={handleLinkClick}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/works"
              className={navLinkClass}
              onClick={handleLinkClick}
            >
              Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// components/Navbar.js
import React, { useState } from "react";
import portfolioData from "../config/portfolioData.json";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
    { name: "Honors", href: "#honors-and-awards" },
    { name: "Certifications", href: "#certifications" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 shadow-md font-['Inter'] ${
        theme === "dark" ? "bg-[#071426] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <div className="flex items-center space-x-2">
            <div className="bg-[#2563eb] rounded-sm p-1 w-6 h-6 flex items-center justify-center">
              <span className="text-white font-bold text-xs">
                {portfolioData.name[0]}
              </span>
            </div>
            <span className="font-semibold text-lg select-none">
              {portfolioData.logo}
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wider">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 ${
                  theme === "dark"
                    ? "hover:text-[#5ea6ff]"
                    : "hover:text-blue-600"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
    onClick={toggleTheme}
    className="relative w-16 h-8 flex items-center rounded-full px-1 transition-colors duration-300
      bg-blue-200 dark:bg-[#5ea6ff]"
  >
    {/* Sliding circle */}
    <span
      className={`absolute w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
        ${theme === "dark" ? "translate-x-8 bg-white" : "translate-x-0 bg-yellow-400"}`}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </span>
  </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`px-2 py-1 rounded-md font-semibold transition ${
                theme === "dark"
                  ? "bg-[#5ea6ff] text-white hover:bg-[#1e40af]"
                  : "bg-blue-200 text-blue-900 hover:bg-blue-300"
              }`}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none text-2xl ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden border-t transition-colors duration-300 ${
            theme === "dark" ? "bg-[#071426] border-white/20" : "bg-white border-gray-200"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-3 transition-colors duration-300 ${
                theme === "dark"
                  ? "text-white hover:text-[#5ea6ff]"
                  : "text-gray-900 hover:text-blue-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

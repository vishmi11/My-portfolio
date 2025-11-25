import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import portfolioData from "../config/portfolioData.json";

const Certifications = ({ theme }) => {
  const certifications = portfolioData.certifications || [];

  return (
    <section
      className={`min-h-screen w-full flex items-center justify-center p-6 font-['Inter'] 
        ${theme === "dark" ? "bg-gradient-to-r from-[#0a1e38] to-[#0a1a2e]" : "bg-gradient-to-r from-blue-200 to-blue-100"}`}
    >
      <div className="max-w-4xl w-full space-y-6">
        <div className="text-center mb-6">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className={`text-xs font-semibold mb-2 tracking-widest inline-block px-3 py-1 rounded-md max-w-max
            ${theme === "dark" ? "bg-[#1E3A8A] text-white" : "bg-blue-300 text-blue-900"}`}
          >
            CERTIFICATIONS
          </motion.p>
          <h2 className={`font-extrabold text-lg md:text-xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            CREDENTIALS
          </h2>
        </div>

        {certifications.length > 0 ? (
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex items-center p-4 rounded-xl shadow-md transition-transform 
                  ${theme === "dark" ? "bg-white/10 text-white hover:bg-white/20" : "bg-white/80 text-gray-900 hover:bg-blue-50"} 
                  hover:scale-105 hover:shadow-lg`}
              >
                {/* Logo */}
                <img
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  className="w-16 h-16 rounded-md mr-4 flex-shrink-0"
                />

                {/* Certification Info */}
                <div className="flex-1">
                  <h3 className={`font-semibold text-lg ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
                    {cert.title}
                  </h3>
                  <p className="text-sm">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">{cert.date}</p>
                </div>

                {/* View Credential Button */}
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-colors
                    ${theme === "dark" ? "bg-white/20 hover:bg-blue-500 text-white" : "bg-blue-200 hover:bg-blue-500 text-blue-900"}`}
                >
                  <FiExternalLink className="w-3 h-3" />
                  View Credential
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className={`text-center ${theme === "dark" ? "text-white/70" : "text-gray-700"}`}>No certifications added yet.</p>
        )}
      </div>
    </section>
  );
};

export default Certifications;

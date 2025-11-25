import React from "react";
import { motion } from "framer-motion";
import portfolioData from "../config/portfolioData.json";

const HonorsAndAwards = ({ theme }) => {
  const awards = portfolioData.honors || [];

  return (
    <section
      className={`min-h-screen w-full flex items-center justify-center p-6 font-['Inter'] 
        ${theme === "dark" ? "bg-gradient-to-r from-[#0a1e38] to-[#0a1a2e]" : "bg-gradient-to-r from-blue-200 to-blue-100"}`}
    >
      <div className="max-w-7xl w-full space-y-6">
        {/* Header */}
        <div className="text-center mb-6">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className={`text-xs font-semibold mb-2 tracking-widest inline-block px-3 py-1 rounded-md max-w-max
            ${theme === "dark" ? "bg-[#1E3A8A] text-white" : "bg-blue-300 text-blue-900"}`}
          >
            HONORS & AWARDS
          </motion.p>
          <h2 className={`font-extrabold text-lg md:text-xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            RECOGNITIONS
          </h2>
        </div>

        {awards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: theme === "dark" ? "0 0 15px #1E3A8A" : "0 0 15px #3B82F6" }}
                className={`p-6 rounded-xl shadow-md flex items-start gap-4 transition-transform
                  ${theme === "dark" ? "bg-white/10 text-white" : "bg-white/80 text-gray-900"}`}
              >
                {/* Logo */}
                {award.logo && (
                  <img
                    src={award.logo}
                    alt={`${award.title} logo`}
                    className="w-12 h-12 object-contain rounded-md flex-shrink-0"
                  />
                )}

                {/* Text Content */}
                <div className="flex flex-col">
                  <h3 className={`font-semibold text-lg mb-1 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
                    {award.title}
                  </h3>
                  <p className="text-sm md:text-base mb-1">{award.date}</p>
                  <p className="text-xs md:text-sm">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className={`text-center ${theme === "dark" ? "text-white/70" : "text-gray-700"}`}>No awards added yet.</p>
        )}
      </div>
    </section>
  );
};

export default HonorsAndAwards;

import React from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaCss3Alt,
    FaJsSquare,
    FaGitAlt,
} from "react-icons/fa";
import portfolioData from "../config/portfolioData.json";

// Map skill names to icons
const skillIcons = {
    React: FaReact,
    "Node.js": FaNodeJs,
    MongoDB: FaDatabase,
    CSS: FaCss3Alt,
    JavaScript: FaJsSquare,
    Git: FaGitAlt,
};

// Map levels to percentages
const levelPercent = {
    Beginner: 40,
    Intermediate: 70,
    Advanced: 100,
};

const Skills = ({ theme }) => {
    return (
        <section
            className={`min-h-screen w-full flex items-center justify-center p-6 font-['Inter'] 
        ${theme === "dark" ? "bg-gradient-to-r from-[#0a1e38] to-[#0a1a2e]" : "bg-gradient-to-r from-blue-200 to-blue-100"}`}
        >
            <div className="max-w-7xl w-full">
                {/* Header */}
                <div className="mb-6">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className={`text-xs font-semibold mb-2 tracking-widest inline-block px-3 py-1 rounded-md max-w-max
    ${theme === "dark" ? "bg-[#1E3A8A] text-white" : "bg-blue-300 text-blue-900"}`}
                    >
                        MY EXPERTISE
                    </motion.p>
                    <h2 className={`font-extrabold text-lg md:text-xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        SKILLS
                    </h2>
                </div>

                {/* Skills by Category */}
                <div className="space-y-10">
                    {Object.entries(portfolioData.skills).map(([category, skills], idx) => (
                        <div key={idx}>
                            {/* Category Header */}
                            <h3 className={`font-bold text-lg mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                                {category}
                            </h3>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                {skills.map(({ name, level }, idx2) => {
                                    const IconComponent = skillIcons[name] || FaGitAlt;
                                    const percent = levelPercent[level] || 0;

                                    return (
                                        <div
                                            key={idx2}
                                            className={`rounded-lg shadow-md p-6 flex flex-col items-center transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg cursor-pointer
                    ${theme === "dark" ? "bg-white/10 text-white" : "bg-white/80 text-gray-900"}`}
                                        >
                                            <IconComponent
                                                className={`text-6xl mb-4 transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                                            />
                                            <h4 className={`font-semibold text-lg mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                                                {name}
                                            </h4>

                                            <div className={`w-full rounded-full h-4 ${theme === "dark" ? "bg-white/20" : "bg-gray-300"}`}>
                                                <div
                                                    className={`h-4 rounded-full transition-all ${theme === "dark" ? "bg-blue-500" : "bg-blue-600"}`}
                                                    style={{ width: `${percent}%` }}
                                                />
                                            </div>

                                            <p className={`mt-2 text-xs ${theme === "dark" ? "text-white/70" : "text-gray-700"}`}>
                                                {level} - {percent}%
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

import React from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaCss3Alt,
    FaJsSquare,
    FaGitAlt,
    FaHtml5,
    FaAws,
    FaCloud,
} from "react-icons/fa";
import { SiTailwindcss, SiKotlin, SiFigma, SiPython, SiR, SiCplusplus } from "react-icons/si";
import portfolioData from "../config/portfolioData.json";

// Map skill names to icons
const skillIcons = {
    React: FaReact,
    "Node.js": FaNodeJs,
    MongoDB: FaDatabase,
    CSS: FaCss3Alt,
    JavaScript: FaJsSquare,
    Git: FaGitAlt,
    HTML: FaHtml5,
    TailwindCSS: SiTailwindcss,
    "Next.js": FaNodeJs,
    Kotlin: SiKotlin,
    Figma: SiFigma,
    AWS: FaAws,
    "Microsoft Azure": FaCloud,
    Python: SiPython,
    R: SiR,
    Java: FaJsSquare,
    "C++": SiCplusplus,
};

const Skills = ({ theme }) => {
    return (
        <section
            className={`min-h-screen w-full flex items-center justify-center p-6 font-['Inter'] 
        ${theme === "dark" ? "bg-gradient-to-r from-[#0a1e38] to-[#0a1a2e]" : "bg-gradient-to-r from-blue-200 to-blue-100"}`}
        >
            <div className="max-w-7xl w-full space-y-8">

                {/* Header */}
                <div className="mb-6 text-center">
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

                {/* Skill Categories in 2-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.keys(portfolioData.skills || {}).length > 0 ? (
                        Object.entries(portfolioData.skills).map(([category, skills], idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className={`p-6 rounded-xl shadow-md 
                                ${theme === "dark" ? "bg-white/10 text-white" : "bg-white/80 text-gray-900"} hover:scale-105 hover:shadow-lg transition-transform`}
                            >
                                {/* Category Title */}
                                <h3 className={`font-bold text-lg mb-4 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
                                    {category}
                                </h3>

                                {/* Skills List */}
                                <div className="flex flex-wrap gap-6">
                                    {skills.map(({ name }) => {
                                        const Icon = skillIcons[name] || FaGitAlt;
                                        return (
                                            <div key={name} className="flex items-center gap-2 text-sm md:text-base">
                                                <Icon className="text-xl md:text-2xl" />
                                                <span>{name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className={`text-center ${theme === "dark" ? "text-white/70" : "text-gray-700"}`}>
                            No skills added yet.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;

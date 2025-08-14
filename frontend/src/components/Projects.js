import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import portfolioData from "../config/portfolioData.json";
import { motion } from "framer-motion";

const Projects = ({ theme }) => {
    const [filter, setFilter] = useState("All");

    // Get unique tech stack values for filter buttons
    const allTechs = [
        "All",
        ...new Set(portfolioData.projects.flatMap((project) => project.techStack || [])),
    ];

    const filteredProjects =
        filter === "All"
            ? portfolioData.projects
            : portfolioData.projects.filter(
                (project) => project.techStack && project.techStack.includes(filter)
            );

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
                        MY WORK
                    </motion.p>
                    <h2 className={`font-extrabold text-lg md:text-xl mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        RECENT PROJECTS
                    </h2>

                    {/* Filter Nav Bar */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {allTechs.map((tech) => (
                            <button
                                key={tech}
                                onClick={() => setFilter(tech)}
                                className={`px-4 py-2 text-xs font-semibold rounded-full transition ${filter === tech
                                    ? theme === "dark"
                                        ? "bg-blue-600 text-white"
                                        : "bg-blue-600 text-white"
                                    : theme === "dark"
                                        ? "bg-white/20 text-white hover:bg-white/30"
                                        : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                                    }`}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`rounded-lg p-4 flex flex-col backdrop-blur-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20
        ${theme === "dark" ? "bg-white/10 text-white hover:bg-white/20" : "bg-white/80 text-gray-900 hover:bg-white"}
      `}
                        >
                            {/* Project Image */}
                            <img
                                src={project.image || "https://via.placeholder.com/400x200"}
                                alt={project.title}
                                className="rounded-md mb-4 w-full object-cover transition-transform duration-300 hover:scale-105"
                                height={200}
                                width={400}
                            />

                            {/* Project Title */}
                            <h3
                                className={`text-sm font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"
                                    }`}
                            >
                                {project.title}
                            </h3>

                            {/* Project Description or tech stack */}
                            <p
                                className={`text-xs mb-3 ${theme === "dark" ? "text-white/80" : "text-gray-700"
                                    }`}
                            >
                                {project.description ||
                                    (project.techStack && project.techStack.join(", "))}
                            </p>

                            {/* Next button */}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View project: ${project.title}`}
                                    className={`ml-auto mt-auto flex items-center justify-center w-8 h-8 rounded-full transition
            ${theme === "dark"
                                            ? "bg-blue-600 text-white hover:bg-blue-700"
                                            : "bg-blue-500 text-white hover:bg-blue-600"
                                        }`}
                                >
                                    <FaArrowRight />
                                </a>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;

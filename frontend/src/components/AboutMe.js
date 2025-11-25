import React from "react";
import { FaArrowRight, FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import portfolioData from "../config/portfolioData.json";
import { motion } from "framer-motion";

const AboutMe = ({ theme }) => {
    return (
        <section
            className={`min-h-screen w-full flex items-center justify-center p-6 font-['Inter'] 
        ${theme === "dark" ? "bg-[#071426] text-white" : "bg-white text-gray-900"}`}
        >
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">

                {/* Profile Image */}
                <div
                    className="relative rounded-2xl overflow-hidden w-1/3 max-w-[320px] md:max-w-[360px] flex-shrink-0"
                    style={{ flex: 1 }}
                >
                    <img
                        src={portfolioData.avatar || "/default-avatar.png"}
                        alt={`${portfolioData.name} profile`}
                        className="w-full h-auto rounded-2xl object-cover"
                    />
                    <div
                        aria-hidden="true"
                        className={`absolute -bottom-16 -left-16 w-40 h-40 rounded-full opacity-40 
              ${theme === "dark" ? "border-[#2f4f6f]" : "border-gray-300"}`}
                        style={{ boxShadow: theme === "dark" ? "0 0 0 2px #2f4f6f inset" : "0 0 0 2px #ccc inset" }}
                    />
                    <div
                        aria-hidden="true"
                        className={`absolute top-12 right-0 w-28 h-28 rounded-full opacity-40 
              ${theme === "dark" ? "border-[#2f4f6f]" : "border-gray-300"}`}
                        style={{ boxShadow: theme === "dark" ? "0 0 0 2px #2f4f6f inset" : "0 0 0 2px #ccc inset" }}
                    />
                </div>

                {/* Text Content */}
                <div className="flex flex-col w-full" style={{ flex: 2 }}>
                    {/* ABOUT ME title */}
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className={`text-xs font-semibold mb-2 tracking-widest inline-block px-3 py-1 rounded-md max-w-max
    ${theme === "dark" ? "bg-[#1E3A8A] text-white" : "bg-blue-200 text-blue-900"}`}
                    >
                        ABOUT ME
                    </motion.span>

                    <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
                        <span className={theme === "dark" ? "text-[#5ea6ff]" : "text-blue-600"}>
                            {portfolioData.aboutme || "Passionate about Data Science and Development"}
                        </span>
                    </h1>


                    <p className={`text-xs md:text-sm mt-4 leading-relaxed max-w-md
            ${theme === "dark" ? "text-[#a0b0c2]" : "text-gray-700"}`}
                    >
                        {portfolioData["long bio"] ||
                            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-3 mt-6 max-w-md">
                        {[
                            { label: "Projects Completed", value: portfolioData.projects.length },
                            { label: "Research Projects", value: portfolioData.noResearchProjects || 0 },
                            { label: "Years Learning", value: portfolioData.yearsLearning || 1 },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className={`rounded-md px-4 py-2 text-xs md:text-sm flex flex-col items-center justify-center w-24 md:w-28
                  ${theme === "dark" ? "bg-[#0f1f34] text-white" : "bg-gray-100 text-gray-900"}`}
                            >
                                <span className="font-semibold">{stat.value}+</span>
                                <span className={theme === "dark" ? "text-[#a0b0c2]" : "text-gray-600"}>
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Get In Touch + Icons */}
                    <div className="mt-8 flex items-center gap-6">
                        <a
                            href={`mailto:${portfolioData.contact.email}`}
                            className={`rounded-full px-6 py-2 text-sm md:text-base font-semibold flex items-center gap-2 transition
                ${theme === "dark" ? "bg-[#2f7fff] hover:bg-[#1a5de8] text-white" : "bg-blue-200 hover:bg-blue-300 text-blue-900"}`}
                        >
                            GET IN TOUCH
                            <FaArrowRight />
                        </a>

                        <div className="flex items-center gap-4 text-lg">
                            {/* Email icon */}
                            <a
                                href={`mailto:${portfolioData.contact.email}`}
                                aria-label="Send Email"
                                className={`flex items-center justify-center rounded-full w-9 h-9 transition
                  ${theme === "dark" ? "bg-[#2f7fff] hover:bg-[#1a5de8] text-white" : "bg-blue-200 hover:bg-blue-300 text-blue-900"}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaEnvelope />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={portfolioData.contact.linkedin}
                                aria-label="LinkedIn Profile"
                                className={`flex items-center justify-center rounded-full w-9 h-9 transition
                  ${theme === "dark" ? "bg-[#005983] hover:bg-[#0077b6] text-white" : "bg-blue-100 hover:bg-blue-300 text-blue-900"}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                            </a>

                            {/* Phone */}
                            <a
                                href={`tel:${portfolioData.contact.phone}`}
                                aria-label="Call Phone"
                                className={`flex items-center justify-center rounded-full w-9 h-9 transition
                  ${theme === "dark" ? "bg-[#1a3e6c] hover:bg-[#2f7fff] text-white" : "bg-gray-200 hover:bg-blue-300 text-blue-900"}`}
                            >
                                <FaPhone />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

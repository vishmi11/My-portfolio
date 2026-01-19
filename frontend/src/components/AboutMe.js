import React from "react";
import { FaArrowRight, FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import portfolioData from "../config/portfolioData.json";
import { motion } from "framer-motion";

const AboutMe = ({ theme }) => {
    // Animation variants ---------------------------------------
    const containerVariant = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const statsContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const statsItem = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section
            className={`min-h-screen w-full flex items-center justify-center p-6 font-['Inter'] 
                ${theme === "dark" ? "bg-[#071426] text-white" : "bg-white text-gray-900"}`}
        >
            {/* Whole Section Animation */}
            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20"
            >
                {/* Profile Image with Floating Animation */}
                <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative rounded-2xl overflow-hidden w-1/3 max-w-[320px] md:max-w-[360px] flex-shrink-0"
                    style={{ flex: 1 }}
                >
                    <img
                        src={portfolioData.avatar || "/default-avatar.png"}
                        alt={`${portfolioData.name} profile`}
                        className="w-full h-auto rounded-2xl object-cover shadow-lg"
                    />

                    {/* Background circles */}
                    <div
                        aria-hidden="true"
                        className={`absolute -bottom-16 -left-16 w-40 h-40 rounded-full opacity-40 
                        ${theme === "dark" ? "border-[#2f4f6f]" : "border-gray-300"}`}
                        style={{
                            boxShadow:
                                theme === "dark"
                                    ? "0 0 0 2px #2f4f6f inset"
                                    : "0 0 0 2px #ccc inset",
                        }}
                    />
                    <div
                        aria-hidden="true"
                        className={`absolute top-12 right-0 w-28 h-28 rounded-full opacity-40 
                        ${theme === "dark" ? "border-[#2f4f6f]" : "border-gray-300"}`}
                        style={{
                            boxShadow:
                                theme === "dark"
                                    ? "0 0 0 2px #2f4f6f inset"
                                    : "0 0 0 2px #ccc inset",
                        }}
                    />
                </motion.div>

                {/* Text Content */}
                <div className="flex flex-col w-full" style={{ flex: 2 }}>
                    {/* ABOUT ME badge */}
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

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-extrabold leading-tight"
                    >
                        <span className={theme === "dark" ? "text-[#5ea6ff]" : "text-blue-600"}>
                            {portfolioData.aboutme ||
                                "Passionate about Data Science and Development"}
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={`text-xs md:text-sm mt-4 leading-relaxed max-w-md
                            ${theme === "dark" ? "text-[#a0b0c2]" : "text-gray-700"}`}
                    >
                        {portfolioData["long bio"] ||
                            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."}
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        variants={statsContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3 mt-6 max-w-md"
                    >
                        {[
                            { label: "Projects Completed", value: portfolioData.projects.length },
                            { label: "Research Projects", value: portfolioData.noResearchProjects || 0 },
                            { label: "Years Learning", value: portfolioData.yearsLearning || 1 },
                        ].map((stat, i) => (
                            <motion.div
                                variants={statsItem}
                                key={i}
                                className={`rounded-md px-4 py-2 text-xs md:text-sm flex flex-col items-center justify-center w-24 md:w-28
                                    ${theme === "dark" ? "bg-[#0f1f34] text-white" : "bg-gray-100 text-gray-900"}`}
                            >
                                <span className="font-semibold">{stat.value}+</span>
                                <span className={theme === "dark" ? "text-[#a0b0c2]" : "text-gray-600"}>
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Contact Section */}
                    <div className="mt-8 flex items-center gap-6">
                        {/* Button */}
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={`mailto:${portfolioData.contact.email}`}
                            className={`rounded-full px-6 py-2 text-sm md:text-base font-semibold flex items-center gap-2 transition
                                ${theme === "dark" ? "bg-[#2f7fff] hover:bg-[#1a5de8] text-white" : "bg-blue-200 hover:bg-blue-300 text-blue-900"}`}
                        >
                            GET IN TOUCH
                            <FaArrowRight />
                        </motion.a>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 text-lg">
                            {/* Email */}
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                href={`mailto:${portfolioData.contact.email}`}
                                className={`flex items-center justify-center rounded-full w-9 h-9 transition
                                    ${theme === "dark" ? "bg-[#2f7fff] hover:bg-[#1a5de8] text-white" : "bg-blue-200 hover:bg-blue-300 text-blue-900"}`}
                            >
                                <FaEnvelope />
                            </motion.a>

                            {/* LinkedIn */}
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                href={portfolioData.contact.linkedin}
                                className={`flex items-center justify-center rounded-full w-9 h-9 transition
                                    ${theme === "dark" ? "bg-[#005983] hover:bg-[#0077b6] text-white" : "bg-blue-100 hover:bg-blue-300 text-blue-900"}`}
                                target="_blank"
                            >
                                <FaLinkedin />
                            </motion.a>

                            {/* Phone */}
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                href={`tel:${portfolioData.contact.phone}`}
                                className={`flex items-center justify-center rounded-full w-9 h-9 transition
                                    ${theme === "dark" ? "bg-[#1a3e6c] hover:bg-[#2f7fff] text-white" : "bg-gray-200 hover:bg-blue-300 text-blue-900"}`}
                            >
                                <FaPhone />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutMe;

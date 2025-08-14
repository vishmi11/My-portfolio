import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaGithub } from "react-icons/fa";
import portfolioData from "../config/portfolioData.json";
import { motion } from "framer-motion";

const ContactMe = ({ theme }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill out name, email, and message.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    senderEmail: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                alert(result.error || "Failed to send message");
            }
        } catch (err) {
            console.error("Error sending message:", err);
            alert("Something went wrong. Please try again later.");
        }
    };

    const bgSection = theme === "dark" ? "bg-gradient-to-r from-[#0a1e38] to-[#0a1a2e]" : "bg-gradient-to-r from-blue-200 to-blue-100";
    const textPrimary = theme === "dark" ? "text-white" : "text-gray-900";
    const textSecondary = theme === "dark" ? "text-white/80" : "text-gray-700";
    const cardBg = theme === "dark" ? "bg-white/10" : "bg-white/80";
    const inputBg = theme === "dark" ? "bg-white/20 text-white placeholder-white/70" : "bg-gray-100 text-gray-900 placeholder-gray-500";

    return (
        <section className={`${bgSection} min-h-screen w-full flex flex-col items-center justify-center p-6 font-['Inter']`}>
            <div className="max-w-4xl w-full">
                {/* Header */}
                <div className="mb-8 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className={`text-xs font-semibold mb-2 tracking-widest inline-block px-3 py-1 rounded-md max-w-max
    ${theme === "dark" ? "bg-[#1E3A8A] text-white" : "bg-blue-300 text-blue-900"}`}
                    >
                        GET IN TOUCH
                    </motion.p>
                    <h2 className={`font-extrabold text-2xl md:text-3xl ${textPrimary}`}>CONTACT ME</h2>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                    {[
                        { icon: FaEnvelope, label: "Email", value: portfolioData.contact.email, bg: "bg-blue-600", href: `mailto:${portfolioData.contact.email}` },
                        { icon: FaPhoneAlt, label: "Phone", value: portfolioData.contact.phone, bg: "bg-green-600", href: `tel:${portfolioData.contact.phone}` },
                        { icon: FaLinkedinIn, label: "LinkedIn", value: portfolioData.contact.linkedin, bg: "bg-blue-600", href: portfolioData.contact.linkedin },
                        { icon: FaGithub, label: "GitHub", value: portfolioData.contact.github, bg: "bg-gray-700", href: portfolioData.contact.github },
                    ].map(({ icon: Icon, label, value, bg, href }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                            className={`${cardBg} backdrop-blur-md rounded-lg p-6 flex items-center gap-5 hover:opacity-90 transition cursor-pointer`}>
                            <div className={`flex items-center justify-center w-12 h-12 rounded-full ${bg} text-white text-xl`}>
                                <Icon />
                            </div>
                            <div>
                                <p className={`font-semibold ${textPrimary}`}>{label}</p>
                                <p className={`${textSecondary} text-sm truncate max-w-xs`}>{value}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className={`${cardBg} backdrop-blur-md rounded-lg p-8 max-w-xl mx-auto`}>
                    {submitted && <p className="mb-4 text-green-400 font-semibold text-center">Thanks for reaching out! I'll get back to you soon.</p>}

                    {["name", "email", "subject", "message"].map((field) => (
                        <div key={field} className="mb-4">
                            <label className={`block mb-1 ${textPrimary}`} htmlFor={field}>
                                {field.charAt(0).toUpperCase() + field.slice(1)}{field !== "subject" ? " *" : ""}
                            </label>
                            {field !== "message" ? (
                                <input
                                    id={field}
                                    name={field}
                                    type={field === "email" ? "email" : "text"}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className={`w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputBg}`}
                                    placeholder={`Your ${field}`}
                                    required={field !== "subject"}
                                />
                            ) : (
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full rounded-md px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputBg}`}
                                    placeholder="Write your message here..."
                                    required
                                />
                            )}
                        </div>
                    ))}

                    <button type="submit" className={`w-full font-semibold py-3 rounded-md transition ${theme === "dark" ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"}`}>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;

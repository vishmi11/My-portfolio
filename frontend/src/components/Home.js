import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import portfolioData from '../config/portfolioData.json';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Home = ({ theme }) => {
  return (
    <section
      className={`min-h-screen w-full flex items-center justify-center p-6 font-['Inter'] 
        ${theme === 'dark' ? 'bg-gradient-to-r from-[#0a1e38] to-[#0a1a2e]' : 'bg-gradient-to-r from-blue-200 to-blue-100'}`}
    >
      <motion.div
        className={`max-w-3xl w-full backdrop-blur-md rounded-lg p-10 flex flex-col items-center text-center gap-6
          ${theme === 'dark' ? 'bg-white/10 text-white' : 'bg-white/80 text-gray-900'}`}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <span
          className={`text-xs font-semibold mb-2 tracking-widest inline-block px-3 py-1 rounded-md max-w-max
            ${theme === 'dark' ? 'bg-[#1E3A8A] text-white' : 'bg-blue-300 text-blue-900'}`}
        >
          HELLO THERE!
        </span>

        <h1 className="text-4xl font-extrabold leading-tight min-h-[4rem]">
          <motion.span
            className={theme === 'dark' ? 'text-white' : 'text-gray-900'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            I’m {portfolioData.name}
          </motion.span>
        </h1>


        <h2
          className={`text-3xl font-extrabold leading-tight
            ${theme === 'dark' ? 'text-[#1E3A8A]' : 'text-blue-600'}`}
        >
          I'M A <Typewriter
            words={portfolioData.title.map(t => t.toUpperCase())} // rotate through titles
            loop={0} // 0 for infinite loop
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
            cursor
            cursorStyle="|"
          />
        </h2>

        <p className={`text-sm max-w-md leading-relaxed ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
          {portfolioData.bio}
        </p>

        <a
          href={portfolioData.cvDownloadLink}
          download
          aria-label="Download my CV"
          className={`mt-8 rounded-full px-8 py-3 text-base font-semibold flex items-center gap-3 shadow-md transition-colors duration-300 w-max
            ${theme === 'dark' ? 'bg-[#1E90FF] hover:bg-[#1C86EE] text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        >
          DOWNLOAD CV <FaArrowRight className="text-white text-lg" />
        </a>
      </motion.div>
    </section>
  );
};

export default Home;

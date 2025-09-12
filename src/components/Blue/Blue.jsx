import React from 'react';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';

const animation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
};

const HomeTest = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const content = (
    <div className="bg-gray-100 px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl md:text-4xl font-bold text-gray-900 mb-4">
              Test your English
            </h2>
            <p className="text-lg lg:text-2xl md:text-2xl text-gray-800 leading-relaxed font-semibold">
              Try our quick, free online tests to find out what your level of English is, and which <span className="text-blue-600">SpeakUp</span>. English Qualification might be best for you. There are tests suited for every level.
            </p>
          </div>
          
          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              {/* Blue background shape */}
              <div className="relative bg-blue-600 rounded-3xl w-full h-40 sm:h-48 md:h-56 overflow-hidden shadow-xl">
                {/* Wavy pattern overlay */}
                <div className="absolute inset-0">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <pattern id="waves" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0 20 Q 10 10 20 20 T 40 20" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" fill="none"/>
                        <path d="M0 10 Q 10 0 20 10 T 40 10" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" fill="none"/>
                        <path d="M0 30 Q 10 20 20 30 T 40 30" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" fill="none"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#waves)"/>
                  </svg>
                </div>
                
                {/* Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <NavLink to={"/test"} className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200 text-sm sm:text-base md:text-lg">
                    Test Your English
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return isDesktop ? (
    <motion.div variants={animation} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {content}
    </motion.div>
  ) : (
    content
  );
};

export default HomeTest;
import React from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';

const textAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 2.5 } }
};

const dividerAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: { x: 0, opacity: 1, transition: { duration: 2.5 } }
};

const Header2 = () => {
  const isDesktop = useMediaQuery('(min-width: 400px)');

  // Условное применение свойств анимации
  const containerAnimationProps = isDesktop ? {
    initial: "hidden",
    whileInView: "visible",
    variants: dividerAnimation,
  } : {};

  const contentAnimationProps = isDesktop ? {
    variants: textAnimation,
  } : {};

  return (
    <motion.div {...containerAnimationProps} className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center mt-0 bg-blue-600 text-white h-150 shadow-lg my-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text and Button */}
        <div className="flex-1 text-center md:text-left mb-12 md:mb-0">
          <motion.h1 {...contentAnimationProps} className="text-4xl md:text-6xl font-bold leading-tight">
            Studying Online is now much easier
          </motion.h1>
          <motion.p {...contentAnimationProps} className="mt-4 text-lg md:text-xl text-gray-200">
            Speak Up is an interesting platform that will teach you in a more interactive way
          </motion.p>
          <motion.button {...contentAnimationProps} className="mt-8 px-6 py-3 bg-yellow-400 text-blue-800 font-bold rounded-full hover:bg-yellow-300 transition duration-300">
            Let's start
          </motion.button>
        </div>
        {/* Right Section - Illustration */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full max-w-2xl">
            <img
              src="/zoom.png"
              alt="Online studying illustration"
              width={800}
              height={600}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header2;
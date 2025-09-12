import React from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';

const dividerAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
    transition: { duration: 2.5 }
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2.5 }
  }
};
const downAnimation = {
  hidden: {
    opacity: 0,
    y: 150,
    transition: { duration: 1.5 }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5 }
  },
};

const AnimatedHero = ({ isDesktop }) => {
  const heroContent = (
    <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
      <div className="lg:w-1/2">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            alt="Students studying together"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <h2 className="text-2xl font-semibold text-gray-800">Online Group Courses</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            The learning experiences we create could only come from Cambridge. Our solutions for teaching and assessment are empowering millions of learners everywhere and are built on unique insights from our research, expertise and
          </p>
          <p>
            Speak Up is a quick and convenient online test to help higher education institutions and employers and groups of candidates.
          </p>
        </div>
      </div>
    </div>
  );

  return isDesktop ? (
    <motion.div variants={dividerAnimation} initial="hidden" whileInView="visible">
      {heroContent}
    </motion.div>
  ) : (
    heroContent
  );
};

const AnimatedTestimonials = ({ isDesktop }) => {
  const testimonialsHeader = (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Here's what others love about Speak Up
      </h2>
      <p className="text-gray-600 text-lg">
        Our strong community are all learning together. Here's what some of them say.....
      </p>
    </div>
  );

  const testimonialsGrid = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl p-8 shadow-lg text-center">
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>
        <blockquote className="text-gray-700 mb-6 leading-relaxed">
          "I just had a an honest to god conversation in French with a friend in Quebec! I stumbled a bit, but we only used a translator very rarely, and it's because of Speak Up!"
        </blockquote>
        <div className="text-sm text-gray-500">
          <p className="font-semibold">jack watson, <span className="font-normal">14 days</span></p>
        </div>
      </div>
      <div className="bg-white rounded-xl p-8 shadow-lg text-center">
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>
        <blockquote className="text-gray-700 mb-6 leading-relaxed">
          "I just had a an honest to god conversation in French with a friend in Quebec! I stumbled a bit, but we only used a translator very rarely, and it's because of Speak Up!"
        </blockquote>
        <div className="text-sm text-gray-500">
          <p className="font-semibold">jack watson, <span className="font-normal">14 days</span></p>
        </div>
      </div>
      <div className="bg-white rounded-xl p-8 shadow-lg text-center">
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>
        <blockquote className="text-gray-700 mb-6 leading-relaxed">
          "I just had a an honest to god conversation in French with a friend in Quebec! I stumbled a bit, but we only used a translator very rarely, and it's because of Speak Up!"
        </blockquote>
        <div className="text-sm text-gray-500">
          <p className="font-semibold">jack watson, <span className="font-normal">14 days</span></p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isDesktop ? (
        <>
          <motion.div variants={dividerAnimation} initial="hidden" whileInView="visible">
            {testimonialsHeader}
          </motion.div>
          <motion.div variants={downAnimation} initial="hidden" whileInView="visible">
            {testimonialsGrid}
          </motion.div>
        </>
      ) : (
        <>
          {testimonialsHeader}
          {testimonialsGrid}
        </>
      )}
    </>
  );
};

export default function SpeakUpLanding() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedHero isDesktop={isDesktop} />
        <AnimatedTestimonials isDesktop={isDesktop} />
      </div>
    </div>
  );
}
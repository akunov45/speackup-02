import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const HomeTest = () => {
  return (
    <header className="bg-white p-8 md:p-16 flex flex-col md:flex-row items-center justify-between container mx-auto">
      <div className="flex flex-col md:flex-row items-center w-full">
        {/* Left Section */}
        <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Test Your English</h1>
          <p className="text-gray-600 leading-relaxed max-w-lg">
            Try our quick, free online tests to find out what your level of English is, and which <span className="font-bold text-blue-500">SpeakUp English Qualification</span> might be best for you. There are tests suited for every level.
          </p>
        </div>
        
        {/* Right Section */}
        <div className="md:w-1/2 flex items-center justify-center relative">
          <div className="relative w-full max-w-md h-32 md:h-48">
            {/* Background shape */}
            <div className="absolute inset-0 bg-blue-500 rounded-lg transform skew-x-12 -rotate-3 z-0"></div>
            
            {/* Button container */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full">
              <button className="bg-white text-blue-700 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center w-full max-w-[250px] mx-auto">
                Test Your English
                <BsArrowRight className="ml-2" />
              </button>
            </div>

            {/* Blue waves */}
            <div className="absolute right-0 bottom-0 w-3/4 h-3/4 overflow-hidden z-0">
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default HomeTest;
import React from 'react';

const HomeTest = () => {
  return (
    <div className="bg-gray-100 px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-2xl sm:text-3xl md:text-4xl text-gray-800 leading-relaxed font-semibold">
              Free online tests to find out your level of English, with{' '}
              <span className="text-blue-600">SpeakUp</span>.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mt-4">
              There are tests suited for every level.
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
                  <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200 text-sm sm:text-base md:text-lg">
                    Test Your English
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTest;
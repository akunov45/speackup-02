import React from 'react';



const Header2 = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center mt-0 bg-blue-600 text-white h-150 shadow-lg my-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text and Button */}
        <div className="flex-1 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Studying Online is now much easier
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Speak Up is an interesting platform that will teach you in more an interactive way
          </p>
          <button className="mt-8 px-6 py-3 bg-yellow-400 text-blue-800 font-bold rounded-full hover:bg-yellow-300 transition duration-300">
            Let's start
          </button>
        </div>  
        {/* Right Section - Illustration */}
        <div className="flex-1 flex justify-center md:justify-end">
          {/* Replace this div with your actual image component */}
          {/* <Image src="/path/to/your/image.png" alt="Online studying illustration" width={800} height={600} layout="responsive" /> */}
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
    </div>
  );
};

export default Header2;
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-gray-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Column 1: Mission Statement & Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <p className="max-w-xs text-base md:text-lg mb-4">
              Fluency is nothing more than mastering the 100 most important real-life conversations.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Pinterest" className="text-gray-300 hover:text-white transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16c-2.76 0-5-2.24-5-5s2.24-5 5-5a5 5 0 010 10zM12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                  <path d="M17 12c0-2.76-2.24-5-5-5a5 5 0 00-5 5c0 2.76 2.24 5 5 5s5-2.24 5-5z"></path>
                  <path d="M12 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Courses */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-xl mb-4">Speak Up Courses</h3>
            <ul className="space-y-3 text-base md:text-lg">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Learn English</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Learn Turkish</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Learn French</a></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-xl mb-4">Products</h3>
            <ul className="space-y-3 text-base md:text-lg">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Landing Page</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-xl mb-4">Contact Information</h3>
            <ul className="space-y-3 text-base md:text-lg">
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2.02A19.79 19.79 0 018.64 12.36 19.79 19.79 0 012 2.84 2 2 0 012.02 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L5.5 11.21a10 10 0 005.79 5.79l1.47-1.47a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg>
                <span>+34933478486</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>info@speakup.we</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="3"></circle></svg>
                <span>Barcelona, C/ de Sardenya</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-2 md:mb-0">
            © 2023 SpeakUp. All Rights Reserved.
          </div> 
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-200">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
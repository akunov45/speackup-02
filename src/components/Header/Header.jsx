import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa6";


const menu = [
  { name: 'Home', href: '/',},
  { name: 'Courses', href: '#', },
  { name: 'Contact us', href: '#',},
  { name: 'About us', href: '#', },
];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-blue-600">
               <img className="w-[188px]" src="/logo.png" alt="" />
              </a>
            </div>
            {/* Desktop Navigation Links */}
            <div className="hidden md:block ml-10 flex items-center justify-center ">
              <div className="ml-10 flex items-baseline space-x-4">
                {menu.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            {/* User Icon and Language Switch */}
            <div className="flex-shrink-0 ">
              <button className="p-1 rounded-full text-gray-900 hover:text-black-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ">
              <FaRegUser />

              </button>
            </div>
            <div className="ml-3 relative">
              <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option>EN</option>
                <option>ES</option>
                <option>FR</option>       
              </select>
            </div> 
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="bg-gray-100 text-blue-600 block px-3 py-2 rounded-md font-medium"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-900 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md font-medium"
            >
              Courses
            </a>
            <a
              href="#"
              className="text-gray-900 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md font-medium"
            >
              Contact us
            </a>
            <a
              href="#"
              className="text-gray-900 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md font-medium"
            >
              About us
            </a>
          </div>
        </div>
      )}
      {/* Promotion Bar */}
      <div className="bg-blue-900 text-yellow-400 text-center py-2 px-4">
        Get 50% off SpeakUp Premium & unlock new language superpowers!
      </div>
    </nav>
  );
};

export default Header;
import React, { useState, useRef, useEffect } from 'react';
import { FaRegUser } from "react-icons/fa6";
import { NavLink } from 'react-router';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CompactLanguageSelect = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const languages = [
    { id: 1, code: 'EN', value: 'en', name: 'English', flag: '🇺🇸' },
    { id: 2, code: 'FR', value: 'fr', name: 'France', flag: '🇫🇷' },
    { id: 3, code: 'TR', value: 'tr', name: 'Türkiye', flag: '🇹🇷' },
    { id: 4, code: 'DE', value: 'de', name: 'German', flag: '🇩🇪' }
  ];

  // Найти текущий выбранный язык
  const getCurrentLanguage = () => {
    const currentLang = languages.find(lang => lang.value === i18n.language);
    return currentLang || languages[0]; // По умолчанию английский
  };

  const [selectedLanguage, setSelectedLanguage] = useState(getCurrentLanguage());

  // Обновить селект при изменении языка извне
  useEffect(() => {
    setSelectedLanguage(getCurrentLanguage());
  }, [i18n.language]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Изменить язык в i18next
    i18n.changeLanguage(language.value);
  };

  return (
    <div className="relative" ref={selectRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 text-gray-700 hover:text-gray-900 transition-colors"
      >
        <span className="font-medium text-sm">{selectedLanguage.code}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => handleSelect(language)}
              className={`w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm ${
                selectedLanguage.value === language.value ? 'bg-blue-50 text-blue-700' : ''
              }`}
            >
              <span>{language.flag}</span>
              <span className="text-gray-700">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Меню с переводами
  const menu = [
    { name: t('Home'), href: '/'},
    { name: t('Courses'), href: '/courses'},
    { name: t('Contacts'), href: '/contact'},
    { name: t('About us'), href: '/about'},
  ];

  return (
    <nav className="container mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 mr-60">
              <a href="/" className="text-2xl font-bold text-blue-600">
                <img className="w-[188px]" src="/logo.png" alt="SpeakUp Logo" />
              </a>
            </div>
            {/* Desktop Navigation Links */}
            <div className="hidden md:block ml-10 flex items-center justify-center">
              <div className=" flex items-baseline space-x-4">
                {menu.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.href}
                    className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md font-medium text-2xl"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            {/* User Icon and Language Switch */}
            <div className="flex-shrink-0">
              <NavLink 
                to="/signup" 
                className="p-1 rounded-full text-gray-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <FaRegUser />
              </NavLink>
            </div>
            <div className="ml-3 relative">
              <CompactLanguageSelect />
            </div> 
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
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
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menu.map((item, index) => (
              <NavLink
                key={index}
                to={item.href}
                className="text-gray-900 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md font-medium"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
      {/* Promotion Bar */}
      <div className="bg-blue-900 text-yellow-400 text-center font-bold py-2">
        {t('Get 50% off SpeakUp Premium & unlock new language superpowers!')}
      </div>
    </nav>
  );
};

export default Header;
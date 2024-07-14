"use client"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import LoginButton from './LoginButton';

export default function Menu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <div className={`bg-main-color h-24 flex items-center text-white fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <nav className="container mx-auto p-4 flex items-center justify-between">
        {/* Logo or Site Name */}
        <div>
          <a href="/">
            <Image 
              src="https://i.ibb.co/Krrpxjs/DALLE-2023-12-23-22-57-32-Anime-style-character-with-long-blonde-hair-and-bright-blue-eyes-She-wears.png"
              alt="Logo"
              width={96} // Defina a largura da imagem
              height={96} // Defina a altura da imagem
              className='w-12 rounded-full'
            />
          </a>
        </div>
        {/* Hamburger Menu Icon for Mobile */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Menu Links */}
        <ul className={`lg:flex lg:space-x-8 ${isOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-16 left-0 w-full lg:w-auto bg-main-color lg:bg-transparent lg:top-0 p-4 lg:p-0 transition-transform duration-300`}>
          <li className="text-center lg:text-left">
            <a
              href="/"
              className={`block lg:inline hover:text-gray-400 transition-colors duration-300 ${
                isActive('/') ? 'border-b-2 border-red-500' : ''
              }`}
            >
              Home
            </a>
          </li>
          <li className="text-center lg:text-left">
            <a
              href="/statistics"
              className={`block lg:inline hover:text-gray-400 hover:border-b-2 border-red-500 transition-colors duration-300 ${
                isActive('/statistics') ? 'border-b-2 border-red-500' : ''
              }`}
            >
              Statistics
            </a>
          </li>
          <li className="text-center lg:text-left">
            <a
              href="/leaderboards"
              className={`block lg:inline hover:text-gray-400 hover:border-b-2 border-red-500 transition-colors duration-300 ${
                isActive('/leaderboards') ? 'border-b-2 border-red-500' : ''
              }`}
            >
              Leaderboards
            </a>
          </li>
          <li className="text-center lg:text-left">
            <a
              href="/tierlist"
              className={`block lg:inline hover:text-gray-400 hover:border-b-2 border-red-500 transition-colors duration-300 ${
                isActive('/tierlist') ? 'border-b-2 border-red-500' : ''
              }`}
            >
              Tier List
            </a>
          </li>
          <li className="text-center lg:text-left">
            <a
              href="/updates"
              className={`block lg:inline hover:text-gray-400 hover:border-b-2 border-red-500 transition-colors duration-300 ${
                isActive('/updates') ? 'border-b-2 border-red-500' : ''
              }`}
            >
              Updates
            </a>
          </li>
        </ul>
        {/* Register Button */}
        <div className="hidden lg:flex">
          <LoginButton />
        </div>
      </nav>
      {/* Mobile Register Button */}
      {isOpen && (
        <div className="lg:hidden p-4 text-center">
          <LoginButton />
        </div>
      )}
    </div>
  );
}

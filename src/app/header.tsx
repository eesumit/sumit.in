'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface MenuItem {
  name: string;
  path: string;
}

const Header: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchFocused, setSearchFocused] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    { name: 'Me', path: '/' },
    { name: 'Tech-Writings', path: '/tech-writings' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) =>
    pathname === path ||
    (path !== '/' && pathname.startsWith(path + '/')) ||
    (pathname === '/' && path === '/');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const shouldScroll = window.scrollY > 10;
        setScrolled(shouldScroll);
        if (shouldScroll && menuOpen) {
          setMenuOpen(false); // close menu if user scrolls
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  return (
    <div className="w-full fixed top-0 z-50 py-2">
      {/* Wrapper */}
      <div className="relative w-full h-16 flex items-center">

        {/* Animated Header in center */}
        <AnimatePresence mode="wait">
          {(!scrolled || menuOpen) && (
            <motion.div
              key="main-header"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute left-1/2 transform -translate-x-1/2 bg-[#2e2d2d] rounded-lg h-14 w-[90%] md:w-[70%] flex items-center justify-between px-6 md:px-10"
            >
              {/* Logo */}
              <div className="flex items-center">
                <span className="text-white font-bold text-xl md:text-2xl cursor-pointer">
                  {'SUMIT'.split('').map((char, idx) => (
                    <span key={idx} className="hover:text-orange-500">{char}</span>
                  ))}
                </span>
              </div>

              {/* Navigation */}
              <div className="hidden md:flex space-x-8 h-full items-center">
                {menuItems.map((item) => (
                  <div
                    key={`menu-${item.name}`}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <a
                      href={item.path}
                      className={`font-medium relative ${isActive(item.path) ? 'text-white' : 'text-[#a8a5a5]'}`}
                    >
                      {item.name}
                      <AnimatePresence>
                        {(hoveredItem === item.name || isActive(item.path)) && (
                          <motion.div
                            className="absolute bottom-1 left-0 w-full h-[1px] bg-gray-200"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ originX: 0 }}
                          />
                        )}
                      </AnimatePresence>
                    </a>
                  </div>
                ))}
              </div>

              {/* Search */}
              <motion.div
                className="relative hidden sm:flex"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`flex items-center rounded-sm transition-all duration-300 ${searchFocused ? 'bg-white bg-opacity-90' : 'bg-white bg-opacity-70'}`}>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    className="w-32 md:w-40 px-4 py-1 bg-transparent outline-none text-[#3C3C3C] placeholder-[#3C3C3C] placeholder-opacity-70 rounded-l-sm"
                  />
                  <motion.button
                    className="px-3 py-1 text-[#2b793a] rounded-r-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#3C3C3C]"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hamburger Icon on right */}
        {scrolled && (
          <motion.div
            key="hamburger"
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 cursor-pointer bg-[#2e2d2d] rounded-lg p-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <div className="flex flex-col space-y-1">
              <motion.div
                className="w-6 h-0.5 bg-white rounded"
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-6 h-0.5 bg-white rounded"
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Header;

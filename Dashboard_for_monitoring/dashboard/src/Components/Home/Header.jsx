import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';  // Import Framer Motion components
import logo from '/eclipse.svg';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header className="font-medium font-poppins text-white fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] bg-white/10 rounded-3xl shadow-xl drop-shadow-2xl transition-all duration-300">
            <nav className="flex justify-between items-center w-[92%] mx-auto my-2 text-white">
                {/* Hamburger Icon */}
                <div
                    onClick={toggleMenu}
                    className="text-xl text-gray-800 cursor-pointer md:hidden"
                >
                    {isMenuOpen ? '✖' : '☰'}
                </div>

                {/* Logo */}
                <div className='md:static'>
                    <motion.img 
                        className="h-18 w-28"
                        src={logo} 
                        alt="Logo" 
                        initial={{ opacity: 0, y: -20 }}  // Slide in effect
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6 }}
                    />
                </div>

                {/* Nav Links for larger screens */}
                <div className="flex-row text-white items-center hidden space-x-4 md:flex">
                    <ul className="flex text-white flex-row space-x-4">
                        {['Home', 'About Us', 'Our Projects', 'Services', 'Contact Us'].map((item, index) => (
                            <motion.li
                                key={index}
                                whileHover={{ scale: 1.1, backgroundColor: '#3f3f3f', borderRadius: '1rem' }}  // Hover effect
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <a
                                    className="block py-2 px-4 transition-colors duration-300"
                                    href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                                >
                                    {item}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Join Us Button */}
                <motion.div 
                    className="items-center hidden gap-6 md:flex"
                    initial={{ opacity: 0, scale: 0.8 }}  // Appear effect for the button
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <button
                        className="px-6 py-3 text-black rounded-3xl bg-white hover:bg-zinc-800 hover:text-white transition-colors duration-300"
                        onClick={() => window.location.href = "/signin"}
                    >
                        Join Us
                    </button>
                </motion.div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        className="fixed top-16 left-1/2 transform -translate-x-1/2 w-[90%] bg-white rounded-lg shadow-lg md:hidden"
                        initial={{ opacity: 0, height: 0 }}  // Initial state for the dropdown
                        animate={{ opacity: 1, height: 'auto' }}  // Animate to full size
                        exit={{ opacity: 0, height: 0 }}  // Exit animation
                        transition={{ duration: 0.5 }}
                    >
                        <ul className="flex flex-col p-4 space-y-4">
                            {['Home', 'About Us', 'Our Projects', 'Services', 'Contact Us'].map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ scale: 1.05, backgroundColor: '#3f3f3f', borderRadius: '1rem' }}  // Hover animation
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <a
                                        className="block py-2 px-4 text-gray-700 hover:text-white transition-colors duration-300"
                                        href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                            <motion.li
                                whileHover={{ scale: 1.05, backgroundColor: '#3f3f3f', borderRadius: '1rem' }}  // Hover animation
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <button
                                    className="block py-2 px-4 text-white bg-zinc-700 rounded-3xl hover:bg-zinc-800 transition-colors duration-300 w-full"
                                    onClick={() => window.location.href = "/signin"}
                                >
                                    Join Us
                                </button>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

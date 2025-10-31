"use client";

import { useState, useEffect, useRef } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { gsap } from 'gsap';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // 1. Add state to track if the page is scrolled
    const [isScrolled, setIsScrolled] = useState(false);
    
    const logoRef = useRef(null);
    const menuItemsRef = useRef(null);
    const getStartedBtnRef = useRef(null);

    // GSAP animations for initial load (no changes here)
    useEffect(() => {
        gsap.from(logoRef.current, {
            duration: 0.8, opacity: 0, y: -20, ease: 'power3.out', delay: 0.2,
        });
        gsap.from(menuItemsRef.current.children, {
            duration: 0.6, opacity: 0, y: -20, ease: 'power3.out', stagger: 0.1, delay: 0.4,
        });
        gsap.from(getStartedBtnRef.current, {
            duration: 0.8, opacity: 0, y: -20, ease: 'power3.out', delay: 0.8,
        });
    }, []);

    // 2. Add useEffect to handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            // Set state to true if scroll position is greater than 10px, else false
            setIsScrolled(window.scrollY > 10);
        };

        // Add event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this runs only once

    return (
        // 3. Conditionally apply classes for sticky behavior and padding
        <nav 
    className={`w-full 2xl:w-large px-6 lg:px-28 2xl:px-0 mx-auto z-50 transition-colors duration-300 ${
        isScrolled 
        ? 'fixed top-0 left-0 right-0 pt-3 pb-1 lg:pt-3 bg-gray-900 shadow-xl' 
        : 'pt-6 lg:pt-10'
    }`}
>
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div ref={logoRef} className="w-auto">
    <a href="#">
        <img 
            src="/logo1.png" 
            alt="logo Automater" 
            className="w-20 h-20 transition-all duration-300" 
        />
    </a>
</div>

                {/* Desktop Menu */}
                <ul ref={menuItemsRef} className="list-none text-white hidden xl:flex items-center">
                    {/* Menu items remain the same */}
                    <li className="px-6"><a className="hover:text-gray-200 transition-all" href="#">Home</a></li>
                    <li className="px-6"><a className="hover:text-gray-200 transition-all" href="#">Benefits</a></li>
                    <li className="px-6"><a className="hover:text-gray-200 transition-all" href="#">Feature</a></li>
                    <li className="px-6"><a className="hover:text-gray-200 transition-all" href="#">Review</a></li>
                    <li className="px-6"><a className="hover:text-gray-200 transition-all" href="#">Newsletter</a></li>
                </ul>

                {/* Desktop "Get Started" Button */}
                <div ref={getStartedBtnRef} className="hidden xl:block">
                    {/* 5. Conditionally change button size for better alignment */}
                    <button className={`bg-btnDark text-white w-44 font-medium rounded-lg hover:shadow-xl transition-all duration-300 ${isScrolled ? 'h-14' : 'h-14'}`}>
                        Get started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="block xl:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='pt-1'>
                        {isMenuOpen ? <XIcon className='w-8 text-white' /> : <MenuIcon className='w-8 text-white' />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="xl:hidden mt-4 bg-gray-800 rounded-lg">
                    {/* ... (mobile menu content) ... */}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
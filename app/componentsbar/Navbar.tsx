'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ใช้ไอคอนจาก lucide-react

const Navbar = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navigationlist = ['/', '/projects', '/about', '/contact']

    return (
        <div className="w-full flex items-center border-b-2 px-6 py-2 h-24 fixed bg-transparent backdrop-blur bg-transparent backdrop-blur z-50">
            <Link href="/" className="font-bold text-black dark:text-white">pisuto-dev</Link>

            <div className="hidden md:flex grow items-center justify-center gap-8">
                {navigationlist.map((route, index) => (
                    <Link
                        key={index}
                        href={route}
                        className={`px-3 py-1 rounded transition-colors duration-300 ${
                            pathname === route
                                ? 'bg-black text-white dark:bg-white dark:text-black'
                                : 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white'
                        }`}
                    >
                        {route === '/' ? 'Home' : route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
                    </Link>
                ))}
                <ThemeToggle />
            </div>


            <div className="md:hidden ml-auto flex items-center gap-4">
                <ThemeToggle />
                <button
                    onClick={toggleMenu}
                    className={`text-black dark:text-white focus:outline-none 
                        transform transition-transform duration-800 hover:rotate-3`}
                >
                    
                    <div
                        className={`transition-transform duration-800 ${
                            menuOpen ? 'rotate-90' : ''
                        }`}
                    >

                    {menuOpen ? <X size={24} /> : <Menu size={24} />}

                    </div>
                </button>
            </div>

            {/* เมนู dropdown */}
            {menuOpen && (
                <div className="absolute top-24 left-0 w-full bg-white/90 backdrop-blur-md dark:bg-black/90 shadow-lg">
                    <nav className="flex flex-col">
                        {navigationlist.map((route, index) => (
                            <Link
                                key={index}
                                href={route}
                                className={`block px-4 py-2 transition-colors duration-300 ${
                                    pathname === route
                                        ? 'bg-black text-white dark:bg-white dark:text-black'
                                        : 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white'
                                }`}
                                onClick={toggleMenu}
                            >
                                {route === '/' ? 'Home' : route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Navbar;

'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";


const Navbar = () => {
    const pathname = usePathname();


    return (
        <div
            className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24"
        >
            <Link href="/" className="font-bold">pisuto-dev</Link>
            <div className="grow">
                <div
                    className="flex items-center justify-center gap-2 md:gap-8 relative group"
                >

                    <Link href="/" className={`px-3 py-1 rounded transition-colors duration-300 
                    ${pathname === '/'
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white bg-transparent'
                    }`}
                    >Home</Link>

                    <Link href="/blog" className={`px-3 py-1 rounded transition-colors duration-300 
                    ${pathname === '/blog'
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white bg-transparent'
                    }`}>Blog</Link>

                    <Link href="/about" className={`px-3 py-1 rounded transition-colors duration-300 
                    ${pathname === '/about'
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white bg-transparent'
                    }`}>About</Link>

                    <Link href="/contact" className={`px-3 py-1 rounded transition-colors duration-300 
                    ${pathname === '/contact'
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white bg-transparent'
                    }`}>Contact</Link>

                    <ThemeToggle />

                </div>
            </div>
        </div>
    )
}

export default Navbar;
'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
      }, []);


    const toggleTheme = () => {
      setTheme( resolvedTheme === 'dark' ? 'light' : 'dark');  
    };


    if (!mounted) {
        return null;
    }

    return (
      
      <button
      onClick = {toggleTheme}
      className = "p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"  
        >
            {resolvedTheme === 'dark' ? (
                <Sun className="h-5 w-5 transform transition-transform duration-300 hover:scale-110" />
            ) : (
                <Moon className="h-5 w-5 transform transition-transform duration-300 hover:scale-110" />
            )}
        </button>
    );

}
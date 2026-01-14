'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    if (nextIsDark) {
      document.documentElement.classList.add('dark-mode');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      window.localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between gap-4 relative">
          <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">
            Suraj Thapa
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">Home</Link>
            <Link href="/experience" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">Experience</Link>
            <Link href="/portfolio" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">Portfolio</Link>
            <Link href="/blog" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">Blog</Link>
            <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">Contact</Link>
            <button
              type="button"
              onClick={toggleTheme}
              className="ml-4 px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-600 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
          
          {/* Compact Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-full right-0 w-full bg-white dark:bg-slate-900 shadow-md rounded-b-lg">
              <div className="flex flex-col space-y-2 p-4 border-t">
                <Link 
                  href="/" 
                  className="hover:text-indigo-600 dark:hover:text-indigo-300 transition py-2 px-4 rounded hover:bg-indigo-50 dark:hover:bg-slate-800"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/experience" 
                  className="hover:text-indigo-600 dark:hover:text-indigo-300 transition py-2 px-4 rounded hover:bg-indigo-50 dark:hover:bg-slate-800"
                  onClick={() => setIsOpen(false)}
                >
                  Experience
                </Link>
                <Link 
                  href="/portfolio" 
                  className="hover:text-indigo-600 dark:hover:text-indigo-300 transition py-2 px-4 rounded hover:bg-indigo-50 dark:hover:bg-slate-800"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>
                <Link 
                  href="/blog" 
                  className="hover:text-indigo-600 dark:hover:text-indigo-300 transition py-2 px-4 rounded hover:bg-indigo-50 dark:hover:bg-slate-800"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/contact" 
                  className="hover:text-indigo-600 dark:hover:text-indigo-300 transition py-2 px-4 rounded hover:bg-indigo-50 dark:hover:bg-slate-800"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="mt-2 w-full px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between relative">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            MyPortfolio
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
            <Link href="/experience" className="hover:text-indigo-600 transition">Experience</Link>
            <Link href="/portfolio" className="hover:text-indigo-600 transition">Portfolio</Link>
            <Link href="/blog" className="hover:text-indigo-600 transition">Blog</Link>
            <Link href="/contact" className="hover:text-indigo-600 transition">Contact</Link>
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
            <div className="md:hidden absolute top-full right-0 w-full bg-white shadow-md rounded-b-lg">
              <div className="flex flex-col space-y-2 p-4 border-t">
                <Link 
                  href="/" 
                  className="hover:text-indigo-600 transition py-2 px-4 rounded hover:bg-indigo-50"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/experience" 
                  className="hover:text-indigo-600 transition py-2 px-4 rounded hover:bg-indigo-50"
                  onClick={() => setIsOpen(false)}
                >
                  Experience
                </Link>
                <Link 
                  href="/portfolio" 
                  className="hover:text-indigo-600 transition py-2 px-4 rounded hover:bg-indigo-50"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>
                <Link 
                  href="/blog" 
                  className="hover:text-indigo-600 transition py-2 px-4 rounded hover:bg-indigo-50"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/contact" 
                  className="hover:text-indigo-600 transition py-2 px-4 rounded hover:bg-indigo-50"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
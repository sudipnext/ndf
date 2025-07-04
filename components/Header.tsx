'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'success stories', href: '/success-stories' },
    { name: 'how we work', href: '/how-we-work' },
    { name: 'approach', href: '/approach' },
    { name: 'technology stack', href: '/technology-stack' },
    { name: 'career', href: '/career' },
    { name: 'blog', href: '/blog' },
    { name: 'about', href: '/about' },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
            src="./logo_org.png"
            alt="logo_NDF"
            width={120}
            height={40}
            className="h-8 w-auto"
            />
            <Image
              src="./logo.png"
              alt="NDF"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Discover Us Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/#discover-us"
              className="bg-[#0a1e2d] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0a1e2d]/90 transition-colors duration-200"
            >
              discover us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary text-sm font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#discover-us"
                className="bg-[#0a1e2d] text-white px-6 py-3 rounded-full text-sm font-medium text-center hover:bg-[#0a1e2d]/90 transition-colors duration-200 w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                discover us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

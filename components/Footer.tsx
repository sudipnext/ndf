import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0a1e2d] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left column - Logo and Contact */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <h1 className='text-2xl font-bold'>Numa Digital Farm</h1>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Contact</h4>
              <div className="text-gray-300 space-y-1">
                <p>
                  Email:{' '}
                  <a
                    href="mailto:NDF@gmail.com"
                    className="hover:text-white transition-colors duration-200"
                  >
                    NDF@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a
                    href="tel:+977 9800000000"
                    className="hover:text-white transition-colors duration-200"
                  >
                    +977 9800000000
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Middle column - Navigation */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Navigation</h4>
            <nav className="space-y-3">
              <Link
                href="/success-stories"
                className="text-gray-300 hover:text-white transition-colors duration-200 block"
              >
                success stories
              </Link>
              <Link
                href="/how-we-work"
                className="text-gray-300 hover:text-white transition-colors duration-200 block"
              >
                how we work
              </Link>
              <Link
                href="/approach"
                className="text-gray-300 hover:text-white transition-colors duration-200 block"
              >
                approach
              </Link>
              <Link
                href="/technology-stack"
                className="text-gray-300 hover:text-white transition-colors duration-200 block"
              >
                technology stack
              </Link>
              <Link
                href="/career"
                className="text-gray-300 hover:text-white transition-colors duration-200 block"
              >
                career
              </Link>
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white transition-colors duration-200 block"
              >
                blog
              </Link>
            </nav>
          </div>

          {/* Right column - Discover Us & Social */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Discover Us</h4>
            <Link
              href="/#discover-us"
              className="bg-white text-[#0a1e2d] px-6 py-3 rounded-full text-sm font-medium inline-block hover:bg-gray-100 transition-colors duration-200"
            >
              discover us
            </Link>
            {/* Social Media */}
            <div className="pt-4">
              <div className="flex space-x-4">
                {/* Add your social icons here if needed */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              Copyright © 2018-2024 NDF
            </p>
            <div className="flex space-x-6">
              <Link
                href="/nda"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                NDA
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

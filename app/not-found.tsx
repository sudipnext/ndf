'use client';

import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <div className="max-w-xl w-full flex flex-col items-center text-center space-y-8">
        {/* 404 with SVG decoration */}
        <div className="relative">
          <div className="text-[120px] font-extrabold text-[#0a1e2d]">404</div>
          
          {/* Decorative SVG elements */}
          <svg className="absolute -top-16 -right-16 text-blue-100" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="60" fill="currentColor" fillOpacity="0.4"/>
          </svg>
          <svg className="absolute -bottom-10 -left-10 text-blue-200" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="currentColor" fillOpacity="0.3"/>
          </svg>
          
          {/* Dotted grid pattern */}
          <div className="absolute -bottom-4 right-0">
            <div className="grid grid-cols-5 gap-1">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-blue-400 opacity-60 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="z-10">
          <h1 className="text-3xl font-bold text-[#0a1e2d] mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[#0a1e2d] text-white rounded-lg font-medium transition-all duration-200 hover:bg-[#0a1e2d]/90"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
// components/StudyBanner.js
'use client';

import Link from 'next/link';

export default function StudyBanner() {
  return (
    <div className="bg-white text-black p-10 relative">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between flex-col md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Ready to Elevate Your Studies?</h2>
          <p className="text-sm mt-1">Contact Study for a free consultation today.</p>
        
        </div>
        <Link
          href="tel:+911800112277" // Link to phone number
          className="mt-4 md:mt-0 bg-black text-white font-medium py-2 px-6 rounded-full hover:bg-gray-900 transition-colors"
        >
          Call us
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-900"></div>
    </div>
  );
}
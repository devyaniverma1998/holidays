"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { Image } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <img
  src="/img/logo.png"
  alt="Zenith Holidays"
  className="h-15 w-auto"
/>
               
                  {/* <span className="text-xl font-bold text-blue-600">Zenith</span>
                  <span className="block text-xs text-red-600 -mt-1">HOLIDAYS</span> */}
                  {/* <span className="block text-xs text-gray-500">— SINCE 1997 —</span> */}
                
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 text-sm font-medium text-gray-700">
              <Link href="/holidays" className="px-3 py-2 hover:text-blue-600 transition-colors">
                Holidays
              </Link>
              <Link href="/flights" className="px-3 py-2 hover:text-blue-600 transition-colors">
                Flights
              </Link>
              <Link href="/hotels" className="px-3 py-2 hover:text-blue-600 transition-colors">
                Hotels
              </Link>
              <Link href="/activities" className="px-3 py-2 hover:text-blue-600 transition-colors">
                Activities
              </Link>
              <Link href="/cabs" className="px-3 py-2 hover:text-blue-600 transition-colors">
                Cabs
              </Link>
              <Link href="/train" className="px-3 py-2 hover:text-blue-600 transition-colors">
                Train
              </Link>
              <Link href="/visa" className="px-3 py-2 hover:text-blue-600 transition-colors">
                Visa
              </Link>

              {/* More Dropdown */}
              <div className="relative group">
                <button className="flex items-center px-3 py-2 hover:text-blue-600 transition-colors">
                  More
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/cruises" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Cruises</Link>
                  <Link href="/insurance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Travel Insurance</Link>
                  <Link href="/forex" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Forex</Link>
                  <Link href="/group-tours" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Group Tours</Link>
                </div>
              </div>
            </div>

            {/* Right Side: Support, Country, Currency, Sign In */}
            <div className="hidden md:flex items-center space-x-4 text-sm">

              {/* Support Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                  <span>Support</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/support/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Contact Us</Link>
                  <Link href="/support/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">FAQ</Link>
                  <Link href="/support/travel-advisory" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Travel Advisory</Link>
                </div>
              </div>

              {/* Country & Currency */}
              <div className="flex items-center space-x-2 border-l pl-4 border-gray-300">
                {/* <img
                  src="/img/logo.png"
                  alt="India"
                  width={20}
                  height={20}
                  className="rounded-full"
                /> */}
                <span className="text-gray-700">IN</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-700">EN</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-700">INR</span>
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Sign In Button */}
              <Link
                href="/signin"
                className="px-6 py-2 bg-orange-500 text-white text-sm font-medium rounded-full hover:bg-orange-600 transition-colors"
              >
                Sign In
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open menu</span>
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMobileMenu} />
          <div className="fixed inset-x-0 top-16 bg-white z-50 md:hidden shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link href="/holidays" className="block text-base font-medium text-gray-900 py-2 border-b">Holidays</Link>
              <Link href="/flights" className="block text-base font-medium text-gray-900 py-2 border-b">Flights</Link>
              <Link href="/hotels" className="block text-base font-medium text-gray-900 py-2 border-b">Hotels</Link>
              <Link href="/activities" className="block text-base font-medium text-gray-900 py-2 border-b">Activities</Link>
              <Link href="/cabs" className="block text-base font-medium text-gray-900 py-2 border-b">Cabs</Link>
              <Link href="/train" className="block text-base font-medium text-gray-900 py-2 border-b">Train</Link>
              <Link href="/visa" className="block text-base font-medium text-gray-900 py-2 border-b">Visa</Link>

              <div className="pt-4 space-y-2">
                <p className="text-sm font-semibold text-gray-700">More</p>
                <Link href="/cruises" className="block pl-4 text-sm text-gray-600 py-1">Cruises</Link>
                <Link href="/insurance" className="block pl-4 text-sm text-gray-600 py-1">Travel Insurance</Link>
                <Link href="/forex" className="block pl-4 text-sm text-gray-600 py-1">Forex</Link>
                <Link href="/group-tours" className="block pl-4 text-sm text-gray-600 py-1">Group Tours</Link>
              </div>

              <div className="pt-6 border-t space-y-3">
                <Link
                  href="/signin"
                  className="block w-full text-center px-6 py-3 bg-orange-500 text-white font-medium rounded-full"
                  onClick={toggleMobileMenu}
                >
                  Sign In
                </Link>
                <Link
                  href="/support"
                  className="block text-center text-sm text-blue-600"
                  onClick={toggleMobileMenu}
                >
                  Need Help? Contact Support
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
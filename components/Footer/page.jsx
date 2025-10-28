import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* EF Study Abroad Column */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-16 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-sm">STUDY</span>
                </div>
                <span className="text-xl font-bold"> ABROAD</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about/who-we-are" className="hover:text-white">Who we are</Link></li>
                <li><Link href="/about/educational-approach" className="hover:text-white">Educational approach</Link></li>
                <li><Link href="/about/our-people" className="hover:text-white">Our people</Link></li>
                <li><Link href="/about/diversity-abroad" className="hover:text-white">Diversity abroad</Link></li>
                <li><Link href="/about/responsible-travel" className="hover:text-white">Responsible travel</Link></li>
              </ul>
              <div className="flex space-x-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.896 2.104C19.83 1.04 18.5 1 17.016 1H7.984C6.5 1 5.17 1.04 4.104 2.104C3.04 3.168 3 4.498 3 5.982v12.036c0 1.484.04 2.814 1.104 3.878C5.17 22.96 6.5 23 7.984 23h9.032c1.484 0 2.814-.04 3.88-1.104c1.064-1.064 1.104-2.394 1.104-3.878V5.982c0-1.484-.04-2.814-1.12-3.878zM12 18.5c-3.314 0-6-2.686-6-6s2.686-6 6-6s6 2.686 6 6s-2.686 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Support Column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/support/contact" className="hover:text-white block">Contact us</Link></li>
              <li><Link href="/support/health-safety" className="hover:text-white block">Health and safety</Link></li>
              <li><Link href="/support/help-center" className="hover:text-white block">Help center</Link></li>
              <li><Link href="/support/account-login" className="hover:text-white block">Account login</Link></li>
              <li><Link href="/enroll" className="hover:text-white block">Enroll now</Link></li>
              <li><Link href="/support/program-guide" className="hover:text-white block">Program guides</Link></li>
            </ul>
          </div>

          {/* Destinations Column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white block">Study abroad in Europe</Link></li>
              <li><Link href="#" className="hover:text-white block">Study abroad in Latin America</Link></li>
              <li><Link href="#" className="hover:text-white block">Study abroad in Asia</Link></li>
            </ul>
          </div>

          {/* News & Events Column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">News & events</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white block">Blog</Link></li>
              <li><Link href="#" className="hover:text-white block">Educational Impact Report</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal Row */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <p>Privacy Policy & Legal Notices © Signum International AG 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
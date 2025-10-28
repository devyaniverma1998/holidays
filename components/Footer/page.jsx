'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('services');

  const tabs = [
    { id: 'services', label: 'Our Services', icon: 'fa-gift' },
    { id: 'about', label: 'About', icon: 'fa-info-circle' },
    { id: 'payment', label: 'Payment', icon: 'fa-credit-card' },
    { id: 'info', label: 'Information', icon: 'fa-lightbulb' },
    { id: 'locations', label: 'Locations', icon: 'fa-map-marker-alt' },
  ];

  return (
    <footer
      className="bg-black text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #020617 100%)',
      }}
    >
      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-10 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse" />
        <div className="floating-element absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-700" />
        <div className="floating-element absolute bottom-20 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid lg:grid-cols-5 gap-6">

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-6 text-cyan-400">Quick Links</h2>
            <div className="space-y-2">
              {tabs.map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 ${
                    activeTab === id
                      ? 'bg-slate-700/80 backdrop-blur text-white shadow-lg'
                      : 'bg-slate-700/50 backdrop-blur text-gray-300 hover:bg-slate-600/60'
                  }`}
                >
                  <i className={`fas ${icon} text-cyan-400 w-4 h-4`} />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 min-h-[320px]">

              {/* Services */}
              <div className={`${activeTab === 'services' ? 'block' : 'hidden'} animate-fadeIn`}>
                <h3 className="text-xl font-bold mb-6 text-cyan-400">Our Premium Services</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { href: 'https://www.zenithholidays.com/holiday/search', icon: 'fa-umbrella-beach', label: 'Holidays' },
                    { href: 'https://www.zenithholidays.com/flights', icon: 'fa-plane', label: 'Flights' },
                    { href: 'https://www.zenithholidays.com/hotels', icon: 'fa-bed', label: 'Hotels' },
                    { href: 'https://www.zenithholidays.com/activities', icon: 'fa-hiking', label: 'Activities' },
                    { href: 'https://www.zenithholidays.com/cars', icon: 'fa-car', label: 'Cabs' },
                    { href: 'https://zenithforexonline.com/', icon: 'fa-coins', label: 'Forex' },
                    { href: 'https://visa.zenithholidays.com/', icon: 'fa-passport', label: 'VISA' },
                    { href: 'https://insurance.zenithholidays.com/', icon: 'fa-shield-alt', label: 'Insurance' },
                    { href: 'https://railways.zenithholidays.com/', icon: 'fa-train', label: 'Train' },
                  ].map(({ href, icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center p-3 rounded-lg bg-slate-700/40 hover:bg-slate-600/60 transition"
                    >
                      <i className={`fas ${icon} text-2xl text-cyan-400 mb-2 block`} />
                      <div className="text-sm font-medium">{label}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* About */}
              <div className={`${activeTab === 'about' ? 'block' : 'hidden'} animate-fadeIn`}>
                <h3 className="text-xl font-bold mb-6 text-cyan-400">About Zenith Holidays</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Zenith Holidays is one of India's leading travel companies, offering a complete
                  range of travel solutions worldwide. We create unforgettable experiences with
                  personalized service and attention to detail.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { href: 'https://blog.zenithholidays.com/', icon: 'fa-blog', label: 'Blog' },
                    { href: 'https://www.zenithholidays.com/testimonial', icon: 'fa-star', label: 'Testimonials' },
                    { href: 'https://www.zenithholidays.com/contact-us', icon: 'fa-envelope', label: 'Contact Us' },
                    { href: 'https://www.zenithholidays.com/terms-of-use', icon: 'fa-file-contract', label: 'Terms & Conditions' },
                    { href: 'https://www.zenithholidays.com/privacy-policy', icon: 'fa-shield-alt', label: 'Privacy Policy' },
                    { href: 'https://www.zenithholidays.com/about', icon: 'fa-certificate', label: 'About Info' },
                  ].map(({ href, icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-700/40 hover:bg-slate-600/60 transition"
                    >
                      <i className={`fas ${icon} text-cyan-400 w-4 h-4`} />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Payment */}
              <div className={`${activeTab === 'payment' ? 'block' : 'hidden'} animate-fadeIn`}>
                <h3 className="text-xl font-bold mb-6 text-cyan-400">Secure Payment Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { gradient: 'from-blue-600 to-purple-600', icon: 'fa-credit-card', title: 'Credit & Debit Cards', desc: 'Visa, MasterCard, Amex' },
                    { gradient: 'from-green-600 to-teal-600', icon: 'fa-university', title: 'Net Banking', desc: 'All major banks supported' },
                    { gradient: 'from-orange-600 to-red-600', icon: 'fa-mobile-alt', title: 'UPI & Wallets', desc: 'PhonePe, GPay, Paytm', href: 'https://razorpay.me/@zenithleisureholidays' },
                    { gradient: 'from-indigo-600 to-blue-600', icon: 'fa-globe', title: 'International Cards', desc: 'Worldwide acceptance' },
                  ].map(({ gradient, icon, title, desc, href }) => (
                    <a
                      key={title}
                      href={href || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block p-3 rounded-xl bg-gradient-to-r ${gradient} text-white hover:scale-105 transition-transform text-center`}
                    >
                      <i className={`fas ${icon} text-2xl mb-2 block mx-auto`} />
                      <div className="font-semibold">{title}</div>
                      <div className="text-sm opacity-90">{desc}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className={`${activeTab === 'info' ? 'block' : 'hidden'} animate-fadeIn`}>
                <h3 className="text-xl font-bold mb-6 text-cyan-400">Travel Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: 'fa-question-circle', title: 'FAQ', desc: 'Common questions answered' },
                    { icon: 'fa-map-marked-alt', title: 'Travel Guidelines', desc: 'Essential travel tips' },
                    { icon: 'fa-virus-slash', title: 'New Updates', desc: 'Latest safety protocols' },
                    { icon: 'fa-headset', title: '24/7 Support', desc: 'Always here to help' },
                  ].map(({ icon, title, desc }) => (
                    <a
                      key={title}
                      href="#"
                      className="block p-3 rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 transition text-center"
                    >
                      <i className={`fas ${icon} text-xl text-cyan-400 mb-2 block mx-auto`} />
                      <div className="font-semibold">{title}</div>
                      <div className="text-sm text-gray-400">{desc}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Locations */}
              <div className={`${activeTab === 'locations' ? 'block' : 'hidden'} animate-fadeIn`}>
                <h3 className="text-xl font-bold mb-6 text-cyan-400">Our Branch Network</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
                  {[
                    'Noida', 'Chandigarh', 'Guwahati', 'Indore', 'Kolkata', 'Pune', 'Ahmedabad', 'Delhi',
                    'Surat', 'Vadodara', 'Rajkot', 'Gujarat', 'Mumbai', 'Salt Lake Kolkata', 'Siliguri',
                    'Jalandhar', 'Hyderabad', 'Coimbatore', 'Chennai', 'Bengaluru',
                  ].map((city) => (
                    <a
                      key={city}
                      href={`https://www.zenithholidays.com/blog/branch/${city.toLowerCase().replace(/ /g, '-')}/travel-agency.html`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 p-2 rounded-lg bg-slate-700/40 hover:bg-slate-600/60 transition"
                    >
                      <i className="fas fa-map-pin text-xs text-cyan-400" />
                      {city}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Domestic Tours */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
              <i className="fas fa-flag text-cyan-400" /> Domestic Tours
            </h3>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 space-y-2 text-sm">
              {[
                { name: 'Himachal Pradesh', query: 'Himachal+Pradesh' },
                { name: 'Kerala Backwaters', query: 'kerala' },
                { name: 'Rajasthan Heritage', query: 'rajasthan' },
                { name: 'Kashmir Valley', query: 'kashmir' },
                { name: 'Andaman Islands', query: '+Andaman' },
              ].map(({ name, query }) => (
                <a
                  key={name}
                  href={`https://www.zenithholidays.com/holiday/search?searchby=${query}&type=1&category=&month=`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-700/40 hover:bg-slate-600/60 transition"
                >
                  <i className="fas fa-chevron-right text-cyan-400 w-4 h-4" />
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* International Tours */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
              <i className="fas fa-globe text-cyan-400" /> International Tours
            </h3>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 space-y-2 text-sm">
              {[
                { name: 'Dubai & UAE', query: 'Dubai' },
                { name: 'Bali, Indonesia', query: 'Indonesia' },
                { name: 'Switzerland', query: 'Switzerland' },
                { name: 'Maldives', query: 'Maldives' },
                { name: 'Japan', query: 'Japan' },
              ].map(({ name, query }) => (
                <a
                  key={name}
                  href={`https://www.zenithholidays.com/holiday/search?searchby=${query}&type=2&category=&month=`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-700/40 hover:bg-slate-600/60 transition"
                >
                  <i className="fas fa-chevron-right text-cyan-400 w-4 h-4" />
                  {name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-4">
            <Link href="/">
              <img
                src="/img/logo.png"
                alt="Zenith Holidays Logo"
                className="h-16 filter brightness-0 invert"
              />
            </Link>

            <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <i className="fas fa-phone text-cyan-400" />
                <span>+91 1800 11 2277</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-envelope text-cyan-400" />
                <span>web@zenithholidays.com</span>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 mb-4">
            © 1997 - 2025 Zenith Holidays. All rights reserved.
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-300">
              {[
                { text: '$1 Billion Travel Company', icon: 'fa-dollar-sign' },
                { text: '65 Offices in India', icon: 'fa-building' },
                { text: '12 Global Branches', icon: 'fa-globe' },
                { text: '3M+ Happy Customers', icon: 'fa-users' },
                { text: 'Trusted Partner', icon: 'fa-shield-alt' },
                { text: '24/7 Customer Support', icon: 'fa-clock' },
              ].map(({ text, icon }) => (
                <div key={text} className="flex items-center gap-2 whitespace-nowrap">
                  <i className={`fas ${icon} text-purple-400 w-4 h-4`} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </footer>
  );
};

export default Footer;
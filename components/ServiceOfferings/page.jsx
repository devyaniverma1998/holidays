'use client';
import React, { useState } from 'react';


const ServiceOfferings = () => {
  const services = [
    { icon: 'Bus', title: 'Book Bus Tickets', desc: 'Easy travel awaits! Book bus tickets hassle-free.' },
    { icon: 'Train', title: 'Book Rail Tickets', desc: 'Secure your train journey with ease.' },
    { icon: 'Document', title: 'Book Your Visa', desc: 'Simplify travel with Zenith visa services.' },
    { icon: 'Currency', title: 'Forex', desc: 'Exchange currency with ease at favorable rates.' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Service Offerings by Zenith Holidays
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition text-center"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServiceOfferings;
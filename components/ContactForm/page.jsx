"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    // New state field for the select dropdown
    inquiryType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to API route or email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", inquiryType: "", message: "" });
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-center mb-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Contact Us</h2>

        </div>
        <p className="text-gray-50 text-center mb-12">
          Have a question or want to know more? Send us a message and we’ll get back to you!
        </p>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md text-center">
            Thank you! Your message has been sent.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* New Select Field for Inquiry Type */}


          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-50 focus:text-black"
          >
            <option value="" disabled>
              Select one (Inquiry Type)
            </option>
            <option value="professor-faculty">
              Professor or faculty member
            </option>
            <option value="administrator">
              Higher education administrator
            </option>
            <option value="student-account">
              Student with a program or account question
            </option>
            <option value="student-enrollment">
              Student who wants to enroll on a program led by my college
            </option>
            <option value="other">
              Other
            </option>
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            style={{ display: 'block', margin: '0 auto' }} // Center button
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
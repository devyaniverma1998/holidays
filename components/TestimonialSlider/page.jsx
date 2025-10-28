"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Studying abroad with changed my life. I explored new cultures, made friends, and learned lessons beyond the classroom.",
    name: "Joshua A.",
    role: "Study Abroad Student",
  },
  {
    text: "Study exchange program gave me confidence, independence, and global exposure. Meeting people worldwide made learning truly unforgettable.",
    name: "Sophia L.",
    role: "Study Abroad Student",
  },
  {
    text: "My study trip was life-changing. I discovered new skills, built lifelong friendships, and gained experiences that shaped my future.",
    name: "Daniel K.",
    role: "Study Abroad Student",
  },
  {
    text: "Study made studying abroad seamless and inspiring. The experience expanded my mind, enhanced my learning, and opened doors globally.",
    name: "Emma W.",
    role: "Study Abroad Student",
  },
  {
    text: "Through Study, I explored the world, learned freely, and connected deeply. The memories and growth will stay with me forever.",
    name: "Liam R.",
    role: " Study Abroad Student",
  },
];


const TestimonialSlider = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="flex items-center justify-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
           What Our Students Say</h2>

        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1} // default mobile
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 }, // mobile
            768: { slidesPerView: 2 }, // tablet
            1024: { slidesPerView: 3 }, // desktop
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white  rounded-xl shadow-sm hover:shadow-3xl p-4 h-full flex flex-col justify-between transition-shadow duration-300">
                <p className="text-gray-800 text-md italic mb-4">{t.text}</p>
                <div>
                  <h3 className="text-gray-900 font-bold">{t.name}</h3>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;

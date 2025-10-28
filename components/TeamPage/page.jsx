'use client'; // This directive makes it a client component
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Your team data
const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO',
    image: '/img/team-1.jpg', // Place your img in the public/img folder
  },
  {
    name: 'Jane Smith',
    role: 'Head of Education',
    image: '/img/team-2.jpg',
  },
  {
    name: 'Alee Brown',
    role: 'Program Coordinator',
    image: '/img/team-3.jpg',
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Lead',
    image: '/img/team-4.jpg',
  },
 
];

// Our Purpose content
const purpose = {
  title: 'Our Purpose',
  description:
    'We are dedicated to empowering individuals through education and global experiences, fostering a community of lifelong learners who contribute positively to the world. Our mission is to inspire growth, collaboration, and innovation for a better future.',
};

export default function TeamPage() {
  return (
    <section className="bg-white py-12 text-white">
      <div className="container mx-auto px-4">
        {/* Team Section */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-black mb-4 md:text-3xl">
            Our People
          </h2>
          <p className="text-sm text-gray-800 max-w-2xl mx-auto mb-8">
            Meet the dedicated professionals driving our mission forward with expertise and passion.
          </p>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="group relative h-96 w-full rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white md:text-3xl">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-300 mt-2">{member.role}</p>
                  </div>
                  <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    &rarr;
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

       
      </div>
    </section>
  );
}
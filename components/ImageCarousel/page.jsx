
'use client';
import React, { useState } from 'react';

const ImageCarousel = () => {
  const images = [
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200',
    'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1200',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
  ];
  const [slide, setSlide] = useState(0);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img src={images[slide]} alt="Travel" className="w-full h-96 object-cover" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`w-3 h-3 rounded-full transition ${slide === i ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ImageCarousel;

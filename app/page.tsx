'use client'; // <-- Tambahkan ini di baris pertama

import { useState } from 'react';
import Image from 'next/image';
import Navbar from "./layouts/navbar";

// Data dummy untuk hero section
const heroSlides = [
  {
    id: 1,
    title: "Bestseller Collection",
    description: "Temukan novel terbaik bulan ini",
    image: "/hero-1.jpg"
  },
  {
    id: 2,
    title: "New Releases",
    description: "Karya terbaru dari penulis favorit Anda",
    image: "/hero-2.jpg"
  },
  {
    id: 3,
    title: "Classic Literature",
    description: "Karya sastra abadi sepanjang masa",
    image: "/hero-3.jpg"
  },
  {
    id: 4,
    title: "Award Winners",
    description: "Novel pemenang penghargaan internasional",
    image: "/hero-4.jpg"
  },
  {
    id: 5,
    title: "Local Authors",
    description: "Dukung penulis dalam negeri",
    image: "/hero-5.jpg"
  }
];

// Data dummy novel
const novels = [
  { id: 1, title: "Laskar Pelangi", author: "Andrea Hirata", rating: 4.8, cover: "/novel-1.jpg" },
  { id: 2, title: "Bumi Manusia", author: "Pramoedya Ananta Toer", rating: 4.9, cover: "/novel-2.jpg" },
  { id: 3, title: "Perahu Kertas", author: "Dee Lestari", rating: 4.5, cover: "/novel-3.jpg" },
  { id: 4, title: "Pulang", author: "Tere Liye", rating: 4.7, cover: "/novel-4.jpg" },
  { id: 5, title: "Ronggeng Dukuh Paruk", author: "Ahmad Tohari", rating: 4.6, cover: "/novel-5.jpg" },
  { id: 6, title: "Sang Pemimpi", author: "Andrea Hirata", rating: 4.4, cover: "/novel-6.jpg" }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
    <Navbar />
      <div className="w-full max-w-[1500px] mx-auto relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 relative pb-[56.25%]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center">
                <div className="text-white max-w-2xl px-4">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl mb-6">{slide.description}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                    Lihat Koleksi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 z-10"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 z-10"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Novel Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Koleksi Novel</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {novels.map((novel) => (
            <div key={novel.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src={novel.cover}
                  alt={novel.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">{novel.title}</h3>
                <p className="text-gray-600 mb-2">{novel.author}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(novel.rating) ? 'fill-current' : 'fill-none stroke-current'}`}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">{novel.rating.toFixed(1)}</span>
                </div>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
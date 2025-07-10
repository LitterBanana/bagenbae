"use client"; // <-- Tambahkan ini di baris pertama

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";

// Data dummy untuk hero section
const heroSlides = [
  {
    id: 1,
    title: "Bestseller Collection",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/hero-1.png",
  },
  {
    id: 2,
    title: "New Releases New Releases New Releases New Releases",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/hero-2.png",
  },
  {
    id: 3,
    title: "Classic Literature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/hero-3.png",
  },
  {
    id: 4,
    title: "Award Winners",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/hero-4.png",
  },
  {
    id: 5,
    title: "Local Authors",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/hero-5.png",
  },
];

// Data dummy novel
const novels = [
  {
    id: 1,
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    rating: 4.8,
    cover: "/novel-1.jpg",
  },
  {
    id: 2,
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    rating: 4.9,
    cover: "/novel-2.jpg",
  },
  {
    id: 3,
    title: "Perahu Kertas",
    author: "Dee Lestari",
    rating: 4.5,
    cover: "/novel-3.jpg",
  },
  {
    id: 4,
    title: "Pulang",
    author: "Tere Liye",
    rating: 4.7,
    cover: "/novel-4.jpg",
  },
  {
    id: 5,
    title: "Ronggeng Dukuh Paruk",
    author: "Ahmad Tohari",
    rating: 4.6,
    cover: "/novel-5.jpg",
  },
  {
    id: 6,
    title: "Sang Pemimpi",
    author: "Andrea Hirata",
    rating: 4.4,
    cover: "/novel-6.jpg",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Pindahkan padding ke luar container hero */}
      <div className="w-full px-2 sm:px-4 md:px-8">
        <div className="max-w-[1536px] max-h-[536px] mx-auto relative overflow-hidden rounded-3xl my-8">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroSlides.map((slide) => (
              <div
                key={slide.id}
                className="w-full flex-shrink-0 relative pb-[56.25%]"
                style={{ minWidth: "100%" }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover" // Tidak ada rounded di sini
                  priority
                />
                {/* HAPUS rounded-3xl di bawah ini */}
                <div className="absolute inset-0 bg-black/30 flex items-center text-left">
                  <div className="text-white max-w-2xl px-8">
                    <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                    <p
                      className="text-xl mb-6 line-clamp-3 text-justify"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators & Navigation Arrows */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-10">
            <button
              onClick={prevSlide}
              className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? "bg-white w-6" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          {/* End Slide Indicators & Navigation Arrows */}
        </div>
      </div>

      {/* Novel Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Koleksi Novel</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {novels.map((novel) => (
            <div
              key={novel.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
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
                        className={`w-5 h-5 ${
                          i < Math.floor(novel.rating)
                            ? "fill-current"
                            : "fill-none stroke-current"
                        }`}
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
                  <span className="ml-2 text-gray-600">
                    {novel.rating.toFixed(1)}
                  </span>
                </div>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

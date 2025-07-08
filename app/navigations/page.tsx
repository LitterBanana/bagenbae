// app/navigations/page.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../layouts/navbar';

// Data dummy novel dengan lebih banyak properti
const dummyNovels = [
  { id: 1, title: "Laskar Pelangi", genre: "Drama", rating: 4.8, cover: "/covers/novel1.jpg" },
  { id: 2, title: "Bumi Manusia", genre: "Historical", rating: 4.9, cover: "/covers/novel2.jpg" },
  { id: 3, title: "Perahu Kertas", genre: "Romance", rating: 4.5, cover: "/covers/novel3.jpg" },
  { id: 4, title: "Negeri 5 Menara", genre: "Inspirational", rating: 4.7, cover: "/covers/novel4.jpg" },
  { id: 5, title: "Pulang", genre: "Adventure", rating: 4.6, cover: "/covers/novel5.jpg" },
  { id: 6, title: "Ronggeng Dukuh Paruk", genre: "Literary", rating: 4.4, cover: "/covers/novel6.jpg" },
  { id: 7, title: "Sang Pemimpi", genre: "Drama", rating: 4.3, cover: "/covers/novel7.jpg" },
  { id: 8, title: "Arok Dedes", genre: "Historical", rating: 4.2, cover: "/covers/novel8.jpg" },
];

const genres = ["All", "Drama", "Romance", "Adventure", "Historical", "Literary", "Inspirational"];

export default function Navigations() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNovels = dummyNovels.filter(novel => {
    const matchesGenre = selectedGenre === "All" || novel.genre === selectedGenre;
    const matchesSearch = novel.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header dengan search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">Koleksi Novel</h1>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Cari judul novel..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <div className="w-full lg:w-3/12">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Filter Genre</h2>
              <ul className="space-y-2">
                {genres.map((genre) => (
                  <li key={genre}>
                    <button
                      onClick={() => setSelectedGenre(genre)}
                      className={`w-full text-left px-4 py-2 rounded transition-colors ${
                        selectedGenre === genre
                          ? 'bg-blue-100 text-blue-800 font-medium'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {genre}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Konten Utama */}
          <div className="w-full lg:w-9/12">
            {filteredNovels.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNovels.map((novel) => (
                  <Link 
                    href={`/novels/${novel.id}`} 
                    key={novel.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:-translate-y-1"
                  >
                    <div className="relative h-48">
                      <Image
                        src={novel.cover}
                        alt={novel.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1 line-clamp-1">{novel.title}</h3>
                      <div className="flex justify-between items-center">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {novel.genre}
                        </span>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1 text-sm text-gray-600">{novel.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <Image 
                  src="/no-results.svg" 
                  alt="No results" 
                  width={200} 
                  height={200}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-medium text-gray-700">Tidak ditemukan novel</h3>
                <p className="text-gray-500">Coba gunakan kata kunci atau genre yang berbeda</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
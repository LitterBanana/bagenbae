"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo dan Deskripsi */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image 
                src="/vercel.svg" 
                alt="BagenBae Logo" 
                width={40} 
                height={40} 
                className="h-8 w-auto mr-2"
              />
              <span className="text-xl font-bold">BagenBae</span>
            </div>
            <p className="text-gray-300">
              Platform penyewaan buku dan novel terbaik dengan koleksi terlengkap.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <Link 
                  key={social} 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={social}
                >
                  <Image
                    src={`/${social}.svg`}
                    alt={social}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tautan Cepat</h3>
            <ul className="space-y-2">
              {['Beranda', 'Koleksi', 'Kategori', 'Tentang Kami'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontak Kami</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <Image 
                  src="/location.svg" 
                  alt="Location" 
                  width={16} 
                  height={16} 
                  className="mt-1 mr-2"
                />
                <span>Jl. Buku No. 123, Jakarta</span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/email.svg" 
                  alt="Email" 
                  width={16} 
                  height={16} 
                  className="mr-2"
                />
                <span>info@bagenbae.com</span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/phone.svg" 
                  alt="Phone" 
                  width={16} 
                  height={16} 
                  className="mr-2"
                />
                <span>+62 123 4567 890</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-300">
              Dapatkan update koleksi terbaru langsung ke email Anda
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Anda"
                className="px-4 py-2 rounded-l-lg w-full text-gray-800 focus:outline-none"
                required
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors"
              >
                <Image 
                  src="/send.svg" 
                  alt="Subscribe" 
                  width={20} 
                  height={20} 
                />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} BagenBae. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Syarat & Ketentuan
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
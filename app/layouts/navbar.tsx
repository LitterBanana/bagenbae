'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import LoginModal from '../components/LoginModal';

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-5 flex items-center">
          {/* SECTION: KIRI (Logo) */}
          <div className="flex items-center flex-shrink-0 mr-auto">
            <Link href="/" className="text-xl font-bold flex items-center">
              BagenBae
            </Link>
          </div>

          {/* SECTION: TENGAH (Menu Navigasi) */}
          <div className="hidden md:flex justify-center space-x-6 mx-auto">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Dashboard
            </Link>
            <Link href="/navigations" className="text-gray-600 hover:text-gray-900 transition-colors">
              Navigasi
            </Link>
          </div>

          {/* SECTION: KANAN (Login & Icon) */}
          <div className="flex items-center justify-end space-x-4 ml-auto">
            <button
              onClick={() => setShowLogin(true)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Login
            </button>
            <Image
              src="/window.svg"
              alt="Window Icon"
              width={20}
              height={20}
              className="h-5 w-5"
            />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 focus:outline-none"            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-3 space-y-2">
            <Link href="/" className="block text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="/navigations" className="block text-gray-600 hover:text-gray-900">
              Navigasi
            </Link>
            <Link href="/login" className="block text-gray-600 hover:text-gray-900">
              Login
            </Link>
          </div>
        )}
      </nav>
      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}

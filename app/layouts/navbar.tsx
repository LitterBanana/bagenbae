import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="relative flex items-center p-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Link href="/" className="text-xl font-bold flex items-center">
          <Image 
            src="/vercel.svg" 
            alt="Vercel Logo" 
            width={100}
            height={24}
            className="h-6 mr-2" 
          />
          BagenBae
        </Link>
      </div>

      {/* Navigation Links - benar-benar di tengah */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            Dashboard
          </Link>
          <Link href="/navigations" className="text-gray-600 hover:text-gray-900 transition-colors">
            Navigasi
          </Link>
          <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
            Login
          </Link>
        </div>
      </div>

      {/* Icon di kanan */}
      <div className="ml-auto">
        <Image 
          src="/window.svg" 
          alt="Window Icon" 
          width={20}
          height={20}
          className="h-5 w-5"
        />
      </div>
    </div>
  );
}
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold flex items-center">
          <img 
            src="vercel.svg" 
            alt="Vercel Logo" 
            className="h-6 mr-2" 
          />
          BagenBae
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        <a 
          href="#" 
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          login
        </a>
        <img 
          src="/window.svg" 
          alt="Window Icon" 
          className="h-5 w-5"
        />
      </div>
    </div>
  );
}

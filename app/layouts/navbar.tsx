// layouts/navbar.tsx
export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <a href="/" className="text-xl font-bold flex items-center">
          <img 
            src="/vercel.svg" 
            alt="Vercel Logo" 
            className="h-6 mr-2" 
          />
          BagenBae
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            Dashboard
        </a>
        <a href="navigasi.tsx" className="text-gray-600 hover:text-gray-900 transition-colors">
            Navigasi
        </a>
        <a 
          href="auth/login.tsx" 
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Login
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
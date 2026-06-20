import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 font-sans">
      {/* 1. Premium Top Bar */}
      <div className="bg-slate-900 text-white text-[11px] py-2.5 px-4 tracking-wide uppercase font-medium">
        <div className="container mx-auto flex justify-between items-center max-w-6xl">
          <div className="flex gap-6">
            <span className="hover:text-orange-400 transition cursor-pointer">📞 +61 685 1197</span>
            <span className="hidden sm:block text-slate-500">|</span>
            <span className="hidden sm:block hover:text-orange-400 transition cursor-pointer">📍 65 11th Avenue Kew Johannesburg</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-orange-400 transition cursor-pointer">Reviews</span>
            <span className="hover:text-orange-400 transition cursor-pointer">Warranty</span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation */}
      <div className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
          <div className="text-2xl font-extrabold text-slate-900 tracking-tighter">
            PS <span className="text-orange-500">ELECTRONICSHIVE</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-slate-600">
            {['Home', 'About Us', 'Services', 'Contact Us'].map((item) => (
              <a key={item} href="#" className={`relative group transition-all duration-300 ${item === 'Home' ? 'text-orange-500' : 'hover:text-orange-500'}`}>
                {item}
                <span className="absolute -bottom-6 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <button className="md:hidden text-3xl text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* 3. Smooth Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-slate-900 ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center gap-6 py-6 text-white">
          {['Home', 'About Us', 'Services', 'Contact Us'].map((item) => (
            <a key={item} href="#" className="text-lg hover:text-orange-400 transition">{item}</a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
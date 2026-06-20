import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // Welcome screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2500); // 2.5 seconds tak welcome screen dikhegi
    return () => clearTimeout(timer);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Welcome Screen */}
      {showWelcome && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900 transition-opacity duration-1000 animate-fadeOut">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tighter animate-pulse">
            Welcome to <span className="text-orange-500">PS ELECTRONICSHIVE</span>
          </h1>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 w-full z-50 font-sans">
        {/* ... (Baaki ka code waisa hi rahega) */}
        <div className="bg-slate-900 text-white text-[11px] py-2.5 px-4 tracking-wide uppercase font-medium">
            <div className="container mx-auto flex justify-between items-center max-w-6xl">
            <div className="flex gap-6">
                <span className="hover:text-orange-400 transition cursor-pointer">📞 +61 685 1197</span>
                <span className="hidden sm:block text-slate-500">|</span>
                <span className="hidden sm:block hover:text-orange-400 transition cursor-pointer">📍 65 11th Avenue Kew Johannesburg</span>
            </div>
            </div>
        </div>

        <div className={`transition-all duration-500 py-4 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
            <div className="text-2xl font-extrabold text-slate-900 tracking-tighter">PS <span className="text-orange-500">ELECTRONICSHIVE</span></div>
            <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>{isOpen ? '✕' : '☰'}</button>
            </div>
        </div>
      </header>
      {/* Welcome Screen with Typing Animation */}
      {showWelcome && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900 animate-fadeOut">
          <div className="overflow-hidden whitespace-nowrap animate-typing border-r-2 border-orange-500 max-w-fit">
            <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tighter">
              Welcome to <span className="text-orange-500">PS ELECTRONICSHIVE</span>
            </h1>
          </div> 
          {/* Yahan extra </div> tha, jo maine hata diya hai */}
        </div>
      )}
    </>
  );
};

export default Header;
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tighter text-white">
              PS <span className="text-orange-500">ELECTRONICSHIVE</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for professional power solutions. Providing reliable UPS, Generators, and Industrial Electronics since our inception.
            </p>
            {/* सोशल आइकन्स को सुधार दिया गया है */}
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-orange-500">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Our Services</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-orange-500">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition">UPS Installations</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Generator Repair</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Solar Solutions</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">DB Board Setup</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-orange-500">Contact Us</h4>
            <p className="text-gray-400 text-sm">65 11th Avenue, Kew, Johannesburg</p>
            <p className="text-gray-400 text-sm font-bold">📞 +61 685 1197</p>
            <p className="text-gray-400 text-sm">📧 info@pselectronicshive.co.za</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-gray-500 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} PS Electronicshive. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
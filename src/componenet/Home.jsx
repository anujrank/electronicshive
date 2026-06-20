import React from 'react';
import { FaCog, FaClock, FaUsers, FaHeadset } from 'react-icons/fa';
function Home() {
  const services = [
    { id: 1, name: '10 KVA to 80 KVA', image: '/item1.png' },
    { id: 2, name: 'Generator', image: '/item2.png' },
    { id: 3, name: '80 KVA to 200 KVA', image: '/item3.png' },
    { id: 4, name: 'DP 3000M (10-60KVA) UPS', image: '/item4.png' },
    { id: 5, name: 'DP 1000M (4-10KVA) UPS', image: '/item5.png' },
    { id: 6, name: 'DP 3000M (10-60KVA) UPS', image: '/item6.png' },
  ];
  const features = [
    { icon: <FaCog />, title: "Advance Technology", desc: "Our technology is advanced and modern" },
    { icon: <FaClock />, title: "Ontime Delivery", desc: "We deliver on time as per customer request." },
    { icon: <FaUsers />, title: "Expert Engineer", desc: "Customer satisfaction is our goal" },
    { icon: <FaHeadset />, title: "Customer Support", desc: "We are available 24 hours" },
    { icon: <FaUsers />, title: "Expert Engineer", desc: "Our qualified staff provides high standards" }
  ];
  const projects = [
    { title: "Server Room Building", img: "/project1.png", desc: "Expert server room setups with optimal cooling and cabling. Reliable infrastructure that scales with your growth requirements." },
    { title: "Royal Batteries Supplies", desc: "High-performance batteries with Calcium alloy grids to minimise corrosion. Trusted supplies to ensure your power stays on." },
    { title: "DB Box Installations", desc: "Full-set Electric DB Box installations for single-phase systems. Safe, professional construction with high-quality circuit protection." },
    { title: "Vectron Inverters", desc: "Pure sine wave inverters designed for professional duty. High-efficiency power conversion for sensitive industrial equipment." },
    { title: "Solar Panel Installation", desc: "Off-grid solar systems to protect against load shedding. We manage everything from initial design to final installation." },
    { title: "House Hold Generators", desc: "Robust dual-fuel portable generators for home power backup. Featuring electric start and quiet operation for emergencies." }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section - Unchanged as requested */}
      <section className="relative w-full bg-slate-950 py-24 px-6 min-h-[85vh] flex items-center overflow-hidden">
        {/* Modern Overlay Pattern */}
        <div className="absolute inset-0 bg-[url('/hero-section.png')] bg-cover bg-center opacity-30 bg-fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/80 to-transparent"></div>

        <div className="container mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">Certified Solution Providers</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter">
              Solution Providers for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Electrical requirements</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Expertise in UPS, Generators, and Industrial Electronics. 24/7 dedicated engineering support to keep your systems running at peak performance.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="bg-orange-500 hover:bg-white text-white hover:text-slate-900 px-10 py-4 font-black uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(249,115,22,0.4)] cursor-pointer rounded-xl">
                View Services
              </button>
            </div>
          </div>

          {/* Form - Enhanced Glassmorphism */}
          <div className="w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-black text-white mb-2 uppercase">Get a Quote</h2>
            <p className="text-gray-400 mb-8">We respond within 24 hours.</p>

            <form className="grid grid-cols-1 gap-5">
              <input type="text" placeholder="Full Name" className="bg-white/10 p-4 rounded-xl border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 outline-none transition" />
              <div className="grid grid-cols-2 gap-4">
                <input type="number" placeholder="Phone" className="bg-white/10 p-4 rounded-xl border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 outline-none" />
                <input type="email" placeholder="Email" className="bg-white/10 p-4 rounded-xl border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 outline-none" />
              </div>
              <select className="bg-white/10 p-4 rounded-xl border border-white/10 text-gray-400 outline-none">
                <option>Select Service</option>
                <option>UPS Installation</option>
                <option>Generator Repair</option>
              </select>
              <button className="w-full bg-white text-slate-900 py-4 rounded-xl font-black uppercase hover:bg-orange-500 hover:text-white transition-all cursor-pointer">
                Request Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Services Section - Refined for "High Conversion" */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h3 className="text-orange-500 font-bold uppercase tracking-[0.2em] mb-2">Our Capabilities</h3>
              <h2 className="text-5xl font-black text-slate-900 tracking-tight">Our Core Services</h2>
            </div>
            <p className="text-gray-500 max-w-sm">We provide end-to-end electrical solutions with 24/7 technical support for all our clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item) => (
              <div key={item.id} className="group bg-white rounded-3xl p-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden h-72 rounded-2xl">
                  <img src={item.image} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-black text-sm uppercase tracking-widest border border-white px-6 py-2">In Stock</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-slate-900 group-hover:text-orange-500 transition-colors">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Fixed Background */}
      <section className="relative py-24 px-6 text-white bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/project-done.png')" }}>
        <div className="absolute inset-0 bg-slate-950/80"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">We Do Big Projects</h2>
            <p className="text-lg text-gray-300">Some of our products are as below, Supply and installations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed italic mb-6">{item.desc}</p>
                <button className="text-orange-500 font-bold border-b-2 border-orange-500 pb-1 cursor-pointer">View More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* what we offer section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Side: Description */}
          <div>
            <h2 className="text-4xl font-bold mb-6">WHAT WE OFFER</h2>
            <p className="text-gray-600 leading-relaxed">
              This service organization is committed to focusing on client needs establishing and endeavoring
              to maintain world class standards. Our objective is to provide within the cost plan a service
              of such high quality that continuing business is encouraged. No job is big or small for us
              to be the preferred supplier of high quality Electrical, UPS, & generator services in South
              Africa. We provide innovative and cost effective services to our customers/ Clients.
            </p>
          </div>

          {/* Right Side: Feature Grid with Boxes and Hover Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-orange-500 cursor-pointer"
              >
                <div className="text-3xl text-orange-500 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;
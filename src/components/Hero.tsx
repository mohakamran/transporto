import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search, CheckCircle2, Truck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          alt="Logistics Background"
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent"></div>
        {/* Animated Particles/Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -150, 0],
                x: [0, 80, 0],
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 12 + i * 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bg-white/10 rounded-full blur-3xl"
              style={{
                width: `${150 + i * 60}px`,
                height: `${150 + i * 60}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white space-y-8 md:space-y-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-4 py-2 md:px-6 md:py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl"
          >
            <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-secondary"></span>
            </span>
            <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-secondary">Global Logistics Leader</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-display font-bold leading-[1.2] md:leading-[1.1] tracking-tight">
            Move Your <br />
            <span className="text-secondary italic">Business</span> <br />
            Forward.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-medium">
            We provide seamless logistics solutions for businesses and individuals. From local deliveries to global cargo, we've got you covered with AI-powered tracking.
          </p>
          
          <div className="flex flex-wrap gap-4 md:gap-6 pt-2 md:pt-4">
            <Link to="/contact" className="px-8 py-4 md:px-10 md:py-5 bg-secondary text-primary rounded-xl md:rounded-2xl font-black text-base md:text-lg shadow-2xl shadow-secondary/20 hover:bg-white transition-all active:scale-95 flex items-center gap-3 group w-full sm:w-auto justify-center">
              Book Now <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/pricing" className="px-8 py-4 md:px-10 md:py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:bg-white hover:text-primary transition-all active:scale-95 w-full sm:w-auto justify-center text-center">
              Get Quote
            </Link>
          </div>

          {/* Tracking Input - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-dark p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] max-w-lg border border-white/10 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-lg md:rounded-xl text-primary flex items-center justify-center shadow-lg">
                <Search size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black tracking-widest uppercase text-secondary">Real-time Tracking</p>
                <p className="text-base md:text-lg font-bold">Track your shipment</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter Tracking ID..."
                className="flex-1 bg-white/10 border border-white/20 rounded-xl md:rounded-2xl px-5 py-3.5 md:px-6 md:py-4 focus:outline-none focus:ring-2 focus:ring-secondary text-white placeholder:text-white/40 font-medium transition-all text-sm md:text-base"
              />
              <button className="bg-secondary text-primary px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-black hover:bg-white transition-all active:scale-95 shadow-lg text-sm md:text-base">
                Track
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Elements */}
        <div className="hidden lg:block relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border-[12px] border-white/10 relative group">
              <img
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200"
                alt="Truck"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating Glass Cards */}
            <motion.div
              animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 glass-card p-8 rounded-[2.5rem] flex items-center gap-5 shadow-2xl border border-white/20"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl text-green-600 flex items-center justify-center shadow-inner">
                <CheckCircle2 size={36} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-black uppercase tracking-widest mb-1">Status</p>
                <p className="text-xl font-black text-primary">Delivered</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 25, 0], x: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-12 -left-12 glass-card p-8 rounded-[2.5rem] flex items-center gap-5 shadow-2xl border border-white/20"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl text-blue-600 flex items-center justify-center shadow-inner">
                <Truck size={36} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-black uppercase tracking-widest mb-1">Live Fleet</p>
                <p className="text-xl font-black text-primary">1,240+ Active</p>
              </div>
            </motion.div>

            {/* Extra Floating Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -right-20 w-24 h-24 glass-card rounded-full flex items-center justify-center border border-white/20 shadow-2xl"
            >
              <Globe className="text-secondary w-12 h-12" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] md:text-[10px] uppercase font-black tracking-[0.3em] text-white/40">Scroll Down</span>
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1 md:w-1.5 md:h-1.5 bg-secondary rounded-full"
          />
        </div>
      </motion.div>
    </section>

  );
}

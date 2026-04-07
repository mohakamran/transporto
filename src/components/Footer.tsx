import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-secondary p-2 rounded-lg">
              <Truck className="text-primary w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold">
              Trans<span className="text-secondary">Porto</span>
            </span>
          </Link>
          <p className="text-gray-300 leading-relaxed">
            Leading the way in global logistics and transportation. Fast, reliable, and secure delivery services tailored to your needs.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-display font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link to="/" className="text-gray-300 hover:text-secondary transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="text-gray-300 hover:text-secondary transition-colors">Latest News</Link></li>
            <li><Link to="/faq" className="text-gray-300 hover:text-secondary transition-colors">Help & FAQ</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact Support</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-display font-bold mb-6">Our Services</h3>
          <ul className="space-y-4">
            <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">Cargo Delivery</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">Logistics Solutions</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">Ride Booking</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">Same Day Delivery</Link></li>
            <li><Link to="/tracking" className="text-gray-300 hover:text-secondary transition-colors">Track Shipment</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-display font-bold mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-secondary shrink-0" size={20} />
              <span className="text-gray-300">123 Logistics Way, Transport City, TC 54321</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-secondary shrink-0" size={20} />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-secondary shrink-0" size={20} />
              <span className="text-gray-300">info@transporto.com</span>
            </li>
          </ul>
          <div className="mt-8">
            <h4 className="font-bold mb-3">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-secondary"
              />
              <button className="bg-secondary text-primary px-4 py-2 rounded-lg font-bold hover:bg-secondary/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} TransPorto. All rights reserved.</p>
      </div>
    </footer>
  );
}

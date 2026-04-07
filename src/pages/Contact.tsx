import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h1 className="text-5xl font-display font-bold text-primary leading-tight">
                Get in Touch <br />
                <span className="text-secondary">With Us</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                Have questions about our services or need a custom quote? Our team is ready to help you move your business forward.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email Us</h4>
                  <p className="text-gray-500 text-sm">support@transporto.com</p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 space-y-4">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Call Us</h4>
                  <p className="text-gray-500 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 space-y-4">
                <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Visit Us</h4>
                  <p className="text-gray-500 text-sm">123 Logistics Way, Transport City</p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 space-y-4">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Working Hours</h4>
                  <p className="text-gray-500 text-sm">Mon - Sat: 9AM - 8PM</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl h-64 relative border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
                alt="Map Location"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                <MessageSquare size={20} />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary">Send a Message</h3>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-background border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-background border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Subject</label>
                <select className="w-full bg-background border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary">
                  <option>General Inquiry</option>
                  <option>Get a Quote</option>
                  <option>Partnership</option>
                  <option>Support</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full bg-background border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary resize-none"
                ></textarea>
              </div>
              <button className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-lg">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, x: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, x: -20 }}
            className="mb-4 w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">
                  TP
                </div>
                <div>
                  <h4 className="font-bold">TransPorto Support</h4>
                  <p className="text-xs text-secondary flex items-center gap-1">
                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-secondary transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="h-64 p-6 bg-gray-50 overflow-y-auto space-y-4">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-600 max-w-[80%]">
                Hello! How can we help you today?
              </div>
              <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm ml-auto max-w-[80%]">
                I want to track my shipment.
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-600 max-w-[80%]">
                Sure! Please provide your tracking ID or visit our Tracking page.
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-secondary outline-none"
              />
              <button className="bg-secondary text-primary p-2 rounded-xl hover:bg-primary hover:text-white transition-all">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-primary text-white rounded-full shadow-2xl hover:bg-secondary hover:text-primary transition-all flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Package, MapPin, Truck, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

const steps = [
  { id: 'ordered', label: 'Ordered', icon: <Package />, date: 'Oct 12, 2023 - 10:30 AM', status: 'completed' },
  { id: 'shipped', label: 'Shipped', icon: <Truck />, date: 'Oct 13, 2023 - 02:15 PM', status: 'completed' },
  { id: 'out', label: 'Out for Delivery', icon: <Clock />, date: 'Oct 15, 2023 - 09:00 AM', status: 'current' },
  { id: 'delivered', label: 'Delivered', icon: <CheckCircle2 />, date: 'Pending', status: 'upcoming' },
];

export default function Tracking() {
  const [trackingId, setTrackingId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-display font-bold text-primary">Track Your Shipment</h1>
          <p className="text-gray-600">Enter your tracking number to see the real-time status of your delivery.</p>
        </div>

        {/* Search Box */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mb-12">
          <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter Tracking ID (e.g. TRK123456789)"
                className="w-full bg-background border-none rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-secondary text-lg"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="btn-primary md:px-12 py-4 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSearching ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                >
                  <Clock size={20} />
                </motion.div>
              ) : 'Track Now'}
            </button>
          </form>
        </div>

        {/* Results */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Summary Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 grid md:grid-cols-3 gap-8">
              <div className="space-y-1">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Tracking ID</p>
                <p className="text-xl font-bold text-primary">{trackingId}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Estimated Delivery</p>
                <p className="text-xl font-bold text-primary">Oct 16, 2023</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Current Status</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-bold">
                  Out for Delivery
                </span>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-12">Shipment History</h3>
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-100"></div>

                <div className="space-y-12">
                  {steps.map((step, index) => (
                    <div key={step.id} className="relative flex gap-8">
                      <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-md ${
                        step.status === 'completed' ? 'bg-green-500 text-white' :
                        step.status === 'current' ? 'bg-primary text-white ring-4 ring-primary/20' :
                        'bg-white text-gray-300 border-2 border-gray-100'
                      }`}>
                        {step.status === 'completed' ? <CheckCircle2 size={24} /> : step.icon}
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                          <h4 className={`text-lg font-bold ${step.status === 'upcoming' ? 'text-gray-400' : 'text-primary'}`}>
                            {step.label}
                          </h4>
                          <span className="text-sm text-gray-500">{step.date}</span>
                        </div>
                        <p className="text-gray-500 mt-1">
                          {step.id === 'ordered' && 'Your order has been confirmed and is being processed.'}
                          {step.id === 'shipped' && 'Package has left our warehouse and is in transit.'}
                          {step.id === 'out' && 'Courier is on the way to your delivery address.'}
                          {step.id === 'delivered' && 'Package will be handed over to you soon.'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-4 rounded-3xl shadow-lg border border-gray-100 overflow-hidden h-80 relative">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200"
                alt="Map"
                className="w-full h-full object-cover rounded-2xl opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 text-center">
                  <MapPin className="text-primary mx-auto mb-2" size={32} />
                  <p className="font-bold text-primary">Live Tracking Map</p>
                  <p className="text-sm text-gray-500">Currently in Transport City Area</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

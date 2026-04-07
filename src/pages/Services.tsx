import React from 'react';
import { motion } from 'motion/react';
import { Truck, Package, Globe, Clock, Shield, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'cargo-delivery',
    title: 'Cargo Delivery',
    icon: <Package size={40} />,
    desc: 'Heavy-duty transportation for large-scale shipments across land, sea, and air.',
    features: ['Real-time tracking', 'Customs clearance', 'Door-to-door delivery', 'Insurance coverage'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'global-logistics',
    title: 'Global Logistics',
    icon: <Globe size={40} />,
    desc: 'Comprehensive supply chain solutions tailored for international trade and distribution.',
    features: ['Inventory management', 'Warehousing', 'Order fulfillment', 'Route optimization'],
    image: 'https://images.unsplash.com/photo-1494412574743-01948567613d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'ride-booking',
    title: 'Ride Booking',
    icon: <Truck size={40} />,
    desc: 'Reliable and comfortable passenger transportation for individuals and corporate clients.',
    features: ['Professional drivers', 'Clean vehicles', 'Scheduled pickups', 'Corporate accounts'],
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'same-day-delivery',
    title: 'Same Day Delivery',
    icon: <Clock size={40} />,
    desc: 'Urgent delivery services for documents, parcels, and small goods within city limits.',
    features: ['Express courier', 'Proof of delivery', 'Secure handling', 'Local expertise'],
    image: 'https://images.unsplash.com/photo-1612431659851-3871f2bac3c7?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h1 className="text-5xl font-display font-bold text-primary">Our Logistics Solutions</h1>
          <p className="text-lg text-gray-600">
            We provide a wide range of transportation and logistics services designed to help you move anything, anywhere, at any time.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:items-center gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className="flex-1 space-y-8">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-secondary border border-gray-100">
                  {service.icon}
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-display font-bold text-primary">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="text-accent" size={20} />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link to={`/services/${service.id}`} className="btn-primary">Learn More</Link>
                  <Link to="/contact" className="btn-outline">Book Now</Link>
                </div>
              </div>

              <div className="flex-1">
                <div className="relative group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-[2.5rem] shadow-2xl w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Services Grid */}
        <div className="mt-32">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-4">More Specialized Solutions</h2>
              <p className="text-gray-300">Tailored services for your unique transportation requirements.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Temperature Controlled', icon: <Shield size={32} />, desc: 'Safe transport for perishable goods and pharmaceuticals.' },
                { title: 'Hazardous Materials', icon: <Shield size={32} />, desc: 'Certified handling and transport of dangerous goods.' },
                { title: 'Project Logistics', icon: <MapPin size={32} />, desc: 'End-to-end management for complex, large-scale projects.' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all">
                  <div className="text-secondary mb-6">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

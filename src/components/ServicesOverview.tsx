import React from 'react';
import { motion } from 'motion/react';
import { Truck, Package, Globe, Clock, Shield, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'cargo-delivery',
    icon: <Package className="w-8 h-8" />,
    title: 'Cargo Delivery',
    description: 'Safe and efficient transportation of large shipments across borders with real-time tracking.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'global-logistics',
    icon: <Globe className="w-8 h-8" />,
    title: 'Global Logistics',
    description: 'End-to-end supply chain management solutions for businesses of all sizes worldwide.',
    color: 'bg-green-50 text-green-600',
  },
  {
    id: 'ride-booking',
    icon: <Truck className="w-8 h-8" />,
    title: 'Ride Booking',
    description: 'Quick and comfortable ride-hailing services for your daily commute or special trips.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    id: 'same-day-delivery',
    icon: <Clock className="w-8 h-8" />,
    title: 'Same Day Delivery',
    description: 'Urgent delivery services for documents and small packages within the city limits.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    id: 'secure-warehousing',
    icon: <Shield className="w-8 h-8" />,
    title: 'Secure Warehousing',
    description: 'State-of-the-art storage facilities with 24/7 monitoring and inventory management.',
    color: 'bg-red-50 text-red-600',
  },
  {
    id: 'local-distribution',
    icon: <MapPin className="w-8 h-8" />,
    title: 'Local Distribution',
    description: 'Optimized last-mile delivery services to ensure your products reach customers on time.',
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-secondary/10 text-secondary font-black rounded-lg text-sm uppercase tracking-widest"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display font-bold text-primary"
          >
            Logistics Solutions for <br />
            <span className="text-gradient">Every Need</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-xl leading-relaxed"
          >
            We offer a wide range of transportation and logistics solutions designed to meet the dynamic needs of modern businesses.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] hover-lift group relative overflow-hidden"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg ${service.color}`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4 text-primary group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                {service.description}
              </p>
              
              <Link to={service.id === 'secure-warehousing' || service.id === 'local-distribution' ? '/services' : `/services/${service.id}`} className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm hover:text-secondary transition-all group/link">
                Learn More 
                <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Users, Truck, Globe, Award } from 'lucide-react';

const stats = [
  { icon: <Users size={32} />, value: '50K+', label: 'Happy Clients' },
  { icon: <Truck size={32} />, value: '1M+', label: 'Deliveries Done' },
  { icon: <Globe size={32} />, value: '120+', label: 'Countries Covered' },
  { icon: <Award size={32} />, value: '25+', label: 'Years Experience' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              className="text-center space-y-4"
            >
              <div className="inline-flex p-4 bg-white/10 rounded-2xl text-secondary mb-2">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold">{stat.value}</h3>
              <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

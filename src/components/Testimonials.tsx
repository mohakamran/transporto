import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'E-commerce Owner',
    content: 'TransPorto has completely transformed our shipping process. Their tracking system is incredibly accurate, and our customers are happier than ever.',
    image: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Michael Chen',
    role: 'Logistics Manager',
    content: 'The level of professionalism and reliability we get from TransPorto is unmatched. They handle our global cargo with extreme care and precision.',
    image: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Small Business Owner',
    content: 'Fast, affordable, and always on time. Their same-day delivery service has saved us multiple times. Highly recommended!',
    image: 'https://i.pravatar.cc/150?u=elena',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-display font-bold text-primary">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what businesses and individuals around the world think about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-8 text-secondary/20 w-12 h-12" />
              <div className="flex gap-1 text-secondary mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

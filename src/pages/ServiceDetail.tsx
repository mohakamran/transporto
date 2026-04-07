import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Truck, Package, Globe, Clock, Shield, MapPin, 
  CheckCircle2, ArrowRight, BarChart3, Zap, 
  ShieldCheck, Headphones, CreditCard, Box
} from 'lucide-react';

const serviceData = {
  'cargo-delivery': {
    title: 'Cargo Delivery',
    icon: <Package size={48} />,
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    description: 'Our Cargo Delivery service is designed for businesses that need to move large quantities of goods efficiently. Whether it is raw materials or finished products, we ensure safe transit across all major routes.',
    features: [
      { title: 'Heavy Load Capacity', desc: 'Specialized vehicles for oversized and heavy cargo.', icon: <Box /> },
      { title: 'Multi-modal Transport', desc: 'Seamless transition between sea, air, and land.', icon: <Globe /> },
      { title: 'Real-time Monitoring', desc: 'GPS tracking and temperature monitoring for sensitive goods.', icon: <BarChart3 /> },
      { title: 'Customs Clearance', desc: 'Expert handling of all international shipping documentation.', icon: <ShieldCheck /> }
    ],
    benefits: [
      'Reduced transit times through optimized routing.',
      'Comprehensive insurance coverage for all shipments.',
      'Competitive bulk shipping rates.',
      'Dedicated account manager for corporate clients.'
    ],
    process: [
      { step: '01', title: 'Booking', desc: 'Specify cargo type, weight, and destination.' },
      { step: '02', title: 'Pickup', desc: 'Our team arrives for professional loading.' },
      { step: '03', title: 'Transit', desc: 'Secure transport with live updates.' },
      { step: '04', title: 'Delivery', desc: 'On-time arrival at the final destination.' }
    ]
  },
  'global-logistics': {
    title: 'Global Logistics',
    icon: <Globe size={48} />,
    heroImage: 'https://images.unsplash.com/photo-1494412574743-01948567613d?auto=format&fit=crop&q=80&w=1200',
    description: 'Navigate the complexities of international trade with our Global Logistics solutions. We manage the entire supply chain, from warehousing to final distribution, across 120+ countries.',
    features: [
      { title: 'Supply Chain Optimization', desc: 'End-to-end visibility and efficiency analysis.', icon: <Zap /> },
      { title: 'Warehousing Solutions', desc: 'Strategic storage locations worldwide.', icon: <Box /> },
      { title: 'Inventory Management', desc: 'Real-time stock tracking and automated reordering.', icon: <BarChart3 /> },
      { title: 'Risk Management', desc: 'Proactive mitigation of global shipping risks.', icon: <Shield /> }
    ],
    benefits: [
      'Access to a global network of logistics partners.',
      'Scalable solutions that grow with your business.',
      'Compliance with international shipping regulations.',
      'Cost-effective warehousing and distribution.'
    ],
    process: [
      { step: '01', title: 'Analysis', desc: 'We audit your current supply chain.' },
      { step: '02', title: 'Strategy', desc: 'Custom logistics plan development.' },
      { step: '03', title: 'Execution', desc: 'Implementation of optimized workflows.' },
      { step: '04', title: 'Optimization', desc: 'Continuous performance monitoring.' }
    ]
  },
  'ride-booking': {
    title: 'Ride Booking',
    icon: <Truck size={48} />,
    heroImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200',
    description: 'Experience premium passenger transportation with our Ride Booking service. From executive airport transfers to daily employee commutes, we provide safe, clean, and punctual rides.',
    features: [
      { title: 'Professional Drivers', desc: 'Vetted and trained for superior service.', icon: <ShieldCheck /> },
      { title: 'Premium Fleet', desc: 'Modern vehicles with high comfort standards.', icon: <Truck /> },
      { title: 'Scheduled Pickups', desc: 'Never wait with our advanced booking system.', icon: <Clock /> },
      { title: 'Corporate Billing', desc: 'Simplified expense management for businesses.', icon: <CreditCard /> }
    ],
    benefits: [
      'Punctuality guaranteed for every ride.',
      'Fixed pricing with no hidden surge charges.',
      '24/7 availability for urgent bookings.',
      'Safe and sanitized vehicles for every trip.'
    ],
    process: [
      { step: '01', title: 'Request', desc: 'Book via app or web with pickup details.' },
      { step: '02', title: 'Confirmation', desc: 'Receive driver details and ETA.' },
      { step: '03', title: 'The Ride', desc: 'Enjoy a comfortable and safe journey.' },
      { step: '04', title: 'Arrival', desc: 'Reach your destination on time.' }
    ]
  },
  'same-day-delivery': {
    title: 'Same Day Delivery',
    icon: <Clock size={48} />,
    heroImage: 'https://images.unsplash.com/photo-1612431659851-3871f2bac3c7?auto=format&fit=crop&q=80&w=1200',
    description: 'When time is of the essence, our Same Day Delivery service ensures your urgent parcels and documents reach their destination within hours. Perfect for e-commerce and legal documents.',
    features: [
      { title: 'Express Courier', desc: 'Dedicated riders for immediate dispatch.', icon: <Zap /> },
      { title: 'Proof of Delivery', icon: <CheckCircle2 />, desc: 'Instant digital signature and photo confirmation.' },
      { title: 'Secure Handling', icon: <Shield />, desc: 'Special care for fragile or sensitive items.' },
      { title: 'Local Expertise', icon: <MapPin />, desc: 'Riders who know the city shortcuts.' }
    ],
    benefits: [
      'Meet tight deadlines with confidence.',
      'Real-time tracking from pickup to drop-off.',
      'Flexible pickup windows throughout the day.',
      'Ideal for urgent medical or legal documents.'
    ],
    process: [
      { step: '01', title: 'Pickup Request', desc: 'Instant dispatch upon booking.' },
      { step: '02', title: 'Collection', desc: 'Parcel collected within 30 minutes.' },
      { step: '03', title: 'Express Route', desc: 'Direct delivery with no stops.' },
      { step: '04', title: 'Confirmation', desc: 'Instant delivery notification.' }
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceData[id as keyof typeof serviceData] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-6"
          >
            <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center text-primary shadow-2xl">
              {service.icon}
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {service.description}
            </p>
            <div className="flex gap-4 pt-4">
              <Link to="/contact" className="btn-secondary px-10 py-4 text-lg">
                Book This Service
              </Link>
              <Link to="/pricing" className="btn-outline border-white text-white hover:bg-white hover:text-primary px-10 py-4 text-lg">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">Key Features</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Discover the specialized capabilities that make our {service.title} service industry-leading.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-background border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{feature.title}</h4>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Process */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-display font-bold text-primary">Why Choose Our {service.title}?</h2>
            <div className="space-y-4">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-accent/10 p-1 rounded-full text-accent">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-lg text-gray-600 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <div className="p-8 bg-white rounded-[2rem] shadow-xl border border-gray-100 flex items-center gap-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                  <Headphones size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary">Need a custom solution?</h4>
                  <p className="text-gray-500">Our experts are ready to help you.</p>
                  <Link to="/contact" className="text-secondary font-bold hover:underline mt-1 inline-block">Talk to an expert →</Link>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-12">
            <h3 className="text-3xl font-display font-bold text-primary text-center lg:text-left">Our Delivery Process</h3>
            <div className="space-y-8">
              {service.process.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl font-display font-bold text-secondary shrink-0 group-hover:bg-secondary group-hover:text-primary transition-colors">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold">Ready to start with {service.title}?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied clients who trust TransPorto for their most critical logistics needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-secondary px-12 py-5 text-xl flex items-center gap-2">
                  Book Now <ArrowRight size={24} />
                </Link>
                <Link to="/pricing" className="btn-outline border-white text-white hover:bg-white hover:text-primary px-12 py-5 text-xl">
                  View Rates
                </Link>
              </div>
            </div>
            {/* Background shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

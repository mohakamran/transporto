import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, History, Award, Users, Globe, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Our Story</span>
            <h1 className="text-5xl font-display font-bold text-primary">Moving the World, One Delivery at a Time</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 1998, TransPorto started with a single truck and a vision to simplify logistics. Today, we are a global leader in transportation, serving over 120 countries with a fleet of thousands and a team of dedicated professionals.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-4xl font-display font-bold text-primary">25+</p>
                <p className="text-gray-500 font-medium">Years of Excellence</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-display font-bold text-primary">10K+</p>
                <p className="text-gray-500 font-medium">Global Employees</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000"
              alt="Our Team"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary p-8 rounded-2xl shadow-xl">
              <Award className="text-primary w-12 h-12" />
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-primary p-12 rounded-[2.5rem] text-white space-y-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-secondary">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-display font-bold">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To provide innovative, reliable, and sustainable logistics solutions that empower businesses to grow and connect people across the globe with speed and security.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-100 space-y-6">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-display font-bold text-primary">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become the world's most trusted and technologically advanced transportation platform, setting new standards for efficiency and customer satisfaction in the logistics industry.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24 py-16 bg-white rounded-[3rem] px-8 md:px-16 shadow-sm border border-gray-100">
          <h2 className="text-4xl font-display font-bold text-primary text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Reliability', desc: 'We deliver on our promises, ensuring your goods reach their destination safely and on time.', icon: <Shield className="text-secondary" size={32} /> },
              { title: 'Innovation', desc: 'We continuously invest in technology to optimize our operations and provide better service.', icon: <History className="text-secondary" size={32} /> },
              { title: 'Integrity', desc: 'We conduct our business with honesty and transparency in every interaction.', icon: <Users className="text-secondary" size={32} /> }
            ].map((value, i) => (
              <div key={i} className="space-y-4 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-primary">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h2 className="text-4xl font-display font-bold text-primary text-center mb-16">Our Journey</h2>
          <div className="space-y-12 relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-100 before:hidden md:before:block">
            {[
              { year: '1998', title: 'The Beginning', desc: 'Started with a single delivery van in Transport City.' },
              { year: '2005', title: 'National Expansion', desc: 'Covered all major cities with a fleet of 500+ vehicles.' },
              { year: '2012', title: 'Going Global', desc: 'Opened our first international office and started air cargo services.' },
              { year: '2020', title: 'Tech Revolution', desc: 'Launched our AI-powered tracking and logistics platform.' },
              { year: '2024', title: 'Sustainability Goal', desc: 'Committed to 100% electric fleet for last-mile delivery by 2030.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`space-y-2 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-secondary font-bold text-2xl">{item.year}</span>
                    <h4 className="text-xl font-bold text-primary">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-secondary rounded-full ring-4 ring-secondary/20 relative z-10 hidden md:block"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-display font-bold text-primary text-center mb-16">Meet Our Leaders</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'David Wilson', role: 'CEO & Founder', img: 'https://i.pravatar.cc/150?u=david' },
              { name: 'Sarah Miller', role: 'Chief Operations Officer', img: 'https://i.pravatar.cc/150?u=sarah_m' },
              { name: 'James Anderson', role: 'Head of Logistics', img: 'https://i.pravatar.cc/150?u=james' },
              { name: 'Emily Chen', role: 'Chief Technology Officer', img: 'https://i.pravatar.cc/150?u=emily' },
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center space-y-4"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-secondary/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-primary text-lg">{member.name}</h4>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-24 py-20 bg-primary rounded-[4rem] px-8 md:px-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-display font-bold mb-16">What Our Partners Say</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { quote: "TransPorto has transformed our supply chain efficiency. Their real-time tracking is a game-changer for our global operations.", author: "John Stevens", company: "Global Retail Corp" },
                { quote: "Reliable, fast, and professional. We've been working with them for 5 years and they've never missed a deadline.", author: "Linda Garcia", company: "Tech Logistics Ltd" }
              ].map((t, i) => (
                <div key={i} className="space-y-6 p-10 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10">
                  <p className="text-xl italic text-gray-300">"{t.quote}"</p>
                  <div>
                    <p className="font-bold text-secondary">{t.author}</p>
                    <p className="text-sm text-gray-400">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8 bg-secondary p-16 rounded-[3rem] shadow-2xl shadow-secondary/20">
          <h2 className="text-4xl font-display font-bold text-primary">Ready to Experience the Future of Logistics?</h2>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto font-medium">
            Join thousands of businesses that trust TransPorto for their global transportation needs.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn-primary px-12 py-5 text-lg">Get a Custom Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

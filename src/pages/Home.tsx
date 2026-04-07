import React from 'react';
import { motion } from 'motion/react';
import Hero from '@/src/components/Hero';
import ServicesOverview from '@/src/components/ServicesOverview';
import Stats from '@/src/components/Stats';
import Testimonials from '@/src/components/Testimonials';
import { Smartphone, Apple, PlayCircle, ArrowRight, Shield, Clock, Globe, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Why Choose Us */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-1 bg-primary/5 text-primary font-black rounded-lg text-xs uppercase tracking-widest"
              >
                Our Advantage
              </motion.div>
              <h2 className="text-5xl font-display font-bold text-primary leading-tight">
                Logistics Solutions <br />
                <span className="text-secondary italic">Redefined</span> for You.
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed">
                We combine cutting-edge technology with decades of logistics experience to provide a superior transportation experience that scales with your business.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: 'Real-time Tracking', desc: 'Know exactly where your shipment is at any moment.', icon: <Search className="text-secondary" /> },
                { title: 'Global Network', desc: 'Reach any corner of the world with our network.', icon: <Globe className="text-secondary" /> },
                { title: '24/7 Support', desc: 'Our dedicated team is always here to help you.', icon: <Clock className="text-secondary" /> },
                { title: 'Secure Handling', desc: 'Your goods are insured and handled with care.', icon: <Shield className="text-secondary" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3 p-6 rounded-3xl bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-primary text-lg">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200"
                alt="Logistics Team"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 hidden md:flex items-center gap-6"
            >
              <div className="bg-secondary/20 p-4 rounded-2xl text-secondary">
                <PlayCircle size={40} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-black uppercase tracking-widest mb-1">Process Video</p>
                <p className="font-black text-primary text-xl">Watch How We Work</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ServicesOverview />

      {/* Partners Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-400 font-bold uppercase tracking-widest text-sm mb-10">Trusted by Global Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
            {['FedEx', 'DHL', 'Amazon', 'Walmart', 'Maersk'].map((partner) => (
              <span key={partner} className="text-3xl font-display font-black text-primary tracking-tighter">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Globe size={800} className="absolute -right-1/4 -top-1/4 text-white" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-white"
            >
              <div className="inline-block px-4 py-1 bg-secondary text-primary font-black rounded-lg text-sm uppercase tracking-widest">
                Global Coverage
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-bold leading-tight">
                Connecting the <br />
                <span className="text-secondary italic">World</span> Seamlessly
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                With over 500+ hubs across 120 countries, we ensure your cargo reaches its destination through the most optimized routes.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <p className="text-4xl font-display font-black text-secondary">120+</p>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-2">Countries Covered</p>
                </div>
                <div>
                  <p className="text-4xl font-display font-black text-secondary">500+</p>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-2">Global Hubs</p>
                </div>
              </div>
              <Link to="/about" className="btn-secondary inline-flex items-center gap-2 px-10 py-5">
                Explore Our Network <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-dark p-4 rounded-[3rem] border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000"
                  alt="Global Map"
                  className="rounded-[2.5rem] w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Animated Pings on Map */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-secondary rounded-full animate-ping"></div>
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-secondary rounded-full animate-ping delay-700"></div>
              <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-secondary rounded-full animate-ping delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-secondary font-black uppercase tracking-[0.3em] text-sm"
            >
              Premium Features
            </motion.span>
            <h2 className="text-5xl font-display font-bold text-primary">Why We Are The Best</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Large Feature */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="md:col-span-2 glass-card p-12 rounded-[3rem] relative overflow-hidden group"
            >
              <div className="relative z-10 space-y-6 max-w-md">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl">
                  <Shield size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-primary">Unmatched Security & Insurance</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Every shipment is protected by our comprehensive insurance policy and monitored 24/7 by our security operations center.
                </p>
                <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                  Learn Our Security Protocols <ArrowRight size={20} />
                </Link>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Shield size={400} className="translate-x-1/4 translate-y-1/4" />
              </div>
            </motion.div>

            {/* Small Feature 1 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-secondary p-12 rounded-[3rem] text-primary space-y-6 flex flex-col justify-center shadow-2xl shadow-secondary/20"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold">24/7 Express Support</h3>
              <p className="text-primary/70 font-medium">
                Our dedicated support team is always available to assist you with any logistics challenge.
              </p>
            </motion.div>

            {/* Small Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-accent p-12 rounded-[3rem] text-white space-y-6 flex flex-col justify-center shadow-2xl shadow-accent/20"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-xl">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold">Global Network Reach</h3>
              <p className="text-white/80 font-medium">
                Connecting over 120 countries with seamless air, sea, and land transportation routes.
              </p>
            </motion.div>

            {/* Medium Feature */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="md:col-span-2 glass-card p-12 rounded-[3rem] flex flex-col md:flex-row items-center gap-12 group"
            >
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl">
                  <Smartphone size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-primary">AI-Powered Mobile App</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Manage your entire logistics pipeline from the palm of your hand with our award-winning mobile application.
                </p>
                <div className="flex gap-4">
                  <Apple size={32} className="text-primary/20 hover:text-primary transition-colors cursor-pointer" />
                  <PlayCircle size={32} className="text-primary/20 hover:text-primary transition-colors cursor-pointer" />
                </div>
              </div>
              <div className="flex-1 relative">
                <img
                  src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=600"
                  alt="App Preview"
                  className="rounded-3xl shadow-2xl rotate-6 group-hover:rotate-0 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-display font-bold text-primary">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our streamlined process ensures your goods are handled with care and delivered on time, every time.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/5 hidden md:block -translate-y-12"></div>
            {[
              { step: '01', title: 'Book Service', desc: 'Choose your service and provide pickup details.' },
              { step: '02', title: 'Pickup Goods', desc: 'Our team collects your items from your location.' },
              { step: '03', title: 'In Transit', desc: 'Track your shipment in real-time as it moves.' },
              { step: '04', title: 'Safe Delivery', desc: 'Your goods are delivered safely to the destination.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-6 relative z-10"
              >
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto text-3xl font-display font-bold text-secondary border border-gray-50">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-primary">{item.title}</h4>
                <p className="text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials />

      {/* App Download Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]">
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div className="text-white space-y-10">
                <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-secondary font-black text-xs uppercase tracking-widest">
                  Mobile First
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                  Logistics in Your <br />
                  <span className="text-secondary">Pocket.</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Manage your entire logistics pipeline, book rides, and track deliveries in real-time with our award-winning mobile application.
                </p>
                <div className="flex flex-wrap gap-6">
                  <button className="flex items-center gap-4 bg-white text-primary px-8 py-4 rounded-2xl font-black hover:bg-secondary transition-all shadow-xl active:scale-95">
                    <Apple size={28} />
                    <div className="text-left">
                      <p className="text-[10px] uppercase font-black leading-none opacity-60">Download on</p>
                      <p className="text-xl leading-none">App Store</p>
                    </div>
                  </button>
                  <button className="flex items-center gap-4 bg-white text-primary px-8 py-4 rounded-2xl font-black hover:bg-secondary transition-all shadow-xl active:scale-95">
                    <Smartphone size={28} />
                    <div className="text-left">
                      <p className="text-[10px] uppercase font-black leading-none opacity-60">Get it on</p>
                      <p className="text-xl leading-none">Google Play</p>
                    </div>
                  </button>
                </div>
                <div className="flex items-center gap-6 pt-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        src={`https://picsum.photos/seed/user${i}/100/100`}
                        alt="User"
                        className="w-12 h-12 rounded-full border-4 border-primary"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-gray-400">
                    <span className="text-white">10M+</span> Active Users Worldwide
                  </p>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
                    alt="Mobile App"
                    className="w-[400px] mx-auto rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[12px] border-white/10 rotate-6 hover:rotate-0 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating App Icons */}
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-10 -right-10 glass-card p-6 rounded-3xl shadow-2xl"
                  >
                    <Smartphone className="text-secondary w-10 h-10" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
            {/* Background shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]"></div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Ready to Move Your Goods?</h2>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto font-medium">
            Join thousands of businesses that trust TransPorto for their logistics and transportation needs.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn-primary flex items-center gap-2">
              Get Started Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

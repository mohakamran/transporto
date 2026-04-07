import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'How AI is Revolutionizing Last-Mile Delivery',
    excerpt: 'Discover how artificial intelligence is optimizing routes and reducing delivery times in urban areas.',
    category: 'Technology',
    author: 'David Wilson',
    date: 'Oct 15, 2023',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: '5 Tips for Reducing Your Shipping Costs',
    excerpt: 'Learn effective strategies to streamline your logistics and save money on every shipment.',
    category: 'Business',
    author: 'Sarah Miller',
    date: 'Oct 12, 2023',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'The Future of Sustainable Logistics',
    excerpt: 'Exploring the shift towards electric vehicles and eco-friendly packaging in the transportation industry.',
    category: 'Sustainability',
    author: 'James Anderson',
    date: 'Oct 08, 2023',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Navigating Global Supply Chain Challenges',
    excerpt: 'How to build resilience in your supply chain during times of global economic uncertainty.',
    category: 'Logistics',
    author: 'Emily Chen',
    date: 'Oct 05, 2023',
    image: 'https://images.unsplash.com/photo-1494412574743-01948567613d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'Improving Customer Satisfaction with Real-Time Tracking',
    excerpt: 'Why transparency is the key to building trust with your customers in the delivery business.',
    category: 'Customer Service',
    author: 'Michael Chen',
    date: 'Sep 28, 2023',
    image: 'https://images.unsplash.com/photo-1556740734-7f95894513c1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    title: 'Warehousing Strategies for E-commerce Growth',
    excerpt: 'Scaling your storage and fulfillment operations to keep up with rapidly increasing online orders.',
    category: 'E-commerce',
    author: 'Elena Rodriguez',
    date: 'Sep 22, 2023',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Blog() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-5xl font-display font-bold text-primary">TransPorto Blog</h1>
            <p className="text-lg text-gray-600">
              Insights, news, and expert advice from the world of logistics and transportation.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-[2.5rem] overflow-hidden mb-16 group shadow-2xl"
        >
          <div className="absolute inset-0">
            <img
              src={posts[0].image}
              alt={posts[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
          </div>
          <div className="relative z-10 p-8 md:p-16 flex flex-col justify-end min-h-[500px] text-white space-y-6">
            <div className="flex items-center gap-4">
              <span className="bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                {posts[0].category}
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-200">
                <Calendar size={16} /> {posts[0].date}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight max-w-3xl">
              {posts[0].title}
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl">
              {posts[0].excerpt}
            </p>
            <Link to={`/blog/${posts[0].id}`} className="btn-secondary w-fit flex items-center gap-2">
              Read Full Article <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-xl transition-all"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 space-y-4">
                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-primary group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="pt-4 mt-auto">
                  <Link to={`/blog/${post.id}`} className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    Read More <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center gap-2">
          <button className="w-10 h-10 rounded-xl bg-primary text-white font-bold">1</button>
          <button className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-primary font-bold hover:bg-gray-50">2</button>
          <button className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-primary font-bold hover:bg-gray-50">3</button>
          <button className="px-4 h-10 rounded-xl bg-white border border-gray-200 text-primary font-bold hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  );
}

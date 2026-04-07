import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What areas do you cover?',
        a: 'We provide local delivery services within major metropolitan areas and global cargo shipping to over 120 countries worldwide.',
      },
      {
        q: 'How can I track my shipment?',
        a: 'You can track your shipment in real-time by entering your tracking ID on our Tracking page or through our mobile application.',
      },
      {
        q: 'What are your working hours?',
        a: 'Our customer support is available 24/7. Physical warehouse operations typically run from 8:00 AM to 10:00 PM local time.',
      },
    ],
  },
  {
    category: 'Shipping & Delivery',
    questions: [
      {
        q: 'What is the maximum weight for cargo?',
        a: 'For standard cargo delivery, we handle up to 5,000kg. For larger shipments, please contact our project logistics team for a custom solution.',
      },
      {
        q: 'Do you offer same-day delivery?',
        a: 'Yes, we offer same-day delivery for small parcels and documents within city limits, provided the order is placed before 12:00 PM.',
      },
      {
        q: 'Are my goods insured during transport?',
        a: 'Yes, all shipments are covered by our basic insurance. We also offer premium insurance options for high-value goods.',
      },
    ],
  },
  {
    category: 'Pricing & Payments',
    questions: [
      {
        q: 'How do I get a custom quote?',
        a: 'You can request a custom quote through our Pricing page or by contacting our sales team directly with your shipment details.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards, bank transfers, and digital wallets like PayPal and Apple Pay.',
      },
    ],
  },
];

function AccordionItem({ question, answer }: { question: string; answer: string; key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-secondary transition-colors group"
      >
        <span className={`text-lg font-bold ${isOpen ? 'text-secondary' : 'text-primary'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-lg transition-all ${isOpen ? 'bg-secondary text-primary' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex p-3 bg-secondary/20 text-secondary rounded-2xl mb-2">
            <HelpCircle size={32} />
          </div>
          <h1 className="text-5xl font-display font-bold text-primary">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about our services and how we work.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-16">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
          <input
            type="text"
            placeholder="Search for answers..."
            className="w-full bg-white border-none rounded-[2rem] pl-16 pr-8 py-6 shadow-xl focus:ring-2 focus:ring-secondary outline-none text-lg"
          />
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-display font-bold text-primary mb-8 pb-4 border-b border-gray-100">
                {category.category}
              </h2>
              <div className="divide-y divide-gray-100">
                {category.questions.map((item, i) => (
                  <AccordionItem key={i} question={item.q} answer={item.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-20 bg-primary rounded-[2.5rem] p-12 text-center text-white space-y-8 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-display font-bold">Still have questions?</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              If you couldn't find the answer you were looking for, please feel free to contact our support team.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link to="/contact" className="btn-secondary flex items-center gap-2">
                Contact Support <MessageCircle size={20} />
              </Link>
              <a href="tel:+15551234567" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                Call Us Now
              </a>
            </div>
          </div>
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$29',
    period: '/month',
    desc: 'Perfect for individuals and small local deliveries.',
    features: [
      'Up to 10 deliveries/month',
      'Real-time tracking',
      'Standard support',
      'Mobile app access',
      'Basic insurance',
    ],
    recommended: false,
  },
  {
    name: 'Standard',
    price: '$99',
    period: '/month',
    desc: 'Ideal for growing businesses with regular shipping needs.',
    features: [
      'Up to 50 deliveries/month',
      'Priority tracking',
      '24/7 Priority support',
      'Advanced analytics',
      'Full insurance coverage',
      'Custom delivery windows',
    ],
    recommended: true,
  },
  {
    name: 'Premium',
    price: '$299',
    period: '/month',
    desc: 'Comprehensive solution for large enterprises.',
    features: [
      'Unlimited deliveries',
      'Dedicated account manager',
      'Global logistics network',
      'Custom API integration',
      'Warehouse storage (500sqft)',
      'White-label tracking',
    ],
    recommended: false,
  },
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl font-display font-bold text-primary">Simple, Transparent Pricing</h1>
          <p className="text-gray-600 text-lg">
            Choose the plan that best fits your business needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl bg-white border ${
                plan.recommended ? 'border-secondary ring-4 ring-secondary/10 shadow-2xl' : 'border-gray-100 shadow-xl'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.desc}</p>
              </div>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-display font-bold text-primary">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="bg-green-100 text-green-600 p-1 rounded-full">
                      <Check size={14} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                plan.recommended ? 'bg-secondary text-primary hover:bg-secondary/90' : 'bg-primary text-white hover:bg-primary/90'
              }`}>
                Choose {plan.name} <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-24 overflow-x-auto">
          <h2 className="text-3xl font-display font-bold text-primary text-center mb-12">Compare Features</h2>
          <table className="w-full text-left border-collapse bg-white rounded-3xl shadow-xl overflow-hidden">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-6 font-display font-bold">Features</th>
                <th className="p-6 font-display font-bold text-center">Basic</th>
                <th className="p-6 font-display font-bold text-center">Standard</th>
                <th className="p-6 font-display font-bold text-center">Premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Monthly Deliveries', basic: '10', standard: '50', premium: 'Unlimited' },
                { name: 'Real-time Tracking', basic: 'Yes', standard: 'Priority', premium: 'Advanced' },
                { name: 'Support', basic: 'Email', standard: '24/7 Priority', premium: 'Dedicated Manager' },
                { name: 'Insurance', basic: 'Basic', standard: 'Full', premium: 'Custom' },
                { name: 'API Access', basic: 'No', standard: 'Limited', premium: 'Full' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-medium text-primary">{row.name}</td>
                  <td className="p-6 text-center text-gray-600">{row.basic}</td>
                  <td className="p-6 text-center text-gray-600">{row.standard}</td>
                  <td className="p-6 text-center text-gray-600">{row.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

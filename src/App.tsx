/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import ScrollToTopButton from '@/src/components/ScrollToTopButton';
import ChatWidget from '@/src/components/ChatWidget';

// Lazy load pages for better performance
const Home = React.lazy(() => import('@/src/pages/Home'));
const About = React.lazy(() => import('@/src/pages/About'));
const Services = React.lazy(() => import('@/src/pages/Services'));
const Tracking = React.lazy(() => import('@/src/pages/Tracking'));
const Pricing = React.lazy(() => import('@/src/pages/Pricing'));
const Blog = React.lazy(() => import('@/src/pages/Blog'));
const FAQ = React.lazy(() => import('@/src/pages/FAQ'));
const Contact = React.lazy(() => import('@/src/pages/Contact'));
const ServiceDetail = React.lazy(() => import('@/src/pages/ServiceDetail'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-12 h-12 border-4 border-primary border-t-secondary rounded-full animate-spin"></div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/tracking" element={<Tracking />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <ScrollToTopButton />
        <ChatWidget />
      </div>
    </Router>
  );
}


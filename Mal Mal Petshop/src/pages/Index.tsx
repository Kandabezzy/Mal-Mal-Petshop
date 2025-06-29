
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import ProductsPage from '../components/pages/ProductsPage';
import PaymentPage from '../components/pages/PaymentPage';
import AboutPage from '../components/pages/AboutPage';
import FeedbackPage from '../components/pages/FeedbackPage';
import Footer from '../components/Footer';
import BackgroundEffects from '../components/BackgroundEffects';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('beranda');

  return (
    <div className="min-h-screen bg-gradient-elegant animate-gradient-calm relative overflow-hidden">
      <BackgroundEffects />
      
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <AnimatePresence mode="wait">
        {currentPage === 'beranda' && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <HeroSection setCurrentPage={setCurrentPage} />
            <ServicesSection setCurrentPage={setCurrentPage} />
            <ContactSection />
          </motion.div>
        )}

        {currentPage === 'produk' && (
          <motion.div
            key="products"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
          >
            <ProductsPage setCurrentPage={setCurrentPage} />
          </motion.div>
        )}

        {currentPage === 'pembayaran' && (
          <motion.div
            key="payment"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <PaymentPage />
          </motion.div>
        )}

        {currentPage === 'tentang-kami' && (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <AboutPage />
          </motion.div>
        )}

        {currentPage === 'feedback' && (
          <motion.div
            key="feedback"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <FeedbackPage />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Index;

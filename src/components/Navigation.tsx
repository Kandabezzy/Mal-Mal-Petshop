
import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { name: 'Beranda', key: 'beranda' },
    { name: 'Produk', key: 'produk' },
    { name: 'Pembayaran', key: 'pembayaran' },
    { name: 'Tentang Kami', key: 'tentang-kami' },
    { name: 'Feedback', key: 'feedback' }
  ];

  return (
    <nav className="relative z-50 glass-premium border-b border-white/20 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setCurrentPage('beranda')}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-elegant hover-glow-elegant">
              <img
                src="/lovable-uploads/c0fb0d05-2573-425b-aa70-d417b1d95f6e.png"
                alt="Mal Mal Petshop Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient-premium">Mal Mal Petshop</h1>
              <p className="text-xs text-gray-600 font-medium">Bandung TKI</p>
            </div>
          </motion.div>

          <div className="flex space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.key}
                className={`relative px-6 py-3 font-medium rounded-xl glass-elegant hover-lift-elegant transition-all duration-300 ${
                  currentPage === item.key 
                    ? 'text-blue-600 bg-gradient-to-r from-blue-100/50 to-emerald-100/50' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(item.key)}
              >
                {item.name}
                {currentPage === item.key && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

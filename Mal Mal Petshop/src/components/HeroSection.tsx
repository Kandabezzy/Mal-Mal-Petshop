
import React from 'react';
import { motion } from 'framer-motion';
import StarRating from './StarRating';
import TimelineBar from './TimelineBar';
import { achievements } from '../data/constants';
import { Award, ShoppingBag, Users, Star } from 'lucide-react';

interface HeroSectionProps {
  setCurrentPage: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setCurrentPage }) => {
  const iconMap = {
    Award: <Award className="w-6 h-6" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6" />,
    Users: <Users className="w-6 h-6" />,
    Star: <Star className="w-6 h-6" />
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-luxury rounded-3xl p-12 shadow-luxury-gold mb-12 animate-glow-pulse"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold text-gradient-premium leading-tight">
                  Mal Mal Petshop
                </h1>
                <p className="text-2xl text-gray-700 font-medium">
                  Terpercaya Sejak 2008 • 2000+ Produk Premium
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Destinasi terpercaya untuk semua kebutuhan hewan kesayangan Anda. 
                  Dengan pengalaman <strong>17 tahun</strong> melayani ribuan pelanggan puas, 
                  kami menjadi pilihan utama pet lovers di Bandung dan sekitarnya.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <StarRating rating={4.9} />
                    <span className="text-gray-700 font-semibold">4.9/5 Rating</span>
                  </div>
                  <div className="h-4 w-px bg-gray-300"></div>
                  <span className="text-gray-600">5000+ Pelanggan Puas</span>
                </div>
                
                <TimelineBar targetRating={4.9} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-elegant hover-lift-elegant hover-glow-elegant"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage('produk')}
                >
                  Lihat Produk Kami
                </motion.button>
                <motion.button
                  className="glass-elegant text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover-lift-elegant"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage('tentang-kami')}
                >
                  Tentang Kami
                </motion.button>
              </div>
            </div>

            {/* Right Content - Store Image */}
            <div className="space-y-6">
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-elegant hover-lift-elegant"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop"
                  alt="Mal Mal Petshop - Toko Terpercaya di Bandung"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Toko Fisik Kami</h3>
                  <p className="text-sm opacity-90">JL Taman Kopo Indah 3, Bandung</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-premium rounded-3xl p-8 shadow-elegant"
        >
          <h2 className="text-3xl font-bold text-center text-gradient-elegant mb-8">
            Pencapaian Kami
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center space-y-4 p-6 glass-elegant rounded-2xl hover-lift-elegant"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto text-white hover-glow-elegant">
                  {iconMap[achievement.icon as keyof typeof iconMap]}
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient-premium mb-2">
                    {achievement.number}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

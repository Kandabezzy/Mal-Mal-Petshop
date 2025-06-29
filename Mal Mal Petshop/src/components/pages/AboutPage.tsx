
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  const timelineData = [
    {
      year: '2008',
      title: 'Mal Mal Petshop Didirikan',
      description: 'Memulai perjalanan di Bandung TKI dengan visi menjadi petshop terpercaya',
      icon: <MapPin className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2012',
      title: 'Ekspansi Produk',
      description: 'Menambah koleksi hingga 500+ produk dari berbagai brand ternama',
      icon: <Award className="w-5 h-5" />,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      year: '2015',
      title: '1000+ Produk Premium',
      description: 'Menjadi distributor resmi berbagai brand premium pet food',
      icon: <Award className="w-5 h-5" />,
      color: 'from-amber-500 to-yellow-500'
    },
    {
      year: '2018',
      title: 'Pelayanan Digital',
      description: 'Mulai melayani konsultasi online dan delivery service',
      icon: <Users className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2020',
      title: 'Hadir di Platform Online',
      description: 'Ekspansi ke Tokopedia, Shopee, dan platform e-commerce lainnya',
      icon: <Calendar className="w-5 h-5" />,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      year: '2025',
      title: '2000+ Produk Premium',
      description: 'Melayani dengan koleksi terlengkap dan rating 4.9/5 dari pelanggan',
      icon: <Award className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gradient-premium mb-6">
            Tentang Mal Mal Petshop
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perjalanan 17 tahun kami dalam melayani pet lovers dengan dedikasi dan kualitas terbaik
          </p>
        </div>
        
        {/* Company Story */}
        <motion.div
          className="glass-luxury rounded-3xl p-12 shadow-luxury-gold mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gradient-elegant">Sejarah Kami</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <p>
                  <strong>Mal Mal Petshop</strong> berdiri sejak tahun <strong>2008</strong> di Bandung, Jawa Barat. 
                  Kami telah melayani ribuan pelanggan dengan dedikasi tinggi dalam menyediakan produk-produk 
                  berkualitas untuk hewan kesayangan.
                </p>
                <p>
                  Selama <strong>17 tahun</strong> beroperasi hingga 2025, kami terus berkembang dan berinovasi 
                  untuk memberikan pelayanan terbaik. Dengan lebih dari <strong>2000+ produk premium</strong> 
                  dari berbagai brand ternama seperti Royal Canin, Whiskas, Pro Plan, dan banyak lagi.
                </p>
                <p>
                  Kami bangga menjadi bagian dari komunitas pet lovers Bandung dan sekitarnya, 
                  dengan komitmen untuk selalu menghadirkan produk-produk terbaik dengan harga yang kompetitif.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-elegant hover-lift-elegant"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop"
                  alt="Mal Mal Petshop Interior"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Toko Kami</h3>
                  <p className="text-sm opacity-90">Melayani sejak 2008</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="glass-premium rounded-3xl p-12 shadow-elegant"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center text-gradient-elegant mb-12">
            Timeline Perjalanan Kami
          </h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-emerald-500 to-amber-500 rounded-full timeline-progress"></div>
            
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start space-x-8"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white shadow-elegant hover-glow-elegant`}>
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 glass-elegant rounded-2xl p-6 hover-lift-elegant">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-2xl font-bold text-gradient-premium">
                        {item.year}
                      </span>
                      <div className="h-6 w-px bg-gray-300"></div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-16 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-lg">© 2025 Mal Mal Petshop Bandung TKI. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;

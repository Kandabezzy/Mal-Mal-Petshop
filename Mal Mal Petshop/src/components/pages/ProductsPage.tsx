
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../../data/constants';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductsPageProps {
  setCurrentPage: (page: string) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ setCurrentPage }) => {
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPageState] = useState(1);
  const productsPerPage = 12;

  const categories = ['All', 'Premium Dog Food', 'Premium Cat Food', 'Dog Food', 'Cat Food', 'Puppy Food', 'Kitten Food'];
  
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(product => product.category === filter);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gradient-premium mb-6">
            Produk Premium Kami
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Lebih dari 2000+ produk berkualitas tinggi untuk hewan kesayangan Anda
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filter === category
                    ? 'glass-luxury text-blue-600 shadow-elegant'
                    : 'glass-elegant text-gray-600 hover:text-blue-600 hover-lift-elegant'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setFilter(category);
                  setCurrentPageState(1);
                }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {currentProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="glass-premium rounded-3xl p-6 shadow-elegant hover-lift-elegant hover-glow-elegant group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                {product.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {product.badge}
                    </span>
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 bg-gray-100/50 px-3 py-1 rounded-full inline-block">
                  {product.category}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-gradient-premium">
                    {product.price}
                  </p>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">4.8</span>
                  </div>
                </div>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover-lift-elegant hover-glow-elegant flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentPage('pembayaran')}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Beli Sekarang</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <motion.button
                key={index + 1}
                className={`w-12 h-12 rounded-xl font-semibold transition-all duration-300 ${
                  currentPage === index + 1
                    ? 'glass-luxury text-blue-600 shadow-elegant'
                    : 'glass-elegant text-gray-600 hover:text-blue-600 hover-lift-elegant'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentPageState(index + 1)}
              >
                {index + 1}
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;

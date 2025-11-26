import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiShoppingBag } from 'react-icons/fi';
import type { Product } from '../data/products';
import { useCart } from './CartContext';
import { useLanguage } from './LanguageContext';
import { useToast } from './ToastContext';
import Button from '../components/ui/Button';

interface QuickViewContextType {
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
}

const QuickViewContext = createContext<QuickViewContextType | undefined>(undefined);

export const QuickViewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const { t, language } = useLanguage();
  const { showToast } = useToast();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const openQuickView = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSizeIndex(0);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct, selectedSizeIndex, 1);
      showToast(`${selectedProduct.name} added to cart!`, 'success');
      closeQuickView();
    }
  };

  return (
    <QuickViewContext.Provider value={{ openQuickView, closeQuickView }}>
      {children}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeQuickView}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden pointer-events-auto flex flex-col md:flex-row max-h-[90vh]"
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-olive-50">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedProduct.isNew && (
                    <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {t('products.new')}
                    </span>
                  )}
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-olive-900 mb-2">
                        {language === 'ar' && selectedProduct.nameAr
                          ? selectedProduct.nameAr
                          : selectedProduct.name}
                      </h2>
                      <p className="text-olive-600 font-medium text-lg">
                        {selectedProduct.sizes[selectedSizeIndex].price} DH
                      </p>
                    </div>
                    <button
                      onClick={closeQuickView}
                      className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                    >
                      <FiX className="w-6 h-6" />
                    </button>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === 'ar' && selectedProduct.descriptionAr
                      ? selectedProduct.descriptionAr
                      : selectedProduct.description}
                  </p>

                  {/* Size Selection */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                      Format
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProduct.sizes.map((size, index) => (
                        <button
                          key={size.volume}
                          onClick={() => setSelectedSizeIndex(index)}
                          className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                            selectedSizeIndex === index
                              ? 'border-olive-600 bg-olive-50 text-olive-700'
                              : 'border-gray-200 text-gray-600 hover:border-olive-300'
                          }`}
                        >
                          {size.volume}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto pt-6 border-t border-gray-100 flex gap-4">
                    <Button
                      onClick={handleAddToCart}
                      variant="primary"
                      size="lg"
                      className="flex-1 gap-2"
                    >
                      <FiShoppingBag className="w-5 h-5" />
                      {t('products.addToCart')}
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </QuickViewContext.Provider>
  );
};

export const useQuickView = () => {
  const context = useContext(QuickViewContext);
  if (!context) {
    throw new Error('useQuickView must be used within a QuickViewProvider');
  }
  return context;
};

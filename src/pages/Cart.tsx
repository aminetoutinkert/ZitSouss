import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/ui/Button';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const { t, language } = useLanguage();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-olive-50 to-white flex items-center justify-center">
        <div className="text-center">
          <FiShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h2 className="heading-3 mb-4">{t('cart.empty')}</h2>
          <Link to="/products">
            <Button variant="primary" size="lg">
              {t('cart.continueShopping')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-olive-50 to-white">
      {/* Header */}
      <div className="bg-olive-900 text-white py-16">
        <div className="container-custom">
          <h1 className="heading-1 text-white text-center">{t('cart.title')}</h1>
        </div>
      </div>

      {/* Cart Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => {
              const size = item.product.sizes[item.sizeIndex];
              
              // Safety check - skip if size doesn't exist
              if (!size) {
                console.error('Invalid size index for product:', item.product.name, 'at index', item.sizeIndex);
                return null;
              }
              
              return (
                <motion.div
                  key={`${item.product.id}-${item.sizeIndex}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 flex gap-6"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl">🫒</span>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-olive-900 text-lg mb-1">
                      {language === 'ar' && item.product.nameAr
                        ? item.product.nameAr
                        : item.product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Taille: {size.volume}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.sizeIndex,
                              item.quantity - 1
                            )
                          }
                          className="p-2 hover:bg-olive-50 transition-colors"
                        >
                          <FiMinus className="w-4 h-4" />
                        </button>
                        <span className="px-4 font-medium">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.sizeIndex,
                              item.quantity + 1
                            )
                          }
                          className="p-2 hover:bg-olive-50 transition-colors"
                        >
                          <FiPlus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id, item.sizeIndex)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        title="Supprimer"
                      >
                        <FiTrash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <div className="text-2xl font-bold text-olive-700">
                      {size.price * item.quantity} DH
                    </div>
                    <div className="text-sm text-gray-500">
                      {size.price} DH × {item.quantity}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md p-6 sticky top-24"
            >
              <h2 className="text-xl font-display font-semibold text-olive-900 mb-4">
                Résumé de la Commande
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Sous-total</span>
                  <span>{getCartTotal()} DH</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Livraison</span>
                  <span className="text-green-600">Gratuite</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-xl font-bold text-olive-900">
                  <span>{t('cart.total')}</span>
                  <span>{getCartTotal()} DH</span>
                </div>
              </div>

              <Button variant="secondary" size="lg" className="w-full mb-3">
                {t('cart.checkout')}
              </Button>
              
              <Link to="/products" className="block">
                <Button variant="ghost" className="w-full">
                  {t('cart.continueShopping')}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

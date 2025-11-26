import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { getFeaturedProducts } from '../../data/products';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCart } from '../../contexts/CartContext';
import { useToast } from '../../contexts/ToastContext';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const FeaturedProducts: React.FC = () => {
  const { t, language } = useLanguage();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const featuredProducts = getFeaturedProducts();

  const handleQuickAdd = (product: typeof featuredProducts[0]) => {
    // Add default size (500ml) to cart
    const defaultSizeIndex = product.sizes.findIndex(s => s.volume === '500ml') || 0;
    addToCart(product, defaultSizeIndex, 1);
    showToast(`${product.name} ajouté au panier!`, 'success');
  };

  const getIntensityColor = (intensity?: string) => {
    switch (intensity) {
      case 'douce':
      case 'tres-douce':
        return 'bg-green-100 text-green-800';
      case 'intense':
        return 'bg-red-100 text-red-800';
      case 'traditionnelle':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-olive-100 text-olive-800';
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-olive-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">{t('products.featured')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection d'huiles d'olive primées au niveau international
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="product-card group">
                {/* Product Image */}
                <div className="relative h-64 bg-olive-100 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center product-card-image bg-gradient-to-br from-olive-200 to-olive-100">
                    <span className="text-6xl">🫒</span>
                  </div>
                  
                  {/* Labels */}
                  <div className="absolute top-3 left-3 space-y-2">
                    {product.labels?.includes('award-winning') && (
                      <Badge variant="gold" text="Primée" />
                    )}
                    {product.labels?.includes('bestseller') && (
                      <Badge variant="bestseller" text="Best-Seller" />
                    )}
                    {product.labels?.includes('organic') && (
                      <Badge variant="organic" text="BIO" />
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  {/* Intensity Badge */}
                  {product.intensity && (
                    <div className="mb-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${getIntensityColor(product.intensity)}`}>
                        {product.intensity.charAt(0).toUpperCase() + product.intensity.slice(1)}
                      </span>
                    </div>
                  )}

                  <h3 className="text-lg font-display font-semibold text-olive-900 mb-2">
                    {language === 'ar' && product.nameAr ? product.nameAr : product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {language === 'ar' && product.descriptionAr
                      ? product.descriptionAr
                      : product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline mb-4">
                    <span className="text-2xl font-bold text-olive-700">
                      {product.price} DH
                    </span>
                    <span className="text-sm text-gray-500 ml-2">/500ml</span>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Link to={`/products/${product.id}`} className="block">
                      <Button variant="outline" className="w-full" size="sm">
                        {t('products.viewDetails')}
                      </Button>
                    </Link>
                    <Button
                      variant="primary"
                      className="w-full"
                      size="sm"
                      onClick={() => handleQuickAdd(product)}
                    >
                      {t('products.addToCart')}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="pb-12"
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-card">
                  {/* Similar structure as desktop */}
                  <div className="relative h-64 bg-olive-100 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-olive-200 to-olive-100">
                      <span className="text-6xl">🫒</span>
                    </div>
                    <div className="absolute top-3 left-3 space-y-2">
                      {product.labels?.includes('award-winning') && (
                        <Badge variant="gold" text="Primée" />
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    {product.intensity && (
                      <div className="mb-3">
                        <span className={`text-xs font-semibold px-2 py-1 rounded ${getIntensityColor(product.intensity)}`}>
                          {product.intensity}
                        </span>
                      </div>
                    )}
                    <h3 className="text-lg font-display font-semibold text-olive-900 mb-2">
                      {language === 'ar' && product.nameAr ? product.nameAr : product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {language === 'ar' && product.descriptionAr
                        ? product.descriptionAr
                        : product.description}
                    </p>
                    <div className="flex items-baseline mb-4">
                      <span className="text-2xl font-bold text-olive-700">
                        {product.price} DH
                      </span>
                      <span className="text-sm text-gray-500 ml-2">/500ml</span>
                    </div>
                    <div className="space-y-2">
                      <Link to={`/products/${product.id}`} className="block">
                        <Button variant="outline" className="w-full" size="sm">
                          {t('products.viewDetails')}
                        </Button>
                      </Link>
                      <Button
                        variant="primary"
                        className="w-full"
                        size="sm"
                        onClick={() => handleQuickAdd(product)}
                      >
                        {t('products.addToCart')}
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link to="/products">
            <Button variant="secondary" size="lg">
              {t('products.all')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

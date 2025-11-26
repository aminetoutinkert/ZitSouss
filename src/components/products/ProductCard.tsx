import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';
import type { Product } from '../../data/products';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCart } from '../../contexts/CartContext';
import { useToast } from '../../contexts/ToastContext';
import { useQuickView } from '../../contexts/QuickViewContext';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const { openQuickView } = useQuickView();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultSizeIndex = product.sizes.findIndex(s => s.volume === '500ml') || 0;
    addToCart(product, defaultSizeIndex, 1);
    showToast(`${product.name} ajouté au panier!`, 'success');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div 
        className="relative h-64 overflow-hidden bg-olive-50 cursor-pointer"
        onClick={() => openQuickView(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay with Quick View Button */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              openQuickView(product);
            }}
            className="bg-white text-olive-900 px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-olive-50 shadow-lg"
          >
            <FiEye className="w-5 h-5" />
            <span>Aperçu</span>
          </button>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 space-y-2">
          {product.awards && product.awards.length > 0 && (
            <Badge variant="gold" text="Primée" />
          )}
          {product.isBestseller && (
            <Badge variant="bestseller" text="Best-Seller" />
          )}
          {product.labels?.includes('bio') && (
            <Badge variant="organic" text="BIO" />
          )}
          {product.isNew && (
            <Badge variant="new" text="Nouveau" />
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-display font-semibold text-olive-900 mb-2 hover:text-olive-600 transition-colors">
            {language === 'ar' && product.nameAr ? product.nameAr : product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[40px]">
          {language === 'ar' && product.descriptionAr
            ? product.descriptionAr
            : product.description}
        </p>

        {/* Price */}
        <div className="flex items-baseline mb-4">
          <span className="text-2xl font-bold text-olive-700">
            {product.price} DH
          </span>
          <span className="text-sm text-gray-500 ml-2">
            /{product.sizes[0]?.volume}
          </span>
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
            onClick={handleQuickAdd}
          >
            {t('products.addToCart')}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

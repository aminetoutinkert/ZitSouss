import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiSearch } from 'react-icons/fi';
import ProductCard from '../../components/products/ProductCard';
import { products } from '../../data/products';
import { useLanguage } from '../../contexts/LanguageContext';

type CategoryFilter = 'all' | 'oil' | 'olive';

const Products: React.FC = () => {
  const { t } = useLanguage();
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    // Filter by category
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        (p.nameAr && p.nameAr.includes(query)) ||
        (p.descriptionAr && p.descriptionAr.includes(query))
      );
    }
    
    return filtered;
  }, [categoryFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-olive-50 to-white">
      <Helmet>
        <title>Nos Produits | ZitSouss</title>
        <meta name="description" content="Explorez notre gamme d'huiles d'olive extra vierge et olives de table. Des produits authentiques du Maroc." />
      </Helmet>
      {/* Page Header */}
      <div className="bg-olive-900 text-white py-16">
        <div className="container-custom">
          <h1 className="heading-1 text-white text-center">{t('products.all')}</h1>
          <p className="text-olive-200 text-center mt-4 text-lg max-w-2xl mx-auto">
            Découvrez notre gamme complète d'huiles d'olive vierges extra et d'olives de table
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              categoryFilter === 'all'
                ? 'bg-olive-600 text-white shadow-lg'
                : 'bg-white text-olive-700 hover:bg-olive-50 border border-olive-200'
            }`}
          >
            {t('products.all')}
          </button>
          <button
            onClick={() => setCategoryFilter('oil')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              categoryFilter === 'oil'
                ? 'bg-olive-600 text-white shadow-lg'
                : 'bg-white text-olive-700 hover:bg-olive-50 border border-olive-200'
            }`}
          >
            {t('products.oils')}
          </button>
          <button
            onClick={() => setCategoryFilter('olive')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              categoryFilter === 'olive'
                ? 'bg-olive-600 text-white shadow-lg'
                : 'bg-white text-olive-700 hover:bg-olive-50 border border-olive-200'
            }`}
          >
            {t('products.olives')}
          </button>
        </div>

        {/* Results Count */}
        {searchQuery && (
          <p className="text-center text-gray-600 mb-4">
            {filteredProducts.length} produit{filteredProducts.length !== 1 ? 's' : ''} trouvé{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">Aucun produit ne correspond à votre recherche.</p>
            <button 
              onClick={() => {setCategoryFilter('all'); setSearchQuery('');}}
              className="mt-4 text-olive-600 font-medium hover:underline"
            >
              Voir tous les produits
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

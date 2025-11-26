import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-olive-50 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-olive-600 mb-4">404</h1>
          <div className="flex justify-center gap-2 text-6xl">
            <span>🫒</span>
            <span>🫒</span>
            <span>🫒</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="heading-2 mb-4">Page non trouvée</h2>
          <p className="text-lg text-gray-600 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="primary" size="lg" className="gap-2">
                <FiHome className="w-5 h-5" />
                Retour à l'accueil
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg" className="gap-2">
                Voir nos produits
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-left bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="font-semibold text-olive-900 mb-3">Suggestions :</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-olive-600 mt-1">•</span>
              <span>Vérifiez l'URL pour d'éventuelles fautes de frappe</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-olive-600 mt-1">•</span>
              <span>Retournez à la <Link to="/" className="text-olive-600 hover:underline">page d'accueil</Link></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-olive-600 mt-1">•</span>
              <span>Explorez nos <Link to="/products" className="text-olive-600 hover:underline">produits</Link></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-olive-600 mt-1">•</span>
              <span><Link to="/contact" className="text-olive-600 hover:underline">Contactez-nous</Link> si vous avez besoin d'aide</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;

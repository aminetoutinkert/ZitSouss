import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-olive-900 via-olive-800 to-earth-800">
        <div className="absolute inset-0 opacity-20 moroccan-pattern" />
        
        {/* Animated Olive Branch Decorations */}
        <div className="absolute top-20 left-10 opacity-10">
          <svg width="200" height="200" viewBox="0 0 200 200" className="text-gold-400">
            <path
              d="M100 20 Q80 60, 60 100 T20 180"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="60" cy="100" r="8" fill="currentColor" />
            <circle cx="40" cy="140" r="8" fill="currentColor" />
            <circle cx="80" cy="80" r="8" fill="currentColor" />
          </svg>
        </div>
        
        <div className="absolute bottom-20 right-10 opacity-10">
          <svg width="200" height="200" viewBox="0 0 200 200" className="text-gold-400">
            <path
              d="M100 20 Q120 60, 140 100 T180 180"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="140" cy="100" r="8" fill="currentColor" />
            <circle cx="160" cy="140" r="8" fill="currentColor" />
            <circle cx="120" cy="80" r="8" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-gold-200 font-display mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" variant="secondary">
                  {t('hero.cta.shop')}
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-olive-900">
                  {t('hero.cta.learn')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
          >
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

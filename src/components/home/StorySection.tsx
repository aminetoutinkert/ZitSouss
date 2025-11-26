import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../ui/Button';

const StorySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-olive-200 via-olive-100 to-earth-100">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-9xl">🌳</span>
                  <p className="text-olive-700 font-display mt-4 text-xl">Nos Oliviers</p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-400 rounded-full opacity-10 -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-olive-600 font-semibold text-sm uppercase tracking-wide mb-2">
              Notre Histoire
            </h3>
            <h2 className="heading-2 mb-6">De nos fermes à vos assiettes</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                ZitSouss est une huile d'olive vierge extra issue de première extraction à froid
                par des procédés uniquement mécaniques. Son très faible taux d'acidité{' '}
                <strong className="text-olive-700">(moins de 0,2%)</strong> et son parfait
                équilibre en graisses font de cette huile l'une des meilleures huiles d'olive
                vierges extra au monde.
              </p>
              <p>
                Primée plusieurs fois au Maroc et à l'international, ZitSouss se caractérise par
                une complexité, un équilibre et une harmonie qui se retrouvent dans l'ensemble
                de ses propriétés organoleptiques.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 my-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-olive-700">3000+</div>
                <div className="text-sm text-gray-600 mt-1">Hectares</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600">24+</div>
                <div className="text-sm text-gray-600 mt-1">Récompenses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-olive-700">15+</div>
                <div className="text-sm text-gray-600 mt-1">Années</div>
              </div>
            </div>

            <Link to="/about">
              <Button variant="primary">
                {t('common.learnMore')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

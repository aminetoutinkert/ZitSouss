import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const ConceptSection: React.FC = () => {
  const features = [
    {
      icon: '🌿',
      title: 'Fraîche toute l\'année',
      description: 'Nos cuves certifiées sont remplies régulièrement pour garantir une fraîcheur optimale',
    },
    {
      icon: '❄️',
      title: 'Première extraction à froid',
      description: 'Procédés mécaniques uniquement pour préserver toutes les qualités nutritionnelles',
    },
    {
      icon: '🎯',
      title: 'Acidité ultra-faible',
      description: 'Moins de 0,2% d\'acidité, un gage de qualité supérieure',
    },
    {
      icon: '🏆',
      title: 'Primée internationalement',
      description: 'Plus de 24 médailles dans les compétitions les plus prestigieuses',
    },
  ];

  return (
    <section className="section-padding bg-olive-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 moroccan-pattern" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-white mb-4">
            Notre Engagement Qualité
          </h2>
          <p className="text-xl text-olive-200 max-w-3xl mx-auto">
            Première et unique marque au Maroc à vous offrir une huile d'olive vierge extra
            d'exception, fraîche tout au long de l'année, et au meilleur prix
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
              <p className="text-olive-200 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quality Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-olive-800/50 rounded-2xl p-8 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-display font-semibold text-center mb-8">
            Nos Garanties
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <FiCheckCircle className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Traçabilité Totale</h4>
                <p className="text-sm text-olive-200">
                  De l'olivier à votre table, chaque étape est contrôlée
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FiCheckCircle className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Certifications Internationales</h4>
                <p className="text-sm text-olive-200">
                  ISO 22000, HACCP, et certifications BIO
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FiCheckCircle className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Production Locale</h4>
                <p className="text-sm text-olive-200">
                  100% marocaine, de nos fermes à votre cuisine
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConceptSection;

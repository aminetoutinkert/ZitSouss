import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-olive-900 to-olive-700 text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-1 text-white mb-6"
          >
            Notre Histoire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-olive-100 max-w-3xl mx-auto"
          >
            Une passion familiale pour l'excellence oléicole marocaine
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Mission */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-3 mb-6">Notre Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ZitSouss est une marque d'huile d'olive vierge extra issue du premier fermier oléicole
              intégré au Maroc. Notre mission est de produire et de distribuer une huile d'olive de
              qualité supérieure, accessible à tous les Marocains, tout en respectant les normes
              internationales les plus strictes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Avec plus de 3000 hectares d'oliviers plantés et un mix variétal d'olives marocaines
              et étrangères d'une excellente qualité, nous nous positionnons parmi les plus grands
              fermiers producteurs d'huile d'olive au monde.
            </p>
          </motion.section>

          {/* Process */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-3 mb-6">Notre Processus</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-olive-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-olive-900 mb-2">Culture Raisonnée</h3>
                  <p className="text-gray-700">
                    Nos oliviers sont cultivés dans le respect de l'environnement, avec une
                    attention particulière portée à la santé des arbres et à la qualité des fruits.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-olive-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-olive-900 mb-2">Récolte Optimale</h3>
                  <p className="text-gray-700">
                    Les olives sont récoltées au moment optimal de maturité pour garantir le
                    meilleur équilibre entre arômes et bienfaits nutritionnels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-olive-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-olive-900 mb-2">Extraction à Froid</h3>
                  <p className="text-gray-700">
                    L'extraction se fait à froid par des procédés uniquement mécaniques, préservant
                    ainsi toutes les qualités organoleptiques et nutritionnelles.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-olive-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-olive-900 mb-2">Conservation Optimale</h3>
                  <p className="text-gray-700">
                    Notre huile est conservée dans des cuves certifiées en inox, à l'abri de la
                    lumière et de l'oxygène, garantissant sa fraîcheur toute l'année.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-3 mb-6">Certifications & Labels</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-olive-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="font-semibold text-olive-900 mb-2">ISO 22000</h3>
                <p className="text-sm text-gray-600">
                  Sécurité des denrées alimentaires
                </p>
              </div>
              <div className="bg-olive-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="font-semibold text-olive-900 mb-2">HACCP</h3>
                <p className="text-sm text-gray-600">
                  Analyse des dangers et points critiques
                </p>
              </div>
              <div className="bg-olive-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌿</div>
                <h3 className="font-semibold text-olive-900 mb-2">Agriculture Biologique</h3>
                <p className="text-sm text-gray-600">
                  Certification BIO européenne
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getAwardYears, getAwardsByYear, awards } from '../../data/awards';
import { useLanguage } from '../../contexts/LanguageContext';
import Badge from '../ui/Badge';

const AwardsShowcase: React.FC = () => {
  const { language } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const years = getAwardYears();

  const displayedAwards = selectedYear === 'all' ? awards : getAwardsByYear(selectedYear);
  
  // Get medal variant
  const getMedalVariant = (medal: string): 'gold' | 'silver' | 'bronze' | 'platinum' => {
    if (medal === 'double-gold') return 'gold';
    return medal as 'gold' | 'silver' | 'bronze' | 'platinum';
  };

  return (
    <section className="section-padding bg-gradient-to-b from-olive-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            Primée parmi les meilleures huiles d'olives au monde
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Depuis 2010, nos huiles d'olive ont été reconnues et primées dans les compétitions
            les plus prestigieuses à travers le monde
          </p>
        </motion.div>

        {/* Year Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setSelectedYear('all')}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedYear === 'all'
                ? 'bg-olive-600 text-white shadow-md'
                : 'bg-white text-olive-700 hover:bg-olive-50 border border-olive-200'
            }`}
          >
            Toutes
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedYear === year
                  ? 'bg-olive-600 text-white shadow-md'
                  : 'bg-white text-olive-700 hover:bg-olive-50 border border-olive-200'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Awards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedAwards.slice(0, 12).map((award, index) => (
            <motion.div
              key={award.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-olive-100"
            >
              <div className="flex items-start justify-between mb-3">
                <Badge
                  variant={getMedalVariant(award.medal)}
                  text={award.medal === 'double-gold' ? 'Double Gold' : award.medal.toUpperCase()}
                />
                <span className="text-olive-600 font-bold text-lg">{award.year}</span>
              </div>
              <h3 className="font-semibold text-olive-900 mb-2 line-clamp-2">
                {language === 'ar' && award.nameAr ? award.nameAr : award.name}
              </h3>
              <p className="text-sm text-gray-600 mb-1">{award.competition}</p>
              <p className="text-xs text-gray-500">{award.country}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More */}
        {displayedAwards.length > 12 && (
          <div className="text-center mt-8 text-gray-600">
            Et {displayedAwards.length - 12} autres récompenses...
          </div>
        )}
      </div>
    </section>
  );
};

export default AwardsShowcase;

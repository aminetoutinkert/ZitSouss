import React, { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: 'ltr' | 'rtl';
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.about': 'À Propos',
    'nav.awards': 'Récompenses',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Huile d\'Olive Vierge Extra du Maroc',
    'hero.subtitle': 'Primée parmi les meilleures huiles d\'olives au monde depuis 2010',
    'hero.cta.shop': 'Découvrir Nos Produits',
    'hero.cta.learn': 'Notre Histoire',
    
    // Products
    'products.title': 'Nos Produits',
    'products.featured': 'Produits Vedettes',
    'products.all': 'Tous les Produits',
    'products.oils': 'Huiles d\'Olive',
    'products.olives': 'Olives de Table',
    'products.addToCart': 'Ajouter au Panier',
    'products.viewDetails': 'Voir Détails',
    
    // Cart
    'cart.title': 'Panier',
    'cart.empty': 'Votre panier est vide',
    'cart.total': 'Total',
    'cart.checkout': 'Commander',
    'cart.continueShopping': 'Continuer les achats',
    
    // Footer
    'footer.about': 'À propos de ZitSouss',
    'footer.description': 'Premier fermier oléicole intégré au Maroc, producteur d\'huile d\'olive vierge extra de qualité supérieure.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterText': 'Inscrivez-vous pour recevoir nos offres exclusives',
    'footer.email': 'Votre email',
    'footer.subscribe': 'S\'inscrire',
    'footer.rights': 'Tous droits réservés',
    
    // Common
    'common.learnMore': 'En savoir plus',
    'common.readMore': 'Lire plus',
    'common.close': 'Fermer',
    'common.loading': 'Chargement...',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.about': 'من نحن',
    'nav.awards': 'الجوائز',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.title': 'زيت الزيتون البكر الممتاز من المغرب',
    'hero.subtitle': 'مُكرَّم ضمن أفضل زيوت الزيتون في العالم منذ 2010',
    'hero.cta.shop': 'اكتشف منتجاتنا',
    'hero.cta.learn': 'قصتنا',
    
    // Products
    'products.title': 'منتجاتنا',
    'products.featured': 'المنتجات المميزة',
    'products.all': 'جميع المنتجات',
    'products.oils': 'زيوت الزيتون',
    'products.olives': 'زيتون المائدة',
    'products.addToCart': 'أضف إلى السلة',
    'products.viewDetails': 'عرض التفاصيل',
    
    // Cart
    'cart.title': 'السلة',
    'cart.empty': 'سلتك فارغة',
    'cart.total': 'المجموع',
    'cart.checkout': 'الطلب',
    'cart.continueShopping': 'متابعة التسوق',
    
    // Footer
    'footer.about': 'عن زيتسوس',
    'footer.description': 'أول مزارع زيتون متكامل في المغرب، منتج زيت الزيتون البكر الممتاز عالي الجودة.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.newsletter': 'النشرة الإخبارية',
    'footer.newsletterText': 'اشترك لتلقي عروضنا الحصرية',
    'footer.email': 'بريدك الإلكتروني',
    'footer.subscribe': 'اشترك',
    'footer.rights': 'جميع الحقوق محفوظة',
    
    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.readMore': 'اقرأ المزيد',
    'common.close': 'إغلاق',
    'common.loading': 'جاري التحميل...',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('fr');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const direction = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

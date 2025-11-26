import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    alert('Merci pour votre inscription!');
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-olive-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">
              {t('footer.about')}
            </h3>
            <p className="text-olive-100 text-sm leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-olive-800 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-olive-800 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-olive-100 hover:text-gold-400 transition-colors"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-olive-100 hover:text-gold-400 transition-colors"
                >
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-olive-100 hover:text-gold-400 transition-colors"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-olive-100 hover:text-gold-400 transition-colors"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-olive-100">
                  Agadir, Maroc
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-olive-100">+212 XXX-XXXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-olive-100">contact@zitsouss.ma</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">
              {t('footer.newsletter')}
            </h3>
            <p className="text-olive-100 text-sm mb-4">
              {t('footer.newsletterText')}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.email')}
                className="w-full px-4 py-2 rounded-md bg-olive-800 text-white placeholder-olive-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gold-500 hover:bg-gold-600 text-white rounded-md font-medium transition-colors"
              >
                {t('footer.subscribe')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-olive-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-sm text-olive-300">
            <p>
              © {currentYear} ZitSouss. {t('footer.rights')}.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-xs">
                Certifications: ISO 22000 | HACCP | BIO
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

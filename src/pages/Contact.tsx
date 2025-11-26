import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    alert('Merci pour votre message! Nous vous contacterons bientôt.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-olive-50 to-white">
      {/* Hero */}
      <div className="bg-olive-900 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-4">Contactez-Nous</h1>
          <p className="text-xl text-olive-200">
            Nous sommes à votre écoute pour toute question ou demande
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-3 mb-6">Informations de Contact</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-6 h-6 text-olive-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-olive-900 mb-1">Adresse</h3>
                  <p className="text-gray-700">
                    Zone Industrielle<br />
                    Agadir, Maroc
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-6 h-6 text-olive-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-olive-900 mb-1">Téléphone</h3>
                  <p className="text-gray-700">+212 XXX-XXXXXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-6 h-6 text-olive-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-olive-900 mb-1">Email</h3>
                  <p className="text-gray-700">contact@zitsouss.ma</p>
                </div>
              </div>
            </div>

            <div className="bg-olive-50 rounded-lg p-6">
              <h3 className="font-semibold text-olive-900 mb-3">Horaires d'Ouverture</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi:</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi:</span>
                  <span className="font-medium">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche:</span>
                  <span className="font-medium">Fermé</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-3 mb-6">Envoyez-nous un Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom Complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                  placeholder="+212 XXX-XXXXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Envoyer le Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

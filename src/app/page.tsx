'use client';

import { Code2, Rocket, Zap, Mail, Phone, Clock } from 'lucide-react';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_8mfy0my', // Remplacez par votre Service ID
        'template_i9hqf2e', // Remplacez par votre Template ID
        {
          to_email: 'simon.andrian@icloud.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone || 'Non fourni',
          message: formData.description,
        },
        'YIINy5zrWE-mZvWTV' // Remplacez par votre Public Key
      );

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        description: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">FlashWeb</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#services" className="text-gray-600 hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Votre Site Web Professionnel</span>
              <span className="block text-blue-600">pour seulement 200€</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Des sites web modernes, rapides et optimisés pour votre
              entreprise. Propulsez votre présence en ligne avec FlashWeb.
            </p>
            <div className="mt-4 flex items-center justify-center text-blue-600">
              <Clock className="w-5 h-5 mr-2" />
              <span className="font-medium">Livraison en 48 heures</span>
            </div>
            
            {/* Formulaire de contact */}
            <div className="mt-8 max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-md">
                    Votre message a été envoyé avec succès !
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-md">
                    Une erreur est survenue. Veuillez réessayer.
                  </div>
                )}
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 text-left">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 text-left">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-left">
                    Numéro de téléphone (facultatif)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 text-left">
                    Description de votre projet *
                  </label>
                  <textarea
                    id="description"
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Décrivez à quoi vous souhaitez que votre site ressemble..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Nos Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Tout ce dont vous avez besoin pour une présence web réussie
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 place-items-center">
            <div className="flex flex-col items-center max-w-sm">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-100 text-blue-600">
                <Code2 className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900 text-center">
                Design Moderne
              </h3>
              <p className="mt-2 text-center text-gray-600">
                Un site web élégant et professionnel qui reflète votre image de
                marque
              </p>
            </div>

            <div className="flex flex-col items-center max-w-sm">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-100 text-blue-600">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900 text-center">
                Optimisé Mobile
              </h3>
              <p className="mt-2 text-center text-gray-600">
                Une expérience parfaite sur tous les appareils
              </p>
            </div>

            <div className="flex flex-col items-center max-w-sm">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-100 text-blue-600">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900 text-center">
                Livraison Rapide
              </h3>
              <p className="mt-2 text-center text-gray-600">
                Votre site web prêt en seulement 48 heures
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Contactez-nous
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Prêt à lancer votre projet web ?
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center space-y-4">
            <a
              href="mailto:1blogdesimon@gmail.com"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <Mail className="w-6 h-6 mr-2" />
              1blogdesimon@gmail.com
            </a>
            <a
              href="tel:+33123456789"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <Phone className="w-6 h-6 mr-2" />
              01 23 45 67 89
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">
            <p>© 2024 FlashWeb. Tous droits réservés au blog de simon.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
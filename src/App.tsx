import React from 'react';
import {
  Code2,
  Rocket,
  Zap,
  ChevronRight,
  Mail,
  Phone,
  Clock,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">
              CraftersWeb
            </span>
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
              <span className="font-medium">Livraison dans la semaine </span>
            </div>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="https://simon.c54.ovh"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Commencer maintenant
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
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
                Votre site web prêt dans la semaine
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
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">
            <p>© 2024 FlashWeb. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

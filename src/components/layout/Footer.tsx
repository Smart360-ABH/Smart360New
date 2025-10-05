import { Link } from 'react-router-dom';
import { sendEvent } from '@/lib/analytics';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Smart360</h3>
            <p className="text-gray-300 mb-4">
              Виртуальные туры по Абхазии для бизнеса и организаций
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-300 hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-300 hover:text-white"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul>
              <li className="mb-2">
                <svg className="h-6 w-6 text-gray-400 mr-2 inline-flex" aria-hidden="true" />
                <a
                  href="tel:+79409435555"
                  onClick={() => sendEvent("ContactClick", { method: "call", label: "+7 940 943-55-55" })}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Позвонить Smart360"
                >
                  +7 940 943-55-55
                </a>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-gray-400 mr-2 flex-shrink-0" aria-hidden="true" />
                <a
                  href="https://wa.me/79409435555?text=Добрый%20день%21%20Меня%20интересует%20виртуальный%20тур"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sendEvent("ContactClick", { method: "whatsapp", label: "+7 940 943-55-55" })}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Связаться через WhatsApp"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Адрес</h3>
            <p className="text-gray-300">Гагра, Республика Абхазия</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Smart360. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

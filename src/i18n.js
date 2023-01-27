import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'tr',
    fallbackLng: 'tr',
    detection: { order: ['localStorage', 'navigator', 'path'] },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

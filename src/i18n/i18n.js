import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import en from "./locales/en.json" // Import your translations
import nl from "./locales/nl.json" // Import your translations

i18n
	.use(LanguageDetector) // Detect language based on the browser settings
	.use(initReactI18next) // Pass i18n down to React components
	.init({
		resources: {
			en: { translation: en }, // English translations
			nl: { translation: nl }, // Dutch translations
		},
		fallbackLng: "en", // Use English if no language is detected
		debug: true, // Enable debug mode to log useful information in the console
		interpolation: {
			escapeValue: false, // React already escapes from XSS
		},
		detection: {
			order: ["navigator"], // Language detection strategy
			caches: [], // Store the language in localStorage or cookies
		},
	})

export default i18n

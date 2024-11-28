import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// Fetch all translations
const enFiles = import.meta.glob("./locales/en/*.json", { eager: true })
const nlFiles = import.meta.glob("./locales/nl/*.json", { eager: true })

const resources = {
	en: { translation: {} },
	nl: { translation: {} },
}

Object.values(enFiles).forEach((fileContent) => {
	Object.assign(resources.en.translation, fileContent)
})

Object.values(nlFiles).forEach((fileContent) => {
	Object.assign(resources.nl.translation, fileContent)
})

// Initialise i18next
i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "en",
		debug: true,
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: ["navigator"],
			caches: [],
		},
	})

console.log("Loaded Resources:", i18n.store.data)

export default i18n

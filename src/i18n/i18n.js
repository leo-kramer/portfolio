import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// Fetch all translations
// const enFiles = import.meta.glob("./locales/en/*.json", { eager: true })
// const nlFiles = import.meta.glob("./locales/nl/*.json", { eager: true })

import enNav from "./locales/en/Nav.json"
import enAbout from "./locales/en/About.json"
import enSkills from "./locales/en/Skills.json"
import enProjects from "./locales/en/Projects.json"
import enExperience from "./locales/en/Experience.json"
import enEducation from "./locales/en/Education.json"

import nlNav from "./locales/nl/Nav.json"
import nlAbout from "./locales/nl/About.json"
import nlSkills from "./locales/nl/Skills.json"
import nlProjects from "./locales/nl/Projects.json"
import nlExperience from "./locales/nl/Experience.json"
import nlEducation from "./locales/nl/Education.json"

const enTranslations = {
	...enNav,
	...enAbout,
	...enSkills,
	...enProjects,
	...enExperience,
	...enEducation,
}

const nlTranslations = {
	...nlNav,
	...nlAbout,
	...nlSkills,
	...nlProjects,
	...nlExperience,
	...nlEducation,
}

const resources = {
	en: { translation: enTranslations },
	nl: { translation: nlTranslations },
}

console.log(resources)

// console.log("English files loaded:", enFiles)
// console.log("Dutch files loaded:", nlFiles)

// Object.values(enFiles).forEach((fileContent) => {
// 	Object.assign(resources.en.translation, fileContent)
// })

// Object.values(nlFiles).forEach((fileContent) => {
// 	Object.assign(resources.nl.translation, fileContent)
// })

// console.log(resources)

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

export default i18n

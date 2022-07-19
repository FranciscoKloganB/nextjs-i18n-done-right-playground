import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import getConfig from "next/config"
import LanguageDetector from "i18next-browser-languagedetector"

import * as translationConfigurations from "./locales"
import { defaultLanguage, supportedLanguages } from "./constants/languages"

const { publicRuntimeConfig } = getConfig() || {}
const cookieMinutes = +publicRuntimeConfig?.I18N_COOKIE_MINUTES || 5

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    /**
     * Base i18next configuration:
     *  https://www.i18next.com/overview/configuration-options
     */
    fallbackLng: defaultLanguage,
    supportedLngs: supportedLanguages,
    load: "currentOnly",
    lowerCaseLng: true,
    preload: [defaultLanguage, "ar"],
    resources: {
      ...translationConfigurations
    },
    /**
     * Detection plugin
     *
     * Ours works client side only according to:
     *  https://www.i18next.com/overview/plugins-and-utils#language-detector
     * Docs at:
     *  https://github.com/i18next/i18next-browser-languageDetector#introduction
     *
     * TODO: Switch to universal language detector (client + server), since
     * right now we are manually managing Sever-Side renders.
     *  https://github.com/UnlyEd/universal-language-detector
     */
    detection: {
      order: ["path", "cookie", "navigator", "htmlTag"],
      caches: ["cookie"],
      cookieMinutes
    }
  })

export default i18n
export { cookieMinutes, defaultLanguage, supportedLanguages }

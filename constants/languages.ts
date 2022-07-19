const defaultLanguage = "en"

type Language = {
  dropdownValue: string
  countryName: string
}

enum PageDirection {
  RTL = "rtl",
  LTR = "ltr"
}

const supportedLanguagesMap: Record<string, Language> = {
  ar: { dropdownValue: "عربي", countryName: "Arab" },
  en: { dropdownValue: "English", countryName: "England" }
}
const supportedLanguages = Object.keys(supportedLanguagesMap)

const humanReadableLanguage = (key = defaultLanguage) => {
  return supportedLanguagesMap[key].dropdownValue
}

const getCountryName = (key = defaultLanguage) => supportedLanguagesMap[key]?.countryName

export {
  getCountryName,
  defaultLanguage,
  humanReadableLanguage,
  supportedLanguages,
  supportedLanguagesMap,
  PageDirection
}

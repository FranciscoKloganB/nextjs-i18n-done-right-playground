import { useRouter } from "next/router"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export default function useWtxI18n() {
  const { asPath, locale, pathname, replace, query } = useRouter()
  const {
    i18n: { dir, language }
  } = useTranslation()

  /**
   * When a new language is selected by the user via dropdown, button or any other source
   * we want to ensure that Next router knows about the change to the user's preferred language.
   *
   * Next.js `router.locale` is reponsible for controlling the `url.pathname` prefix!
   *
   * E.g.: `myapp.com/vehicles` vs. `myapp.com/ar/vehicles`
   */
  useEffect(() => {
    console.debug("Hook useWtxI18n executed", { old: `${locale}`, new: `${language}` })
    // Update URL 'locale' (e.g.: /de/* to /ar/*) when dropdown item is clicked
    replace({ pathname, query }, asPath, { locale: language })

    document.dir = dir()
    // Inform Eslint that we intend to re-run the effect, if and only if, language changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])
}

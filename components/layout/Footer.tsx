import { useTranslation } from "react-i18next"

import { AnchorStyled, NavigationOptionsStyled } from "~/components"
import { COMMON } from "~/constants/translations"

export function Footer() {
  const { t } = useTranslation(COMMON)

  return (
    <footer className="fixed bottom-0 w-full rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          WTX™.{" "}
        </a>
        {t("allRightsReserved")}
      </span>
      <NavigationOptionsStyled>
        <li>
          <AnchorStyled href="#"> {t("privatePolicy")}</AnchorStyled>
        </li>
        <li>
          <AnchorStyled href="#">{t("licensing")}</AnchorStyled>
        </li>
      </NavigationOptionsStyled>
    </footer>
  )
}

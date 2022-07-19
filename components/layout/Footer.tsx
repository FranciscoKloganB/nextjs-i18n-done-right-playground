import { useTranslation } from "react-i18next"

import { AnchorStyled, FooterStyled, UnorderedListStyled } from "~/components"
import { COMMON } from "~/constants/translations"

export function Footer() {
  const { t } = useTranslation(COMMON)

  return (
    <FooterStyled>
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          WTX™.{" "}
        </a>
        {t("allRightsReserved")}
      </span>
      <UnorderedListStyled>
        <li>
          <AnchorStyled href="#"> {t("privatePolicy")}</AnchorStyled>
        </li>
        <li>
          <AnchorStyled href="#">{t("licensing")}</AnchorStyled>
        </li>
      </UnorderedListStyled>
    </FooterStyled>
  )
}

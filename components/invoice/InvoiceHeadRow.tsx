import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { COMMON } from "~/constants/translations"

const headingText = "text-sm font-semibold text-gray-900"
const colHiddenMobile = clsx("hidden py-3.5 px-3 text-end sm:table-cell", headingText)

export function InvoiceHeadRow() {
  const { t } = useTranslation(COMMON)

  return (
    <tr>
      <th scope="col" className="py-3.5 text-start pe-3 ps-4 sm:ps-6 md:ps-0">
        {t("project")}
      </th>
      <th scope="col" className={colHiddenMobile}>
        {t("hours")}
      </th>
      <th scope="col" className={colHiddenMobile}>
        {t("rate")}
      </th>
      <th scope="col" className="py-3.5 text-end ps-3 pe-4 sm:pe-6 md:pe-0">
        {t("price")}
      </th>
    </tr>
  )
}

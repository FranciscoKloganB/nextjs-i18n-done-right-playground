import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { COMMON } from "~/constants/translations"

const headingText = "text-sm font-semibold text-gray-900"
const colHiddenMobile = clsx("hidden py-3.5 px-3 text-right sm:table-cell", headingText)

export function InvoiceHeadRow() {
  const { t } = useTranslation(COMMON)

  return (
    <tr>
      <th scope="col" className="py-3.5 pl-4 pr-3 text-left sm:pl-6 md:pl-0">
        {t("project")}
      </th>
      <th scope="col" className={colHiddenMobile}>
        {t("hours")}
      </th>
      <th scope="col" className={colHiddenMobile}>
        {t("rate")}
      </th>
      <th scope="col" className="py-3.5 pl-3 pr-4 text-right sm:pr-6 md:pr-0">
        {t("price")}
      </th>
    </tr>
  )
}

import { Button, TableContainer, TableStyled } from "~/components"
import { InvoiceProjectRow } from "./InvoiceProjectRow"
import { InvoiceHeadRow } from "./InvoiceHeadRow"
import { InvoiceFooterRows } from "./InvoiceFooterRows"
import { toHumanReadableString } from "~/utils/time"
import { useTranslation } from "react-i18next"
import { COMMON } from "~/constants/translations"

const projects = [
  { id: 1, name: "New Advertising Campaign", hours: "12.0", rate: "$75.00", price: "$900.00" }
]

export function InvoiceSummary() {
  const { t, i18n } = useTranslation(COMMON)

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">{t("invoice")}</h1>
          <p className="mt-2 text-sm text-gray-700">
            {t("workCompleteFrom")}{" "}
            <time dateTime="2022-08-01">{toHumanReadableString("2022-08-01", i18n.language)}</time>{" "}
            {`${t("to")} `}
            <time dateTime="2022-08-31">{toHumanReadableString("2022-08-01", i18n.language)}</time>.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:flex-none sm:ms-16">
          <Button type="button">{t("print")}</Button>
        </div>
      </div>
      <TableContainer>
        <TableStyled>
          <thead>
            <InvoiceHeadRow />
          </thead>
          <tbody>
            {projects.map((project) => (
              <InvoiceProjectRow key={project.id} project={project} />
            ))}
          </tbody>
          <tfoot>
            <InvoiceFooterRows />
          </tfoot>
        </TableStyled>
      </TableContainer>
    </div>
  )
}

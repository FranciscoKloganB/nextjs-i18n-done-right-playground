import React from "react"
import { useTranslation } from "react-i18next"
import { COMMON } from "~/constants/translations"
import { TableFooterCellStyled, TableFooterHeadingStyled } from "../styled"

function FooterRow({ title, cellData }: { title: string; cellData: string }) {
  return (
    <tr>
      <TableFooterHeadingStyled scope="row" colSpan={3}>
        {title}
      </TableFooterHeadingStyled>
      <TableFooterHeadingStyled $isMobile scope="row">
        {title}
      </TableFooterHeadingStyled>
      <TableFooterCellStyled>{cellData}</TableFooterCellStyled>
    </tr>
  )
}

function TotalRow({ title, cellData }: { title: string; cellData: string }) {
  return (
    <tr>
      <th
        scope="row"
        colSpan={3}
        className="hidden pt-4 text-end text-sm font-semibold text-gray-900 pe-3 ps-6 sm:table-cell md:ps-0"
      >
        {title}
      </th>
      <th
        scope="row"
        className="pt-4 text-start text-sm font-semibold text-gray-900 pe-3 ps-4 sm:hidden"
      >
        {title}
      </th>
      <TableFooterCellStyled $isStrong>{cellData}</TableFooterCellStyled>
    </tr>
  )
}

export function InvoiceFooterRows() {
  const { t } = useTranslation(COMMON)

  return (
    <>
      <FooterRow title={t("subtotal")} cellData="$3.900.00" />
      <FooterRow title={t("tax")} cellData="$585.00" />
      <TotalRow title={t("total")} cellData="$4,485.00" />
    </>
  )
}

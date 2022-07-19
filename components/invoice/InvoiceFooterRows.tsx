import React from "react"
import tw from "tailwind-styled-components"
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

function TotalRow() {
  return (
    <tr>
      <th
        scope="row"
        colSpan={3}
        className="hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0"
      >
        Total
      </th>
      <th
        scope="row"
        className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
      >
        Total
      </th>
      <TableFooterCellStyled $isStrong>$4,485.00</TableFooterCellStyled>
    </tr>
  )
}

export function InvoiceFooterRows() {
  return (
    <>
      <FooterRow title={"Subtotal"} cellData={"$3.900.00"} />
      <FooterRow title={"Tax"} cellData={"$585.00"} />
      <TotalRow />
    </>
  )
}

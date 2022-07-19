import clsx from "clsx"

const headingText = "text-sm font-semibold text-gray-900"
const colHiddenMobile = clsx("hidden py-3.5 px-3 text-right sm:table-cell", headingText)

export function InvoiceHeadRow() {
  return (
    <tr>
      <th scope="col" className="py-3.5 pl-4 pr-3 text-left sm:pl-6 md:pl-0">
        Project
      </th>
      <th scope="col" className={colHiddenMobile}>
        Hours
      </th>
      <th scope="col" className={colHiddenMobile}>
        Rate
      </th>
      <th scope="col" className="py-3.5 pl-3 pr-4 text-right sm:pr-6 md:pr-0">
        Price
      </th>
    </tr>
  )
}

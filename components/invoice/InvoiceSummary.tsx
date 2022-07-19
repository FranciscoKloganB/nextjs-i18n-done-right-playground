import { Button, TableContainer, TableStyled } from "~/components"
import { InvoiceProjectRow } from "./InvoiceProjectRow"
import { InvoiceHeadRow } from "./InvoiceHeadRow"
import { InvoiceFooterRows } from "./InvoiceFooterRows"

const projects = [
  { id: 1, name: "New Advertising Campaign", hours: "12.0", rate: "$75.00", price: "$900.00" }
]

export function InvoiceSummary() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Invoice</h1>
          <p className="mt-2 text-sm text-gray-700">
            For work completed from <time dateTime="2022-08-01">August 1, 2022</time> to{" "}
            <time dateTime="2022-08-31">August 31, 2022</time>.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Button type="button">Print</Button>
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

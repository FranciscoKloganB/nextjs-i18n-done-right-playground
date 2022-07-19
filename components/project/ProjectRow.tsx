import clsx from "clsx"
import { TableRow } from "../styled"

type Project = {
  id: number
  hours: string
  name: string
  price: string
  rate: string
}

type ProjectRowProps = {
  project: Project
}

const text = "text-right text-sm text-gray-500"
const cellPrice = clsx("py-4 pl-3 pr-4 sm:pr-6 md:pr-0", text)
const cellHiddenMobile = clsx("hidden py-4 px-3 sm:table-cell", text)

export function ProjectRow({ project }: ProjectRowProps) {
  const { hours, name, price, rate } = project

  return (
    <TableRow>
      <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
        <div className="font-medium text-gray-900">{name}</div>
        <div className="mt-0.5 text-gray-500 sm:hidden">
          {hours} hours at {rate}
        </div>
      </td>
      <td className={cellHiddenMobile}>{hours}</td>
      <td className={cellHiddenMobile}>{rate}</td>
      <td className={cellPrice}>{price}</td>
    </TableRow>
  )
}

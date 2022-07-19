import clsx from "clsx"

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

const text = "text-end text-sm text-gray-500"
const cellPrice = clsx("py-4 ps-3 pe-4 sm:pe-6 md:pe-0", text)
const cellHiddenMobile = clsx("hidden py-4 px-3 sm:table-cell", text)

export function InvoiceProjectRow({ project }: ProjectRowProps) {
  const { hours, name, price, rate } = project

  return (
    <tr className="border-b border-gray-200">
      <td className="py-4 text-sm pe-3 ps-4 sm:ps-6 md:ps-0">
        <div className="font-medium text-gray-900">{name}</div>
        <div className="mt-0.5 text-gray-500 sm:hidden">
          {hours} hours at {rate}
        </div>
      </td>
      <td className={cellHiddenMobile}>{hours}</td>
      <td className={cellHiddenMobile}>{rate}</td>
      <td className={cellPrice}>{price}</td>
    </tr>
  )
}

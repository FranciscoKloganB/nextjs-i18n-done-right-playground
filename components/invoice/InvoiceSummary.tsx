import { useTranslation } from "react-i18next"

import { Button } from "~/components"
import { COMMON } from "~/constants/translations"
import { toHumanReadableString } from "~/utils/time"

const projects = [
  { id: 1, name: "New Advertising Campaign", hours: "12.0", rate: "$75.00", price: "$900.00" }
]

export function InvoiceSummary() {
  const { t } = useTranslation(COMMON)

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">{t("invoice")}</h1>
          <p className="mt-2 text-sm text-gray-700">
            {t("workCompleteFrom")}{" "}
            <time dateTime="2022-08-01">{toHumanReadableString("2022-08-01", "en")}</time>{" "}
            {`${t("to")} `}
            <time dateTime="2022-08-31">{toHumanReadableString("2022-08-01", "en")}</time>.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Button type="button">{t("print")}</Button>
        </div>
      </div>
      <div className="-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
              >
                {t("project")}
              </th>
              <th
                scope="col"
                className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
              >
                {t("hours")}
              </th>
              <th
                scope="col"
                className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
              >
                {t("rate")}
              </th>
              <th
                scope="col"
                className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0"
              >
                {t("price")}
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-200">
                <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                  <div className="font-medium text-gray-900">{project.name}</div>
                  <div className="mt-0.5 text-gray-500 sm:hidden">
                    {project.hours} hours at {project.rate}
                  </div>
                </td>
                <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                  {project.hours}
                </td>
                <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                  {project.rate}
                </td>
                <td className="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                  {project.price}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pl-6 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0"
              >
                {t("subtotal")}
              </th>
              <th
                scope="row"
                className="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"
              >
                {t("subtotal")}
              </th>
              <td className="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                $3,900.00
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0"
              >
                {t("tax")}
              </th>
              <th
                scope="row"
                className="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
              >
                {t("tax")}
              </th>
              <td className="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                $585.00
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0"
              >
                {t("total")}
              </th>
              <th
                scope="row"
                className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
              >
                {t("total")}
              </th>
              <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">
                $4,485.00
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

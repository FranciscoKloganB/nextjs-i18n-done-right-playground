import { useTranslation } from "react-i18next"
import Link from "next/link"
import Image from "next/image"

import { AnchorStyled, NavigationOptionsStyled, NavigationOptionsContainer } from "~/components"
import { COMMON } from "~/constants/translations"

function LogoContainer({ children: child }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 flex px-2 lg:px-0">
      <div className="flex flex-shrink-0 items-center">
        <Link href="/">
          <a>{child}</a>
        </Link>
      </div>
    </div>
  )
}

export function Navbar() {
  const { t } = useTranslation()

  return (
    <nav className="w-full rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <LogoContainer>
          <Image
            src="/assets/images/wtx-logo.svg"
            alt="Cultural Events Logo"
            width={128}
            height={32}
            layout="fixed"
          />
        </LogoContainer>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 ps-20 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <NavigationOptionsContainer id="navbar-default">
          <NavigationOptionsStyled>
            <li>
              <AnchorStyled href="#">{t("about")}</AnchorStyled>
            </li>
            <li>
              <AnchorStyled href="#">{t("contact")}</AnchorStyled>
            </li>
            <li>
              <AnchorStyled href="#">{t("visit")}</AnchorStyled>
            </li>
          </NavigationOptionsStyled>
        </NavigationOptionsContainer>
      </div>
    </nav>
  )
}

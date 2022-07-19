import { useTranslation } from "react-i18next"
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"

import Link from "next/link"
import Image from "next/image"

import {
  AnchorStyled,
  UnorderedListStyled,
  UnorderedListContainer,
  NavbarStyled
} from "~/components"

import { COMMON } from "~/constants/translations"
import clsx from "clsx"
import {
  humanReadableLanguage,
  supportedLanguages,
  supportedLanguagesMap
} from "~/constants/languages"

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

function LanguageSelectorDropdown() {
  const { i18n } = useTranslation()

  const handleLanguageChange = (nextLocale: string) => {
    i18n.changeLanguage(nextLocale)
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-electric-green focus:ring-offset-2 focus:ring-offset-gray-100">
          {humanReadableLanguage(i18n.language)}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {supportedLanguages.map((language) => (
              <Menu.Item key={language}>
                {({ active }) => (
                  <button
                    onClick={() => handleLanguageChange(language)}
                    className={clsx(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block  w-full px-4 py-2 text-sm"
                    )}
                  >
                    {humanReadableLanguage(language)}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export function Navbar() {
  const { t } = useTranslation(COMMON)

  return (
    <NavbarStyled>
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

        <UnorderedListContainer id="navbar-default">
          <UnorderedListStyled>
            <LanguageSelectorDropdown />
            <li>
              <AnchorStyled href="#">{t("about")}</AnchorStyled>
            </li>
            <li>
              <AnchorStyled href="#">{t("contact")}</AnchorStyled>
            </li>
            <li>
              <AnchorStyled href="#">{t("visit")}</AnchorStyled>
            </li>
          </UnorderedListStyled>
        </UnorderedListContainer>
      </div>
    </NavbarStyled>
  )
}

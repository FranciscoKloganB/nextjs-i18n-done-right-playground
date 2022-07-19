import { useTranslation } from "react-i18next"

import Link from "next/link"
import Image from "next/image"

import {
  AnchorStyled,
  UnorderedListStyled,
  UnorderedListContainer,
  NavbarStyled
} from "~/components"

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
        <UnorderedListContainer id="navbar-default">
          <UnorderedListStyled>
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

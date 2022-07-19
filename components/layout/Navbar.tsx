import {
  AnchorStyled,
  UnorderedListStyled,
  UnorderedListContainer,
  NavbarStyled
} from "~/components"
import Link from "next/link"
import Image from "next/image"

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
              <AnchorStyled href="#">About</AnchorStyled>
            </li>
            <li>
              <AnchorStyled href="#">Contact</AnchorStyled>
            </li>
            <li>
              <AnchorStyled href="#">Visit</AnchorStyled>
            </li>
          </UnorderedListStyled>
        </UnorderedListContainer>
      </div>
    </NavbarStyled>
  )
}

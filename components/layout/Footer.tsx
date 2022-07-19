import { AnchorStyled, FooterStyled, UnorderedListStyled } from "~/components"

export function Footer() {
  return (
    <FooterStyled>
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          WTX™
        </a>
        . All Rights Reserved.
      </span>
      <UnorderedListStyled>
        <li>
          <AnchorStyled href="#">Privacy Policy</AnchorStyled>
        </li>
        <li>
          <AnchorStyled href="#">Licensing</AnchorStyled>
        </li>
      </UnorderedListStyled>
    </FooterStyled>
  )
}

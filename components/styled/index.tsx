import tw from "tailwind-styled-components"

export const AnchorStyled = tw.a`
  block
  border-b
  py-2
  pe-4
  ps-3
  text-gray-700
  border-gray-100
  hover:bg-light-teal
  md:hover:text-electric-green
  md:border-0
  md:p-0
  md:hover:bg-transparent
`

export const NavigationOptionsContainer = tw.div`
  hidden
  w-full
  md:block
  md:w-auto
`

export const NavigationOptionsStyled = tw.ul`
  mt-4
  flex
  flex-col
  items-center
  md:mt-0
  md:flex-row
  md:space-x-8
  md:text-sm
  md:font-medium
`

export const Button = tw.button`
  bg-electric-green
  inline-flex
  items-center
  justify-center
  rounded-md border
  border-transparent
  px-4
  py-2
  text-sm
  font-medium
  shadow-sm
  focus:outline-none
  focus:ring-2
  focus:ring-offset-2
  sm:w-auto
`

export const FooterStyled = tw.footer`
  fixed
  bottom-0 w-full
  rounded-lg
  bg-white
  p-4 shadow
  dark:bg-gray-800
  md:flex
  md:items-center
  md:justify-between
  md:p-6
`

export const NavbarStyled = tw.nav`
  w-full
  rounded
  border-gray-200
  bg-white
  px-2
  py-2.5
  dark:bg-gray-900
  sm:px-4
`

export const UnorderedListContainer = tw.div`
  hidden
  w-full
  md:block
  md:w-auto
`

export const UnorderedListStyled = tw.ul`
  mt-4
  flex
  flex-col
  items-center
  md:mt-0
  md:flex-row
  md:space-x-8
  md:text-sm
  md:font-medium
`

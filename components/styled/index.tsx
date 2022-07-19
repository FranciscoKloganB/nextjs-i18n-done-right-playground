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
  md:mt-0
  md:flex-row
  md:space-x-8
  md:text-sm
  md:font-medium
`

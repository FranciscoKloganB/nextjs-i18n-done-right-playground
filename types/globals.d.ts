import type { NextPage } from "next"
import type { AppProps } from "next/app"
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ChangeEvent,
  DetailedHTMLProps,
  ImgHTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactElement
} from "react"

declare global {
  type NextAppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
  }

  type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
  }

  type ReactAnchorProps = DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >

  type ReactButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >

  type ReactImageProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
  type ReactKeyboardEvent = KeyboardEvent
  type ReactMouseEvent = MouseEvent
  type ReactOnChangeEvent = ChangeEvent<HTMLInputElement>

  type Timeout = ReturnType<typeof setTimeout>
}

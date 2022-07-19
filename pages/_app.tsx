import useWtxI18n from "~/hooks/use-wtx-i18n"

import "../i18n.config"
import { Navbar, Footer } from "~/components"
import "~/styles/globals.css"

export default function App({ Component, pageProps }: NextAppPropsWithLayout) {
  useWtxI18n()

  return (
    <>
      <Navbar />
      <main className="flex w-screen justify-center">
        <div className="w-4/5 py-12">
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </>
  )
}

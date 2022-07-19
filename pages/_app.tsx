import "~/styles/globals.css"
import "../i18n.config"

import { Navbar, Footer } from "~/components"

export default function App({ Component, pageProps }: NextAppPropsWithLayout) {
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

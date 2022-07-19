import { Navbar } from "~/components"
import DefaultComponent from "~/components/DefaultComponent"
import Footer from "~/components/layout/Footer"

export default function App() {
  return (
    <div>
      <Navbar />
      <DefaultComponent />
      <Footer />
    </div>
  )
}

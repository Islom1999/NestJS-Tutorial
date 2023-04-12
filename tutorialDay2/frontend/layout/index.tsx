import { Navbar } from "@/components"
import { LayoutProps } from "./layout.props"

function Layout({childen}: LayoutProps) {
  return (
    <>
        <Navbar/>
        {childen}
    </>
  )
}

export default Layout
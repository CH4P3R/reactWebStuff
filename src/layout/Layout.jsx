import Footer from "../components/global/Footer"
import Navbar from "../components/global/Navbar"
import { Outlet } from "react-router-dom"
export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

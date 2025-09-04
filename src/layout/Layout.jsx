import Footer from "../components/global/Footer"
import Navbar from "../components/global/Navbar"
import { Outlet } from "react-router-dom"
export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

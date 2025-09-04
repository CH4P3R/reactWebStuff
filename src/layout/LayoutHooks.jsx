import { Outlet } from "react-router-dom"
import HooksSideBar from "../components/global/HooksSideBar"

export default function LayoutHooks() {
  return (
    <div>
        <HooksSideBar />
        <Outlet />
    </div>
  )
}


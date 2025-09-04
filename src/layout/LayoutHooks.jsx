import { Outlet } from "react-router-dom"
import HooksSideBar from "../components/global/HooksSideBar"

export default function LayoutHooks() {
  return (
    <>
        <HooksSideBar />
        <div className="flex w-3/4 items-center justify-center">
          <Outlet />
        </div>
    </>
  )
}


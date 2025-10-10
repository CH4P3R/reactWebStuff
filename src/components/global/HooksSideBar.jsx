import { Link } from "react-router-dom"

export default function HooksSideBar() {
  return (
      <nav className="flex flex-col text-white bg-gray-900 w-1/4">
        <Link className="hover:bg-gray-800 p-5 transition-all duration-200 ease-in-out" to="">useState</Link>
        <Link className="hover:bg-gray-800 p-5 transition-all duration-200 ease-in-out" to="useEffect">useEffect</Link>
        <Link className="hover:bg-gray-800 p-5 transition-all duration-200 ease-in-out" to="useContext">useContext</Link>
        <Link className="hover:bg-gray-800 p-5 transition-all duration-200 ease-in-out" to="useMemo">useMemo</Link>
        <Link className="hover:bg-gray-800 p-5 transition-all duration-200 ease-in-out" to="useReducer">useReducer</Link>
      </nav>
  )
}

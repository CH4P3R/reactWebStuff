import { Link } from "react-router-dom"

export default function HooksSideBar() {
  return (
    <div className="p-5 gap-5">
        <Link to="useEffect">useEffext</Link>
        <Link to="useContext">useContext</Link>
    </div>
  )
}

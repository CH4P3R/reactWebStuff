import { Link } from "react-router-dom"

export default function Navbar() {
  return (
      <nav className="flex gap-2 p-5 justify-center border-b-2 border-black">
        <Link to="/">Home</Link>
        <Link to="/hooks">Hooks</Link>
      </nav>
  )
}

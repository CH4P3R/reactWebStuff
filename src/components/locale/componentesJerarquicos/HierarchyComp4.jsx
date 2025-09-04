import { useContext } from "react"
import MyContext from "../../../context/context";

export default function HierarchyComp4() {
    const context = useContext(MyContext);
  return (
    <div className="bg-fuchsia-400 p-5">
        { context }
    </div>
  )
}

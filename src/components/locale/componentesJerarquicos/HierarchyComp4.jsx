import { useContext } from "react"
import MyContext from "../../../context/context";

export default function HierarchyComp4() {
    const context = useContext(MyContext);
  return (
    <div>
        { context }
    </div>
  )
}

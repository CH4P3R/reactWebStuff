import { useContext } from "react"
import MyContext from "../../context/context";

export default function Componente() {
    const contexto = useContext(MyContext);
  return (
    <div>{contexto}</div>
  )
}

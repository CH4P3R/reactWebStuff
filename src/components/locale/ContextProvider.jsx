import { MyContext } from "../../context/context"

export default function contextComponent({children}) {
    const valor = "Hola"
  return (
    <MyContext.Provider value={valor}>
        {children}
    </MyContext.Provider>
  )
}

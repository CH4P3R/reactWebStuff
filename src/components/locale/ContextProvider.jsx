import MyContext from "../../context/context"

export default function contextComponent({children}) {
    const valor = "Hello, this message comes from a context provider, It is a high level component, thanks to it I have access to this message in spite of beeing a low level component"
  return (
    <MyContext.Provider value={valor}>
        {children}
    </MyContext.Provider>
  )
}

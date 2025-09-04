import { useEffect, useState } from "react"

export default function EffectComponent() {

  const [ value, setValue ] = useState(1);
  const [ variable, setVariable ] = useState(0)

  console.log("Renderizado de EffectComponent")
  useEffect(()=>{
    setVariable((previo) => previo + 1)
  }, [value])
  
  const toggle = ()=>{
    setValue((previo)=> previo + 1)
  }
  return (
    <div>
      <div>{value}</div>
      <div> {variable}</div>
      <button onClick={toggle} className="bg-black text-white p-3 rounded-xl transition-all ease-in-out hover:bg-slate-800">Incrementar</button>
    </div>
  )
}

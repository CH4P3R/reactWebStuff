import { useEffect, useState } from "react"

export default function EffectComponent() {

  const [ value, setValue ] = useState(1);
  const [ variable, setVariable ] = useState(0)

  useEffect(()=>{
    setVariable((previus) => previus + 1)
  }, [value])
  
  const toggle = ()=>{
    setValue((previus)=> previus + 1)
  }
  return (
    <div className="flex flex-col gap-2">
      <span>This one is a state, it changes in every click event</span>
      <div className="border-2 border-black text-center rounded-lg">{value}</div>
      <div className="flex flex-col">
        <span>This one is also a state, but it changes every time the other state changes </span>
        <span>It doesn't care about the click event.</span>
      </div>
      <div className="border-2 border-black text-center rounded-lg"> {variable}</div>
      <button onClick={toggle} className="bg-gray-900 text-white p-3 rounded-xl transition-all ease-in-out hover:bg-slate-800">Increment</button>
    </div>
  )
}

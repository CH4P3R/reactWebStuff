import { useMemo, useState } from "react"

export default function MemoComponent() {
    const [ value, setValue ] = useState(10)
    const [ changed, setChanged ] = useState(false)

    const memorizedValue = useMemo(() => {
        return value * 2
    }, [])

    const enableMessage = () => {
        setChanged(true)
    }
    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            <div className="flex flex-col gap-2">
                <div>Original value: {value}</div>
                <div>Random memorized calculation <span className="text-blue-700 font-bold"> {'(original value * 2)'} : </span> {memorizedValue}</div>
                <button className="bg-gray-900 text-white rounded-lg p-2" onClick={()=> {setValue((anterior)=> anterior + 1); enableMessage()}}>Change original value</button>
            </div>
            { changed && <span className="text-orange-400">The original value has changed, but the <span className="font-bold">memorized value</span> remains the same, and it doesn't need to be recalculated internally</span> }
        </div>
    )
}

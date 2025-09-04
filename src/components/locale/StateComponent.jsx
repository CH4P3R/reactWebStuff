import { useState } from "react"

export default function StateComponent() {
    const [state, setState] = useState("Hello world!")
    const [inputValue, setInputValue] = useState("")

    const changeState = () => {
        setState(inputValue)
    }

    return (
        <div className="flex flex-col gap-2">
            <span>Initial state: {state}</span>
            <input
                className="border-2"
                type="text"
                name="inputState"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
            <button
                className="bg-gray-900 text-white rounded-lg p-2"
                onClick={changeState}
            >
                Change State
            </button>
        </div>
    )
}

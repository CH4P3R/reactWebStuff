import { useReducer, useState } from "react"
// 0% AI, full handmade
export default function ReducerComponent() {
  const [ stateValues, setStateValues ] = useState([])
  const initialState = {
    name : "Feddy",
    lastName : "Campos",
    age : 21,
    wife : "Rio Futaba",
    favoriteGame : "Genshin Impact"
  }
  const userReducer = (state, action)=>{
    const options = {
      changeName : ()=> { return {...state, name: action.payload } },
      changeLastName : ()=>{return {...state, lastName: action.payload }},
      changeAge : ()=>{return {...state, age: action.payload }},
      changeWife : ()=>{return {...state, wife: action.payload }},
      changeFavoriteGame : ()=>{return {...state, favoriteGame: action.payload }}
    }
    return options[action.type]?.() || state;
  }
  const exploreAllChanges = ()=>{
    stateValues.forEach((value)=>{
      dispatch(value)
    })
    }
  
  const [ state, dispatch ] = useReducer(userReducer, initialState)
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h2 className="text-center font-bold">Initial state</h2>
          <p>{'Name: ' + state.name}</p>
          <p>{'Last name: ' + state.lastName }</p>
          <p>{'Age: ' + state.age }</p>
          <p>{'Wife: ' + state.wife }</p>
          <p>{'Favorite game: ' + state.favoriteGame }</p>
            <input
                className="border-2"
                type="text"
                name="inputState"
                onChange={event => setStateValues([...stateValues, { type: "changeName", payload : event.target.value}])}
                placeholder="New name"
            />
            <input
                className="border-2"
                type="text"
                name="inputState"
                onChange={event => setStateValues([...stateValues, { type: "changeLastName", payload : event.target.value}])}
                placeholder="New last name"
            />
            <input
                className="border-2"
                type="text"
                name="inputState"
                onChange={event => setStateValues([...stateValues, { type: "changeAge", payload : event.target.value}])}
                placeholder="New age"
            />
            <input
                className="border-2"
                type="text"
                name="inputState"
                onChange={event => setStateValues([...stateValues, { type: "changeWife", payload : event.target.value}])}
                placeholder="New wife"
            />
            <input
                className="border-2"
                type="text"
                name="inputState"
                onChange={event => setStateValues([...stateValues, { type: "changeFavoriteGame", payload : event.target.value}])}
                placeholder="New favorite game"
            />
            <button 
                className="bg-gray-900 text-white rounded-lg p-2"
                onClick={exploreAllChanges}>
                Change state
            </button>
        </div>
    </div>
  )
}

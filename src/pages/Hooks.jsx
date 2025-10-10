import { Routes, Route, Navigate } from "react-router-dom"
import LayoutHooks from "../layout/LayoutHooks"
import ContextProvider from "../components/locale/ContextProvider"
import EffectComponent from "../components/locale/EffectComponent"
import ContextComponent from "../components/locale/ContextComponent"
import StateComponent from "../components/locale/StateComponent"
import MemoComponent from "../components/locale/MemoComponent"
import ReducerComponent from "../components/locale/ReducerComponent"
export default function Hooks() {
  return (
    <div className="flex w-screen">
      <ContextProvider>
        <Routes>
          <Route path="/" element={<LayoutHooks />}>
            <Route index element={<Navigate to="useState" replace />} />
            <Route  path="useState" element={<StateComponent />} />
            <Route  path="useEffect" element={<EffectComponent />}/>
            <Route  path="useContext" element={<ContextComponent />}/>
            <Route  path="useMemo" element={<MemoComponent />} />
            <Route  path="useReducer" element={<ReducerComponent />} />
          </Route>
        </Routes>
      </ContextProvider>
    </div>
  )
}

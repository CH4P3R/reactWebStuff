import { Routes, Route, Navigate } from "react-router-dom"
import LayoutHooks from "../layout/LayoutHooks"
import ContextProvider from "../components/locale/ContextProvider"
import EffectComponent from "../components/locale/EffectComponent"
import ContextComponent from "../components/locale/ContextComponent"
import StateComponent from "../components/locale/StateComponent"

export default function Hooks() {
  return (
    <div className="flex w-screen">
      <ContextProvider>
        <Routes>
          <Route path="/" element={<LayoutHooks />}>
            <Route index element={<Navigate to="useState" replace />} />
            <Route index path="useState" element={<StateComponent />}/>
            <Route index path="useEffect" element={<EffectComponent />}/>
            <Route index path="useContext" element={<ContextComponent />}/>
          </Route>
        </Routes>
      </ContextProvider>
    </div>
  )
}

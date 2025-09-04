import { Routes, Route } from "react-router-dom"
import LayoutHooks from "../layout/LayoutHooks"
import EffectComponent from "../components/locale/EffectComponent"

export default function Hooks() {
  return (
    <div className="text-center">
        <Routes>
          <Route path="/" element={<LayoutHooks />}>
            <Route path="useEffect" element={<EffectComponent />}/>
          </Route>
        </Routes>
    </div>
  )
}

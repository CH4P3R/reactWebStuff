import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import Hooks from "./pages/Hooks"
export default function App() {
  return (
    <div className='flex flex-col w-screen'>
        <Router>
          <Routes>
            <Route element = {< Layout/>}>
              <Route path='/' element = {< HomePage />}/>
              <Route path='/hooks/*' element = {< Hooks />}/>
            </Route>
          </Routes>
        </Router>
    </div>
  )
}

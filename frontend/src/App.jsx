import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './AllRoutes'
import Navbar from './components/Navbar'
console.log(import.meta.env.VITE_BASE_URL)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <AllRoutes/>
    </BrowserRouter>
    </>
  )
}

export default App

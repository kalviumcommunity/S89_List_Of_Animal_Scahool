import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#4CAF50" }}>Animal Schools</h2>
      <p style={{ textAlign: "center", color: "#333" }}>
        Animal schools are unique learning institutions where different species 
        of animals develop survival skills, communication techniques, and social behaviors.
        These schools exist in diverse environments such as jungles, oceans, savannahs, 
        and arctic regions, each adapted to the specific needs of its inhabitants.
      </p>
    </div>
    </>
  )
}

export default App

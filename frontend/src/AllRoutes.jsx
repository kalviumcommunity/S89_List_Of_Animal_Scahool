import React from 'react'
import {Routes,Route} from "react-router-dom"
import Homepage from './Homepage'
import About from './About'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
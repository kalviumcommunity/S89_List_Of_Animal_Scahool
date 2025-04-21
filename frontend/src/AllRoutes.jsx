import React from 'react'
import {Routes,Route} from "react-router-dom"
import Homepage from './Homepage'
import About from './About'
import AddAnimalSchool from './components/AddAnimalSchool'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/addSchool' element={<AddAnimalSchool/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
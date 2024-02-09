import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup/Signup'
import Login from './Login/Login'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './SignupPage/SignupPage'
import Login from './LoginPage/LoginPage'
import HomePage from './HomePage/HomePage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
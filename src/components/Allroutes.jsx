import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes
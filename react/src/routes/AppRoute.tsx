import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Top from '../pages/Top'
import Dashboard from '../pages/company/Dashboard'
import Home from '../pages/project/Home'


const AppRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Top/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/project' element={<Home/>}></Route>
    </Routes>
  )
}

export default AppRoute
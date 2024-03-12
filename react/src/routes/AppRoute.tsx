import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Top from '../pages/Top'
import Dashboard from '../pages/company/Dashboard'
import Home from '../pages/project/Home'
import CreateTask from '../pages/task/CreateTask'
import Tasks from '../pages/task/Tasks'
import Board from '../pages/task/Board'
import GanttChart from '../pages/task/GanttChart'
import Wiki from '../pages/wiki/Wiki'
import ProjectSetting from '../pages/setting/ProjectSetting'


const AppRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Top/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/project' element={<Home/>}></Route>
      <Route path='/createTask' element={<CreateTask/>}></Route>
      <Route path='/tasks' element={<Tasks/>}></Route>
      <Route path='/board' element={<Board/>}></Route>
      <Route path='/ganttchart' element={<GanttChart/>}></Route>
      <Route path='/wiki' element={<Wiki/>}></Route>
      <Route path='/projectSetting' element={<ProjectSetting/>}></Route>
    </Routes>
  )
}

export default AppRoute
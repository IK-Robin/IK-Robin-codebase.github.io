import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './Container/nasted routing/Home'
import UserPage from './Container/Dynamic route/UserPage'
import UserDetail from './Container/Dynamic route/UserDetail'
function App() {
  return (
 <>
    <Link to={'/'} > home</Link>
    <Link to={'/users'} > user</Link>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route   path="/users" element={<UserPage/>} />
    <Route   path="/UserDetail/:userId" element={<UserDetail/>} />

  </Routes>
 </>
  )
}

export default App
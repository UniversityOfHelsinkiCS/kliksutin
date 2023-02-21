import React from 'react'
import { Route, Routes } from 'react-router-dom'

import InteractiveForm from './components/InteractiveForm/InteractiveForm'
import Admin from './components/Admin/Admin'

const Router = () => (
  <Routes>
    <Route path="/" element={<InteractiveForm />} />
    <Route path="/admin" element={<Admin />} />
  </Routes>
)

export default Router

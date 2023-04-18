import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Admin from './components/Admin/Admin'
import Contact from './components/ContactPage/Contact'
import InteractiveForm from './components/InteractiveForm/InteractiveForm'

const Router = () => (
  <Routes>
    <Route path="/*" element={<InteractiveForm />} />
    <Route path="/public" element={<InteractiveForm />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
)

export default Router

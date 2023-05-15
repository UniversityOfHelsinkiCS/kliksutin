import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Admin from './components/Admin/Admin'
import Contact from './components/ContactPage/Contact'
import InteractiveForm from './components/InteractiveForm/InteractiveForm'
import EditQuestions from './components/Admin/EditQuestions/EditQuestions'
import EditResults from './components/Admin/EditResults/EditResults'

const Router = () => (
  <Routes>
    <Route path="/*" element={<InteractiveForm />} />
    <Route path="/public" element={<InteractiveForm />} />
    <Route path="/admin" element={<Admin />}>
      <Route path="edit-questions" element={<EditQuestions />} />
      <Route path="edit-results" element={<EditResults />} />
    </Route>
    <Route path="/contact" element={<Contact />} />
  </Routes>
)

export default Router

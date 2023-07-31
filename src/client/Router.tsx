import React from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './App'
import InteractiveForm from './components/InteractiveForm/InteractiveForm'
import Admin from './components/Admin/Admin'
import Contact from './components/ContactPage/Contact'
import Viewer from './components/Viewer/Viewer'
import EditDimensions from './components/Admin/EditDimensions/EditDimensions'
import EditQuestions from './components/Admin/EditQuestions/EditQuestions'
import EditResults from './components/Admin/EditResults/EditResults'
import EditRecommendations from './components/Admin/EditRecommendations/EditRecommendations'
import EditSurvey from './components/Admin/EditSurvey/EditSurvey'
import RootBoundary from './components/Errors/RootBoundary'
import NotFound from './components/Errors/NotFound'

import { PUBLIC_URL } from '../config'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<RootBoundary />}>
      <Route index element={<InteractiveForm />} />
      <Route path="/public" element={<InteractiveForm />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/view">
        <Route path=":entryId" element={<Viewer />} />
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route index element={<EditSurvey />} />
        <Route path="edit-dimensions" element={<EditDimensions />} />
        <Route path="edit-questions" element={<EditQuestions />} />
        <Route path="edit-results" element={<EditResults />} />
        <Route path="edit-recommendations" element={<EditRecommendations />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  { basename: PUBLIC_URL }
)

const Router = () => <RouterProvider router={router} />

export default Router

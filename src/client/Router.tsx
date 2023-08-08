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
import RenderEditDimensions from './components/Admin/EditDimensions/RenderEditDimensions'
import EditQuestions from './components/Admin/EditQuestions/EditQuestions'
import RenderEditQuestions from './components/Admin/EditQuestions/RenderEditQuestions'
import EditResults from './components/Admin/EditResults/EditResults'
import RenderEditResults from './components/Admin/EditResults/RenderEditResults'
import EditRecommendations from './components/Admin/EditRecommendations/EditRecommendations'
import RenderEditRecommendations from './components/Admin/EditRecommendations/RenderEditRecommenstations'
import RenderEditSurvey from './components/Admin/EditSurvey/RenderEditSurvey'
import RootBoundary from './components/Errors/RootBoundary'
import NotFound from './components/Errors/NotFound'

import { PUBLIC_URL } from '../config'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<RootBoundary />}>
      <Route
        index
        element={<InteractiveForm />}
        errorElement={<RootBoundary />}
      />
      <Route
        path="/public"
        element={<InteractiveForm />}
        errorElement={<RootBoundary />}
      />
      <Route
        path="/contact"
        element={<Contact />}
        errorElement={<RootBoundary />}
      />
      <Route path="/view" errorElement={<RootBoundary />}>
        <Route path=":entryId" element={<Viewer />} />
      </Route>
      <Route path="/admin" element={<Admin />} errorElement={<RootBoundary />}>
        <Route index element={<RenderEditSurvey />} />
        <Route path="edit-dimensions" element={<RenderEditDimensions />}>
          <Route path=":dimensionId" element={<EditDimensions />} />
        </Route>
        <Route path="edit-questions" element={<RenderEditQuestions />}>
          <Route path=":questionId" element={<EditQuestions />} />
        </Route>
        <Route path="edit-results/" element={<RenderEditResults />}>
          <Route path=":questionId/:dimensionId?" element={<EditResults />} />
        </Route>
        <Route
          path="edit-recommendations"
          element={<RenderEditRecommendations />}
        >
          <Route path=":recommendationId" element={<EditRecommendations />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  {
    basename: PUBLIC_URL,
  }
)

const Router = () => <RouterProvider router={router} />

export default Router

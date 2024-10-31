import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Suspense } from 'react'

import WelcomePage from './pages/WelcomePage.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import SignUpPage from './pages/SignUpPage.tsx'
import LogInPage from './pages/LogInPage.tsx'
import Preloader from './components/Preloader.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "about",
    lazy: async () => {
      const AboutPage = await import('./pages/AboutPage.tsx');
      return {
        element: (
          <Suspense fallback={<Preloader/>}>
            <AboutPage.default />
          </Suspense>
        ),
      };
    }
  },
  {
    path: "terms-of-policy",
    lazy: async () => {
      const PolicyPage = await import('./pages/PolicyPage.tsx');
      return {
        element:  (
          <Suspense fallback={<Preloader/>}>
            <PolicyPage.default />
          </Suspense>
        ),
      };
    }
  },
  {
    path: "login",
    element: <LogInPage/>
  },
  {
    path: "signup",
    element: <SignUpPage/>
  },
  {
    path: "workspace",
    lazy: async () => {
      const WorkspacePage = await import('./pages/WorkspacePage.tsx');
      return {
        element: (
          <Suspense fallback={<Preloader/>}>
            <WorkspacePage.default />
          </Suspense>
        ),
      };
    }
  },
])

export default function App() {

  return (
    <RouterProvider router={router}/>
  )
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './Store/store.js'
import { Provider } from 'react-redux'
import {HomePage,Experience,Skills} from './Components/Index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/home',
        element: <HomePage/>
      },
      {
        path: 'skills',
        element: <Skills/>
      },
      {
        path: 'experience',
        element: <Experience/>
      },
      {
        path: 'certifications',
        element: <h1>Achievements/Certifications</h1>
      }
    ]
  }])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>
  </StrictMode>,
)

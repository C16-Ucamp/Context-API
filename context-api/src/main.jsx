import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ColorProvider } from './context/ColorContext.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Profile from './componentes/Profile.jsx'
import LoginForm from './componentes/LoginForm.jsx'
import { UserProvider } from './context/UserContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
      element: <ColorProvider><App /></ColorProvider>
  },
  {
    path: '/login',
    element: <UserProvider><LoginForm/></UserProvider>
  },
  {
    path: '/profile',
    element:<UserProvider><Profile /></UserProvider>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)

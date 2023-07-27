import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Profile from './componentes/Profile.jsx'
import LoginForm from './componentes/LoginForm.jsx'
import { UserProvider } from './context/UserContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductProvider } from './context/ProductContext.jsx'
import Admin from './componentes/Admin.jsx'
import {PayPalScriptProvider} from '@paypal/react-paypal-js'

const router = createBrowserRouter([
  {
    path: '/',
      element:<ProductProvider><App /></ProductProvider>
  },
  {
    path: '/login',
    element: <UserProvider><LoginForm/></UserProvider>
  },
  {
    path: '/profile',
    element:(<UserProvider>  
      <PayPalScriptProvider
    options={{
        "clientId": "AXswcwaJFeajveETe6M_BEAQyBrgaeITOOL9pXskHT3aTcOfJ-Dw6GVQlfZhUp7tzYDR8FzJPpXy3-o_",
        components: "buttons",
        currency: "USD"
    }}> 
    <Profile /> 
    </PayPalScriptProvider>
    </UserProvider>
)},
  {
    path: '/admin',
    element: (<UserProvider><ProductProvider><Admin /></ProductProvider></UserProvider>)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { Audit } from './components/admin.jsx';
import { Addproduct } from './components/Addproducts.jsx';
import { UpdateProduct } from './components/update.jsx';
import { Login } from './components/login.jsx';
import About from './components/About.jsx';
import Pricing from './components/Pricing.jsx';
let router = createBrowserRouter([
  {
    path: "/",
    Component: App
  }, {
    path: "/admin",
    Component: Audit
  }, {
    path: "/admin/addproduct",
    Component: Addproduct
  }, {
    path: "/admin/update",
    Component: UpdateProduct
  }, {
    path: "/admin-login",
    Component: Login
  }, {
    path: "/about",
    Component: About
  }, {
    path: "/pricing",
    Component: Pricing
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

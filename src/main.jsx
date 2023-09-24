import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import OrderReview from './components/OrderReview/OrderReview.jsx'
import ManageInventory from './components/ManageInventory/ManageInventory.jsx'
import Login from './components/Login/Login.jsx'
import Products from './components/Products/Products.jsx'
import cartProducts from './Utilities/cartProducts.js'
import ProceedCheckout from './components/ProceedCheckout/ProceedCheckout.jsx'
import EmptyPage from './components/EmptyPage/EmptyPage.jsx'
import Register from './components/Register/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Products />
      },
      {
        path: 'review',
        element: <OrderReview />,
        loader: cartProducts
      },
      {
        path: 'manage',
        element: <ManageInventory />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'proceed',
        element: <ProceedCheckout />
      },
      {
        path: '*',
        element: <EmptyPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

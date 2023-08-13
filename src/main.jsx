import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import OrderReview from './components/OrderReview/OrderReview.jsx'
import ManageInventory from './components/ManageInventory/ManageInventory.jsx'
import Login from './components/Login/Login.jsx'
import Products from './components/Products/Products.jsx'

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
        element: <OrderReview />
      },
      {
        path: 'manage',
        element: <ManageInventory />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

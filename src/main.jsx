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
import Home from './components/Home/Home.jsx'
import AuthProvider from './components/provider/AuthProvider.jsx'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/provider/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <PrivateRoute><Products /></PrivateRoute>
      },
      {
        path: 'review',
        element: <PrivateRoute><OrderReview /></PrivateRoute>,
        loader: cartProducts
      },
      {
        path: 'manage',
        element: <PrivateRoute><ManageInventory /></PrivateRoute>
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
        element: <PrivateRoute><ProceedCheckout /></PrivateRoute>
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
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)

import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import CartProductsLoader from './Loder/CartLoader';
import Checkout from './components/Cart/Checkout/Checkout';
import Singup from './components/Singup/Singup';
import AuthProviders from './Providers/AuthProviders';
import PrivateRoute from './PrivateRoutes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'singup',
        element: <Singup></Singup>
      },
      {
        path: '/inventory',
        element: <PrivateRoute> <Inventory></Inventory></PrivateRoute>
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: CartProductsLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)

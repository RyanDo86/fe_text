import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Allproduct from './components/Allproduct/Allproduct'
import Layout from './components/Layout/Layout'
import Cart from './components/Cart/Cart'
import ProductOverviews from './components/ProductOverviews/ProductOverviews'
import Contact from './components/Contact/Contact'

const router = createBrowserRouter([
  { path: '/', element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/allproduct', element: <Allproduct /> },
      { path: '/cart', element: <Cart /> },
      { path: '/detail', element: <ProductOverviews /> },
      { path: '/contact', element: <Contact /> },
    ]
  },
])

const App = () => <RouterProvider router={router} />

export default App

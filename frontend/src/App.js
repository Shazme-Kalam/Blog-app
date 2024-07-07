import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Blogs from './components/getblog/blog';
import Add from './components/addblog/add';
import Edit from '.components/update/Edit';
 
import React from 'react'

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Blogs />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/edit/:id",
      element: <Edit />,
    },
  ])
  return (
    <div className="App">
    <RouterProvider router={route}>  </RouterProvider>
  </div>
);
}

export default App;
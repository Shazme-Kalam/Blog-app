import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Blog from './components/getblog/blog';
import Add from './components/addblog/add';
import Edit from './components/updateblog/Edit';


function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Blog />,
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

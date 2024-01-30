
import Button from '@mui/material/Button';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import HomeLayout from './pages/HomeLayout.tsx';
import DetailsLayout from './pages/DetailsLayout.tsx';
import NotFound from './pages/NotFound.tsx';
function App() {
  const routes = createBrowserRouter([
    {
      path:'/',
      element:<HomeLayout/>
    },
    {
      path:"/aniverse/:id",
      element:<DetailsLayout/>
    },{
      path:'*',
      element:<NotFound/>
    }
  ])

  return (
    <>
        <RouterProvider router={routes}/>
    </>
  )
}

export default App

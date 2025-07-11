
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import Category from './pages/Category'
import Search from './pages/Search'
import SingleGif from './pages/SingleGif'
import Favorites from './pages/Favorites'

// Home Page
// Categories page
// search page
// single gif
// favories

const router = createBrowserRouter([
  {
    element: <AppLayout/>,

    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/:category",
        element: <Category/>,
      },
      {
        path: "/search/:query",
        element: <Search/>,
      },
      {
        path: "/:type/:slug",
        element: <SingleGif/>,
      },
      {
        path: "/favorites",
        element: <Favorites/>,
      }
    ]
  }
])


function App() {
  
  return <RouterProvider router={router}/>;
}

export default App

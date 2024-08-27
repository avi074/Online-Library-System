import App from "./App"
import Home from "./components/Home"
import { createBrowserRouter, Navigate } from "react-router-dom"
import NotFound from "./components/NotFound"
import AddBook from "./components/AddBook"
import BrowseBooks from "./components/BrowseBooks"
import BookDeatils from "./components/BookDetails"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to='/home' replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "books/:category",
        element: <BrowseBooks />,
      },
      {
        path: "books/:category/:id",
        element: <BookDeatils />,
      },
      {
        path: "addBook",
        element: <AddBook />,
      },
    ],
  },
])

export default routes

import { createBrowserRouter, Navigate } from "react-router-dom"
import { lazy, Suspense } from "react"
import App from "./App"
import Loading from "./components/Loading"
import NotFound from "./components/NotFound"

// const App = lazy(() => import("./App"))
const Home = lazy(() => import("./components/Home"))
const AddBook = lazy(() => import("./components/AddBook"))
const BrowseBooks = lazy(() => import("./components/BrowseBooks"))
const BookDetails = lazy(() => import("./components/BookDetails"))

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
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "books/:category",
        element: (
          <Suspense fallback={<Loading />}>
            <BrowseBooks />
          </Suspense>
        ),
      },
      {
        path: "books/:category/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <BookDetails />
          </Suspense>
        ),
      },
      {
        path: "addBook",
        element: (
          <Suspense fallback={<Loading />}>
            <AddBook />
          </Suspense>
        ),
      },
    ],
  },
])

export default routes

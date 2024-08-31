import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "@material-tailwind/react"
import { RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import bookStore from "./utils/bookStore"
import routes from "./routes"
import "./index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={bookStore}>
        <RouterProvider router={routes} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)

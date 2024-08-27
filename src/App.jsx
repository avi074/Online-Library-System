import { Outlet } from "react-router"
import Header from "./components/Header"
import Search from "./components/Search"

function App() {

  return (
    <>
      <Header />
      <Search />
      <Outlet />
    </>
  )
}

export default App

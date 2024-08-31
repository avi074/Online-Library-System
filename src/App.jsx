import { Outlet } from "react-router"
import Header from "./components/Header"

function App() {
  // const {allBooks, books} = useSelector(state => state.library)
  // useEffect(() => {
  //   console.log(books.length)
  //   const check = ({title, author, rating}) => {
  //     console.log(title, author, rating)
  //   }
  //   books.map(key => check(allBooks[key]))

  // },[])
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App

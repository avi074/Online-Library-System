import { Link } from "react-router-dom"

function NotFound() {
  return (
    <>
      <h1> Page Not Found </h1>
      <Link to='/home'> Go to Home</Link>
    </>
  )
}

export default NotFound

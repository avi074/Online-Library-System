import { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

function BookDeatils() {
  const { category, id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    
  }, [category, id, navigate])

  return (
    <>
      <h1>Hello Book {id}</h1>
      <Link to={`/books/${category}`}>Back to Browse books</Link>
    </>
  )
}

export default BookDeatils

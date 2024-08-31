import { Button } from "@material-tailwind/react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

function BookDeatils() {
  const { category, id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {}, [category, id, navigate])

  return (
    <>
      <Button
        variant='gradient'
        color='blue'
        onClick={() => {
          navigate(`/books/${category}`)
        }}>
        Back to Browse
      </Button>
    </>
  )
}

export default BookDeatils

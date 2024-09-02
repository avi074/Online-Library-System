import { Typography } from "@material-tailwind/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setPopularBooksAboveRating } from "../utils/bookSlice"
import BookList from "./BookList"

function Home() {
  const { category, popular } = useSelector((store) => store.library)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPopularBooksAboveRating(4.2))
  }, [dispatch])

  return (
    <>
      <div id='heading-intro' className='text-center text-balance'>
        <Typography variant='h1' className='text-gray-800'>
          Hello Reader
        </Typography>
        <Typography variant='h2' className='text-gray-600'>
          Welcome to the library
        </Typography>
        <Typography
          variant='h4'
          className='text-justify my-8 mx-4 text-gray-900'>
          Choose the book category :
        </Typography>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-4'>
        {Object.keys(category).map((categ, index) => (
          <Link
            key={`${categ}-link-${index}`}
            to={`/books/${categ}`}
            className='categ-link'>
            {categ}
          </Link>
        ))}
      </div>
      {popular.length > 0 && (
        <div>
          <Typography variant='h4' color="blue-gray" className='my-8 mx-4'>Popular Books</Typography>
          <BookList bookArr={popular} />
        </div>
      )}
    </>
  )
}

export default Home

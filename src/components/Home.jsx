import { Typography } from "@material-tailwind/react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Home() {
  const { category } = useSelector((store) => store.library)

  return (
    <>
      <div id='heading-intro' className='text-center text-balance'>
        <Typography variant='h1' className="text-gray-800">
          Hello Reader
        </Typography>
        <Typography variant='h2' className="text-gray-600">Welcome to the library</Typography>
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
    </>
  )
}

export default Home

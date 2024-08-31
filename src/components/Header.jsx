import { Typography } from "@material-tailwind/react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className='p-3 mb-4 flex flex-col sm:flex-row items-center border-b-2 border-orange-700'>
      <div id="web-logo" className="w-full">
        <Link to='/home'>
          <Typography variant='h3' color='blue' className='italic md:underline'>
            Online Library System
          </Typography>
        </Link>
      </div>
      <div id="nav-links" className='w-full flex justify-end gap-3 items-center text-lg font-semibold'>
        <Link to='/home'>
          <span>Home</span>
        </Link>
        <Link to='/books/all'>
          <span>Browse Books</span>
        </Link>
        <Link to='/addBook'>
          <span>Add Book</span>
        </Link>
      </div>
    </header>
  )
}

export default Header

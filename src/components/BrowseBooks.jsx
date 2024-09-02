import Search from "./Search"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentCategoryAndBooks } from "../utils/bookSlice"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import BookList from "./BookList"
import { Typography } from "@material-tailwind/react"

function BrowseBooks() {
  const searchCategory = { title: "Title", author: "Author" }
  const dispatch = useDispatch()
  const { category } = useParams()
  const { books, allBooks, newlyAdded } = useSelector((state) => state.library)
  const [filteredBooks, setFilteredBooks] = useState([])

  const handleSearch = (searchCateg, searchVal) => {
    setFilteredBooks(
      searchVal
        ? books.filter((ele) =>
            allBooks[ele][searchCateg]
              .toLowerCase()
              .includes(searchVal.toLowerCase()),
          )
        : books,
    )
  }

  useEffect(() => {
    dispatch(setCurrentCategoryAndBooks(category))
  }, [category, dispatch])

  useEffect(() => {
    setFilteredBooks(books)
  }, [books])

  const Catalogue = ({ arr, str }) => {
    return (
      <div className='m-4'>
        <Typography variant='h4' color='blue-gray' className='mx-4 capitalize'>
          {str} Books
        </Typography>
        <BookList bookArr={arr} />
      </div>
    )
  }

  return (
    <>
      <Search category={searchCategory} searchHandler={handleSearch} />
      {newlyAdded.length > 0 && (
        <Catalogue arr={newlyAdded} str='Newly Added' />
      )}
      <Catalogue arr={filteredBooks} str={category} />
    </>
  )
}

export default BrowseBooks

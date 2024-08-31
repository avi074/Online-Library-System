import Search from "./Search"
import { useDispatch, useSelector } from "react-redux"
import { searchAndUpdateBooks, setCurrentCategoryAndBooks } from "../utils/bookSlice"
import { useParams } from "react-router"
import { useEffect } from "react"

function BrowseBooks() {
  const searchCategory = { title: "Title", author: "Author" }
  const dispatch = useDispatch()
  const {category} = useParams();
  const books = useSelector(state => state.library.books)

  const handleSearch = (searchCateg, searchVal) => {
    dispatch(searchAndUpdateBooks({ searchCateg, searchVal }))
  }
  useEffect(() => {
    console.log("effect", books)
    dispatch(setCurrentCategoryAndBooks(category));
  },[category, dispatch])

  useEffect(() => {
    console.log("books updated", books);
  }, [books])

  return (
    <>
      <Search category={searchCategory} searchHandler={handleSearch} />
    </>
  )
}

export default BrowseBooks

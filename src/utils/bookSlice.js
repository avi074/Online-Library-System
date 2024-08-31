import { createSlice } from "@reduxjs/toolkit"
import { booksObj, categoryObj } from "./mockdata"

const bookSlice = createSlice({
  name: "library",
  initialState: {
    allBooks: booksObj,
    books: [],
    newlyAdded: [],
    category: categoryObj,
    currCateg: "",
  },
  reducers: {
    setCurrentCategoryAndBooks: (state, action) => {
      state.currCateg = action.payload
      if (state.currCateg === "all") {
        state.books = Object.keys(state.allBooks)
      } else {
        state.books = Object.values(state.category[state.currCateg])
      }
    },

    addBookToLibrary: (state, action) => {
      state.books.push(action.payload)
    },

    searchAndUpdateBooks: (
      { allBooks, books },
      { payload: { searchCateg, searchVal } },
    ) => {
      console.log(searchCateg, searchVal)
      console.log(
        books.filter((ele) =>
          allBooks[ele][searchCateg]
            .toLowerCase()
            .includes(searchVal.toLowerCase()),
        ),
      )
    },
  },
})

export const {
  setCurrentCategoryAndBooks,
  addBookToLibrary,
  searchAndUpdateBooks,
} = bookSlice.actions

export default bookSlice.reducer

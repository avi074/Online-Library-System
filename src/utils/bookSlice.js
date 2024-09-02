import { createSlice } from "@reduxjs/toolkit"
import { booksObj, categoryObj } from "./mockdata"

const bookSlice = createSlice({
  name: "library",
  initialState: {
    allBooks: booksObj,
    books: [],
    newlyAdded: [],
    popular: [],
    category: categoryObj,
    currCateg: "all",
  },
  reducers: {
    setPopularBooksAboveRating: (state, action) => {
      const rating = action.payload
      state.popular.length = 0
      Object.keys(state.allBooks).map((ele) => {
        if (state.allBooks[ele].rating > rating) {
          state.popular.push(ele)
        }
      })
    },

    setCurrentCategoryAndBooks: (state, action) => {
      state.currCateg = action.payload
      if (state.currCateg === "all") {
        state.books = Object.keys(state.allBooks)
      } else {
        state.books = Object.values(state.category[state.currCateg])
      }
    },

    addBookToLibrary: (state, action) => {
      const { isbn, ...book } = action.payload
      if (!state.allBooks[isbn]) {
        state.allBooks[isbn] = book // Object.assign(state.allBooks, {isbn: book})
        state.newlyAdded.push(isbn)
        for (const categ of book.category) {
          if (state.category[categ]) {
            state.category[categ].push(isbn)
          } else {
            state.category[categ] = [isbn]
          }
        }
      }else{
        throw new Error(`Book ${isbn} Already Exists !!!`)
      }
    },
  },
})

export const {
  setPopularBooksAboveRating,
  setCurrentCategoryAndBooks,
  addBookToLibrary,
} = bookSlice.actions

export default bookSlice.reducer

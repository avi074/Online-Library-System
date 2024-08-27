import { createSlice } from "@reduxjs/toolkit"

const bookSlice = createSlice({
  name: "library",
  initialState: {
    books: [{ id: 1 }],
  },
  reducers: {
    addBookToLibrary: (state, action) => {
      state.books.push(action.payload)
    },
  },
})

export const { addBookToLibrary } = bookSlice.actions

export default bookSlice.reducer

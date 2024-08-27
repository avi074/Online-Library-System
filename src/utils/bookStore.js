import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";

const bookStore = configureStore({
    reducer:{
        library: bookSlice
    }
})

export default bookStore
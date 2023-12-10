import { configureStore } from "@reduxjs/toolkit";
import accReducer from "../redux/accSlice"

export const store = configureStore({
    reducer: {
        acc: accReducer
    }
})
import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../redux/bookingSlice";
import accReducer from "../redux/accSlice";
import wishReducer from "../redux/wishSlice";

export const store = configureStore({
    reducer: {
        acc: accReducer,
        booking: bookingReducer,
        wish: wishReducer
    }
})
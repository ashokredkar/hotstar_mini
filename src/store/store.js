import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import moviesSlice from "./homeSlice";

export const store = configureStore({
    reducer: {
        home: homeSlice,
        movies: moviesSlice
    }
});
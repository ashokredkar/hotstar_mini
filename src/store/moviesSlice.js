import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        favoriteMovies: [],
    },
    reducers: {
        favoriteMovie(state, action) {
            state.favoriteMovies.push(action.payload);
        },
        unfavoriteMovie(state, action) {
            state.favoriteMovies = state.favoriteMovies.filter(movie => movie.id !== action.payload);
        },
    }
});

export const { favoriteMovie, unfavoriteMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
import MovieSlice from './slice';

// Reducer
export const movieSliceReducer = MovieSlice.reducer;

// Actions
export const {setMovies} = MovieSlice.actions;
// Selectors

export const selectIsMovies = (state) => state.movie.movies;
export const selectTitle = (state) => state.movie.title;

import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState = {
  movies: [],
  title:''
};

const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers:{
  setMovies: (state, action) => {
    state.movies = action.payload.movies;
    state.title = action.payload.title
  },
}
})

export default MovieSlice;

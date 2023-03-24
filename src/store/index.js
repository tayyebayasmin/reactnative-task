import {configureStore} from '@reduxjs/toolkit';
import { movieSliceReducer } from './slices/movies';

export const store = configureStore({
  reducer: {
    movie: movieSliceReducer,
  },
});


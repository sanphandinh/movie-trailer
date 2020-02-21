import { createSlice } from '@reduxjs/toolkit';

const genresSlice = createSlice({
  name: 'genres',
  initialState: [],
  reducers: {
    addGenres(_, action) {
      const { genres } = action.payload;
      return genres;
    }
  }
});

export const { addGenres } = genresSlice.actions;

export default genresSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const configurationSlice = createSlice({
  name: 'configuration',
  initialState: {},
  reducers: {
    addConfiguration(_, action) {
      return action.payload;
    }
  }
});

export const { addConfiguration } = configurationSlice.actions;

export default configurationSlice.reducer;

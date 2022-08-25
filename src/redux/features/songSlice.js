import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "reduxSong",
  initialState: { songs: [] },
  reducers: {
    addAnotherSong: (state, action) => {
      state.songs = [...state.songs, action.payload];
    },
  },
});

export default songSlice.reducer;
export const { addAnotherSong } = songSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "reduxSong",
  initialState: { songs: [] },
  reducers: {
    addAnotherSong: (state, action) => {
      state.songs = [...state.songs, action.payload];
    },

    resetAll: (state) => {
      state.songs = [];
    },

    orderBySongAZ: (state) => {
      const sortedSongsAZ = state.songs.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      state.songs = sortedSongsAZ;
    },

    orderBySongZA: (state) => {
      const sortedSongsZA = state.songs.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return 1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return -1;
        }
        return 0;
      });
      state.songs = sortedSongsZA;
    },
  },
});

export default songSlice.reducer;
export const { addAnotherSong, resetAll, orderBySongAZ, orderBySongZA } =
  songSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlaying: true,
  isMuted: true,
  cinemaMode: false,
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    toggleMute: (state) => {
      state.isMuted = !state.isMuted;
    },
    setCinemaMode: (state, action) => {
      state.cinemaMode = action.payload;
    },
  },
});

export const { togglePlay, toggleMute, setCinemaMode } = videoSlice.actions;

export default videoSlice.reducer;

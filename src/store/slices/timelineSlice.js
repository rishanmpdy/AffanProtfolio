// src/store/slices/timelineSlice.js
import { createSlice } from '@reduxjs/toolkit'
 
const timelineSlice = createSlice({
  name: 'timeline',
  initialState: {
    activeId: 'oicc-2024', // default expanded item
  },
  reducers: {
    setActiveId: (state, action) => {
      // If same item clicked again, collapse it
      state.activeId = state.activeId === action.payload ? null : action.payload
    },
    clearActive: (state) => {
      state.activeId = null
    },
  },
})
 
export const { setActiveId, clearActive } = timelineSlice.actions
export const selectActiveId = (state) => state.timeline.activeId
export default timelineSlice.reducer

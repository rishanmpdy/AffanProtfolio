// src/store/index.js
import { configureStore } from '@reduxjs/toolkit'
import timelineReducer from './slices/timelineSlice'
import navReducer from './slices/navSlice'
import videoReducer from './videoSlice'
 
const store = configureStore({
  reducer: {
    timeline: timelineReducer,
    nav: navReducer,
    video: videoReducer,
  },
})
 
export default store

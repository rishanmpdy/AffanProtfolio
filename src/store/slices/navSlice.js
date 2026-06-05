// src/store/slices/navSlice.js
import { createSlice } from '@reduxjs/toolkit'
 
const navSlice = createSlice({
  name: 'nav',
  initialState: {
    isMenuOpen: false,
    activeSection: 'hero',
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    closeMenu: (state) => {
      state.isMenuOpen = false
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload
    },
  },
})
 
export const { toggleMenu, closeMenu, setActiveSection } = navSlice.actions
export const selectMenuOpen = (state) => state.nav.isMenuOpen
export const selectActiveSection = (state) => state.nav.activeSection
export default navSlice.reducer

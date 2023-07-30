import { configureStore } from '@reduxjs/toolkit'
import { NavbarState, navbarReducer } from './navbarSlice'

export interface Rootstate {
  navbar: NavbarState,
}

export default configureStore({
  reducer: {
    navbar: navbarReducer,
  }
})
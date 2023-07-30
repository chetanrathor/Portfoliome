import { configureStore } from '@reduxjs/toolkit'
import { NavbarState, navbarReducer } from './navbarSlice'
import { scrollYReducer, scrollYstate } from './scrollSlice'

export interface Rootstate {
  navbar: NavbarState,
  scrollYState: scrollYstate
}

export default configureStore({
  reducer: {
    navbar: navbarReducer,
    scrollYState: scrollYReducer
  }
})
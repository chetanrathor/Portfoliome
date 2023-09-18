import { configureStore } from '@reduxjs/toolkit'
import { NavbarState, navbarReducer } from './navbarSlice'
import { ThemeMode, themeReducer } from './themeSlice'

export interface Rootstate {
  navbar: NavbarState,
  themeType: { mode: ThemeMode }
}

export default configureStore({
  reducer: {
    navbar: navbarReducer,
    themeType: themeReducer
  }
})
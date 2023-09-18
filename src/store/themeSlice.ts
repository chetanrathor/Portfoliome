import { createSlice } from "@reduxjs/toolkit";

export enum ThemeMode {
    DARK = 'DARK',
    LIGHT = 'LIGHT'
}

export const themeSlice = createSlice({
    initialState: { mode: ThemeMode.DARK },
    name: 'theme slice',
    reducers: {
        setDark: (state) => {
            return { ...state, mode: ThemeMode.DARK }
        },
        setLight: (state) => {
            return { ...state, mode: ThemeMode.LIGHT }
        }

    }
})

export const themeReducer = themeSlice.reducer
export const { setDark, setLight } = themeSlice.actions
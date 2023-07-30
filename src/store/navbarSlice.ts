import { createSlice } from "@reduxjs/toolkit";

export interface NavbarState {
    isVisible:boolean
}

export const navbarSlice = createSlice({
    initialState: { isVisible: false },
    name: 'navbar slice',
    reducers: {
        toggleVisiblity: (state, action) => {
            return { ...state, isVisible: action.payload.isVisible }
        }
    }
})

export const {toggleVisiblity} = navbarSlice.actions
export const navbarReducer = navbarSlice.reducer
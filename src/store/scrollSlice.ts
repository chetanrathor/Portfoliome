import { createSlice } from "@reduxjs/toolkit";

export interface scrollYstate {
    at100: boolean,
    at300: boolean,
    at500: boolean,
    at700: boolean,
    at900: boolean,
    at1000: boolean,
    at1500: boolean,
    at2500:boolean
}

const scrollYSlice = createSlice({
    name: 'scrollYSlice',
    initialState: {
        at100: false,
        at300: false,
        at500: false,
        at700: false,
        at900: false,
        at1000: false,
        at1500: false,
        at2500: false,
    },
    reducers: {
        toggleAt100: (state, action) => {
            return { ...state, at100: action.payload }
        },
        toggleAt300: (state, action) => {
            return { ...state, at300: action.payload }
        },
        toggleAt500: (state, action) => {
            return { ...state, at500: action.payload }
        },
        toggleAt700: (state, action) => {
            return { ...state, at700: action.payload }
        },
        toggleAt900: (state, action) => {
            return { ...state, at900: action.payload }
        },
        toggleAt1000: (state, action) => {
            return { ...state, at1000: action.payload }
        },
        toggleAt1500: (state, action) => {
            console.log('payload :>> ', action);
            return { ...state, at1500: action.payload }
        },
        toggleAt2500: (state, action) => {
            console.log('payload :>> ', action);
            return { ...state, at2500: action.payload }
        },
        reset: (state) => {
            return { ...state }
        }
    }

})

export const { toggleAt100, toggleAt1000, toggleAt2500, toggleAt1500, toggleAt300, toggleAt500, toggleAt700, toggleAt900, reset } = scrollYSlice.actions
export const scrollYReducer = scrollYSlice.reducer
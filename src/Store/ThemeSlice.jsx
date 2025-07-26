import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    RoyalTheme : false
} 


const ThemeSlice = createSlice({

    name : 'theme',
    initialState,
    reducers :
    {
        Toggle : (state,action)=>
        {
            state.RoyalTheme = !state.RoyalTheme
        }
    }
})

export const {Toggle} = ThemeSlice.actions

export default ThemeSlice.reducer;

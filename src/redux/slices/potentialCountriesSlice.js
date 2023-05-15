import { createSlice } from "@reduxjs/toolkit";

export const potentialContriesSlice = createSlice({
    name: "potentialContries",
    initialState: {
        value: [
            {
                name:{
                    common: "America",
                },
            },
        ],
    },
    reducers: {
        setPotentailContries: (state, action) => {
            state.value = action.payload
        },
        deletePotentailContries: (state) => {
            state.value = null
        },
    },
})

export const { setPotentailContries, deletePotentailContries } = 
    potentialContriesSlice.actions;

export const selectPotentials = (state) => state.potentialContries.value;

export default potentialContriesSlice.reducer
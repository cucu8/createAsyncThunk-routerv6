import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "./services";

export const charactersSlice = createSlice({
    name: "charactersSlice",
    initialState: {
        charactersList: [],
        isLoading: true,
        isError: "",
        characterNumber: 12,
        characterOffset: 0,
    },
    reducers: {
        getMoreCharacters: (state) => {
            state.characterNumber += 12;
        },
        getBackCharacters: (state) => {
            state.characterNumber -= 12;
        }
    },
    extraReducers: {
        [fetchCharacters.fulfilled]: (state, action) => {
            state.charactersList = action.payload;
            state.isLoading = false;
        },
        [fetchCharacters.pending]: (state) => {
            state.isLoading = true;    
        },
        [fetchCharacters.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.error.message;
        }
    }
})

export const characterListState = state => state.charactersSlice.charactersList;
export const isLoadingState = state => state.charactersSlice.isLoading;
export const isErrorState = state => state.charactersSlice.isError;
export const characterNumberState = state => state.charactersSlice.characterNumber;
export const characterOffsetState = state => state.charactersSlice.characterOffset;

export const {
    getMoreCharacters,
    getBackCharacters
} = charactersSlice.actions;

export default charactersSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {
        searchCache : {}
    },
    reducers : {
        addToCache : (state, action) => {
            Object.assign(state.searchCache, action.payload);
        }
    }
});

export const {addToCache} = searchSlice.actions;
export default searchSlice.reducer;
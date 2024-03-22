import { createSlice } from "@reduxjs/toolkit";
import { filterInitialState } from "./initialState";

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        changeFilter: {
            reducer(state, action) {
                return action.payload;
            },
        }
    }
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
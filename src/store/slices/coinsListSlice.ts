import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCoinsList } from "../../axios/axios"

const initialState={
    isLoading: true,
    coins: []
}

export const getCoinsListThunk = createAsyncThunk("get/coins", async () => getCoinsList())

export const coinsListSlice = createSlice({
    name: 'coinsList',
    initialState,
    reducers: {       

    },
    extraReducers: (builder) => {
        builder.addCase(getCoinsListThunk.fulfilled, (state, action) => {
            state.coins = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getCoinsListThunk.pending, (state) => {

            state.isLoading = true;
        });
        
    }
})

export default coinsListSlice.reducer
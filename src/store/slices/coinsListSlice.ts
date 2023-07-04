import { CaseReducer, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCoinsList, getCoinsMarkets } from "../../axios/axios"
import { CoinsMarkets } from "../../axios/types"

type StateType ={
    isLoading: boolean,
    coins: [],
    coinsMarkets: CoinsMarkets[],
}


const initialState: StateType = {
    isLoading: true,
    coins: [],
    coinsMarkets: [],
}

export const getCoinsListThunk = createAsyncThunk("get/coins", async () => getCoinsList())
export const getCoinsMarketsThunk = createAsyncThunk("get/coins/markets", async (page: number) => getCoinsMarkets(page))


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
        builder.addCase(getCoinsMarketsThunk.fulfilled, (state, action) => {
            state.coinsMarkets = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getCoinsMarketsThunk.pending, (state) => {

            state.isLoading = true;
        });

    }
})

export default coinsListSlice.reducer
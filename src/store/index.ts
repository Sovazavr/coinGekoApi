import coinsReducer from "./slices/coinsListSlice"
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    coins: coinsReducer,
})



const createStore = () => {
    return configureStore({
        reducer: rootReducer,
        
    })
}
const store = createStore()


export default store
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

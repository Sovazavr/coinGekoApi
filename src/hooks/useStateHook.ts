import { Dispatch, SetStateAction } from "react"
import { useAppSelector } from "./reduxHooks"


export function useCoins(){
    const coins = useAppSelector(state=>state.coins.coins)
    return coins
}

export function useIsLoading(){
    const isLoading = useAppSelector(state=>state.coins.isLoading)
    return isLoading
}

export function useLoadCoins(){
    const isLoading = useAppSelector(state=>state.coins.isLoading)
    const coins = useAppSelector(state=>state.coins.coinsMarkets)
    if(!isLoading && coins){
        return {coins, isLoading}
    }
    
}
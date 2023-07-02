import { useAppSelector } from "./reduxHooks"


export function useCoins(){
    const coins = useAppSelector(state=>state.coins.coins)
    return coins
}

export function useIsLoading(){
    const isLoading = useAppSelector(state=>state.coins.isLoading)
    return isLoading
}
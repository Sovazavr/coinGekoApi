import React, { useLayoutEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch } from './hooks/reduxHooks';
import { getCoinsListThunk, getCoinsMarketsThunk } from './store/slices/coinsListSlice';
import { useCoins, useIsLoading, useLoadCoins } from './hooks/useStateHook';
import { CoinsMarkets } from './axios/types';

function App() {

  const dispatch = useAppDispatch()


  let firstRender = useRef(true)
  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      dispatch(getCoinsMarketsThunk())
    } else {




    }
  }, [])

  const coins = useLoadCoins()
  console.log(coins);


  return (
    <div>

      {coins?.map((e: CoinsMarkets)=>{
        return(
          <div>{e.name}</div>
        )
      })}

    </div>
  );
}

export default App;

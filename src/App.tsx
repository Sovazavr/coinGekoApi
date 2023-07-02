import React, { useLayoutEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch } from './hooks/reduxHooks';
import { getCoinsListThunk } from './store/slices/coinsListSlice';
import { useCoins, useIsLoading } from './hooks/useStateHook';

function App() {

  const dispatch = useAppDispatch()


  let firstRender = useRef(true)
  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      dispatch(getCoinsListThunk())
    } else {
      
      
      

    }
  }, [])

  const coins = useCoins()
  console.log(coins);
  const isLoading = useIsLoading()

  return (
    <div>
      {isLoading ? coins.map((e) => {
        return (
          <div>
            {e}
          </div>
        )
      })
        : <></>}
    </div>
  );
}

export default App;

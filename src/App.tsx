import React, { useLayoutEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch } from './hooks/reduxHooks';
import { getCoinsListThunk, getCoinsMarketsThunk } from './store/slices/coinsListSlice';
import { useCoins, useIsLoading, useLoadCoins } from './hooks/useStateHook';
import { CoinsMarkets } from './axios/types';
import Content from './layout/Content/Content';
import CoinList from './components/CoinList/CoinList';
import Header from './layout/Header/Header';

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
    <>
      <Header>{ }</Header>
      <Content>
        {coins && <CoinList coins={coins} />}
      </Content>
    </>
  );
}

export default App;

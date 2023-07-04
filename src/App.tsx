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

  


 

  


  return (
    <>
      <Header>{ }</Header>
      <Content>
        <CoinList/>
      </Content>
    </>
  );
}

export default App;

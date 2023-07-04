import React, { useLayoutEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Content from './layout/Content/Content';
import CoinList from './components/CoinList/CoinList';
import Header from './layout/Header/Header';
import { getCoinsMarketsThunk } from './store/slices/coinsListSlice';
import { useAppDispatch } from './hooks/reduxHooks';
import { useLoadCoins } from './hooks/useStateHook';

function App() {
  


 

  


  return (
    <>
      <Header>{ }</Header>
      <Content>
       <CoinList />
      </Content>
    </>
  );
}

export default App;

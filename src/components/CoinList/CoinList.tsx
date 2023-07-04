import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { CoinsMarkets } from '../../axios/types'
import s from "./CoinsList.module.scss"
import { getCoinsMarketsThunk } from '../../store/slices/coinsListSlice'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { useLoadCoins } from '../../hooks/useStateHook'
import Pagination from '../Paginator/Pagination'
import CoinsElement from './CoinsElement'

type Props = {
  coins: CoinsMarkets[],
}

const CoinList = () => {
  const [page, setPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  let firstRender = useRef(true)
  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      dispatch(getCoinsMarketsThunk(page))
    } else {
      dispatch(getCoinsMarketsThunk(page))
    }
  }, [page])


  const coinsData = useLoadCoins()
  console.log(coinsData);


  const handleNextPageClick = useCallback(() => {
    const current = page;
    const next = current + 1;
    const total = 99;

    setPage(next <= total ? next : current);
  }, [page, coinsData?.coins]);
  const handlePrevPageClick = useCallback(() => {
    const current = page;
    const prev = current - 1;

    setPage(prev > 0 ? prev : current);
  }, [page]);
  const Paginator = <Pagination
    onNextPageClick={handleNextPageClick}
    onPrevPageClick={handlePrevPageClick}
    disable={{
      left: page === 1,
      right: page === 99,
    }}
    nav={{ current: page, total: 99 }}
  />

  return (
    <>
      {Paginator}
      <table className={s.table__block}>
        <tr className={s.table__name}>
          <th>#</th>
          <th>Монета</th>
          <th>Цена</th>

          <th>24ч</th>

        </tr>
        {!!coinsData?.coins ? coinsData?.coins?.map((e: CoinsMarkets, index: number) => {
          return (
            <CoinsElement element={e} index={index} />
          )
        })
          :
          <div>LOAD</div>
        }
      </table>
      {Paginator}
    </>
  )
}

export default React.memo(CoinList)
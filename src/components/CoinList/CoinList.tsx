import React, { useLayoutEffect, useRef } from 'react'
import { CoinsMarkets } from '../../axios/types'
import s from "./CoinsList.module.scss"
import { getCoinsMarketsThunk } from '../../store/slices/coinsListSlice'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { useLoadCoins } from '../../hooks/useStateHook'

type Props = {

}

const CoinList = () => {
  const dispatch = useAppDispatch()
  let firstRender = useRef(true)
  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      dispatch(getCoinsMarketsThunk(2))
    } else {




    }
  }, [])


  const coins = useLoadCoins()
  console.log(coins);

  return (
    <table className={s.table__block}>
      <tr className={s.table__name}>
        <th>#</th>
        <th>Монета</th>
        <th>Цена</th>

        <th>24ч</th>

      </tr>
      {!!coins ? coins?.map((e: CoinsMarkets, index: number) => {
        return (
          <tr className={s.table__line}>
            <td>
              {index}
            </td>
            <td className={s.coins__name__block}>
              <img src={e.image} />
              <p className={s.coins__text}>
                <p className={s.coins__name}>{e.name}</p>
                <p className={s.coins__symbol}>{e.symbol.toUpperCase()}</p>
              </p>
            </td>
            <td className={s.coins__price}>
              {e.current_price}
            </td>
            <td className={e.price_change_percentage_24h > 0 ? s.change__good : s.change__bad}>
              {e.price_change_percentage_24h ? e.price_change_percentage_24h.toFixed(2) : "-"}
            </td>
          </tr>
        )
      })
        :
        <div>LOAD</div>
      }
    </table>
  )
}

export default CoinList
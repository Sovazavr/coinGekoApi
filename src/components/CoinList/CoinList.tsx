import React from 'react'
import { CoinsMarkets } from '../../axios/types'
import s from "./CoinsList.module.scss"

type Props = {
  coins: CoinsMarkets[],
}

const CoinList = ({ coins }: Props) => {
  return (
    <table>
      <tr className={s.table__name}>
        <th>#</th>
        <th>Монета</th>
        <th>Цена</th>

        <th>24ч</th>

      </tr>
      {coins?.map((e: CoinsMarkets, index: number) => {
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
            <td className={e.price_change_24h > 0 ? s.change__good : s.change__bad}>
              {e.price_change_percentage_24h.toFixed(2)}
            </td>
          </tr>
        )
      })}
    </table>
  )
}

export default CoinList
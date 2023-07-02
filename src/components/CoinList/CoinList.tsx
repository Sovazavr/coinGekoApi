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
          <tr>
            <td>
              {index}
            </td>
            <td>
              {e.name}
            </td>
            <td>
              {e.current_price}
            </td>
            <td>
              {e.price_change_percentage_24h}
            </td>
          </tr>
        )
      })}
    </table>
  )
}

export default CoinList
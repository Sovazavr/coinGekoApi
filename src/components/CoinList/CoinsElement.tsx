import React from 'react'
import s from "./CoinsList.module.scss"
import { CoinsMarkets } from '../../axios/types'

type Props = {
    element: CoinsMarkets,
    index: number,
}

const CoinsElement = ({ element, index }: Props) => {
    return (
        <tr className={s.table__line}>
            <td>
                {index}
            </td>
            <td className={s.coins__name__block}>
                <img src={element.image} />
                <p className={s.coins__text}>
                    <p className={s.coins__name}>{element.name}</p>
                    <p className={s.coins__symbol}>{element.symbol.toUpperCase()}</p>
                </p>
            </td>
            <td className={s.coins__price}>
                {element.current_price}
            </td>
            <td className={element.price_change_percentage_24h > 0 ? s.change__good : s.change__bad}>
                {element.price_change_percentage_24h ? element.price_change_percentage_24h.toFixed(2) : "-"}
            </td>
        </tr>
    )
}

export default CoinsElement
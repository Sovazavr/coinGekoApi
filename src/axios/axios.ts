import axios from "axios";
import { apiLink } from "./const/constAxiosLink";
import { CoinsMarkets } from "./types";

export async function getCoinsList() {
    const resultGetCoinsList = await axios.get(apiLink + "/coins/list").then(
        (response) => {
            const coins = response.data
            return coins
        }
    ).catch(() => {
        console.log("faile");
    })
    return resultGetCoinsList
}

export async function getCoinsMarkets() {
    const resultGetCoinsList = await axios.get(apiLink + "/coins/markets", {
        params: {
            vs_currency: "usd",
        }
    }).then(
        (response) => {
            const coins = response.data
            return coins
        }
    ).catch(() => {
        console.log("faile");
    })
    return resultGetCoinsList
}
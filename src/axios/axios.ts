import axios from "axios";
import { apiLink } from "./const/constAxiosLink";

export async function getCoinsList() {
    const resultGetCoinsList = await axios.get(apiLink+"/coins/list").then(
        (response) => {
            const coins = response.data
            return coins
        }
    ).catch(() => {
        console.log("faile");
    })
    return resultGetCoinsList
}
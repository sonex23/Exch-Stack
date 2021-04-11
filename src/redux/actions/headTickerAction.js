import { GET_HEAD_TICKERS } from "../actionTypes";
import Axios from "../../APIs/stock";
import { apiKey } from "../../APIs/credentials";

const get5HeadTicker = () => async (dispatch) => {
  try {
    const res = await Axios({
        method: "GET",
        url: `eod/latest?access_key=${apiKey}&symbols=AAPL,MSTF,GOOGL,AMZN,FB,INTC`,
    })

    dispatch({
      type: GET_HEAD_TICKERS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const headTickerAction = {
  get5HeadTicker,
};

export default headTickerAction;
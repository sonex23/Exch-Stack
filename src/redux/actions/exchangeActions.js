import { GET_EXCHANGES } from "../actionTypes";
import Axios from "../../APIs/stock";
import { apiKey } from "../../APIs/credentials";

const getExchanges = () => async (dispatch) => {
  try {
    const res = await Axios({
      method: "GET",
      url: `exchanges?access_key=${apiKey}`,
    });

    dispatch({
      type: GET_EXCHANGES,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const setExchanges = () => async (dispatch) => {
  try {
    const res = await Axios({
      method: "GET",
      url: `exchanges?access_key=${apiKey}`,
    });

    dispatch({
      type: "SET_EXCHANGES",
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const searchExchanges = (mic) => async (dispatch) => {
  try {
    const res = await Axios({
      method: "GET",
      url: `exchanges?access_key=${apiKey}&search=${mic}`,
    });

    dispatch({
      type: "SEARCH_EXCHANGE",
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const exchangeActions = {
  getExchanges,
  searchExchanges,
  setExchanges
};

export default exchangeActions;

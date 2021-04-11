import { GET_HEAD_EXCHANGES } from "../actionTypes";
import Axios from "../../APIs/stock";
import { apiKey } from "../../APIs/credentials";

const get5HeadExchanges = () => async (dispatch) => {
  try {
    const res = await Axios({
      method: "GET",
      url: `exchanges?access_key=${apiKey}&limit=4`,
    });

    dispatch({
      type: GET_HEAD_EXCHANGES,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const headExchangeActions = {
  get5HeadExchanges,
};

export default headExchangeActions;
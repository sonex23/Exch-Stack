import { GET_COUNTRY_EXCHANGE } from "../actionTypes";
import Axios from "../../APIs/stock";
import { apiKey } from "../../APIs/credentials";

const getCountryExchange = () => async (dispatch) => {
  try {
    const res = await Axios({
      url: `exchanges?access_key=${apiKey}`,
    });

    console.log(res.data.data);
    dispatch({
      type: GET_COUNTRY_EXCHANGE,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const exchangeCountryAction = { getCountryExchange };

export default exchangeCountryAction;

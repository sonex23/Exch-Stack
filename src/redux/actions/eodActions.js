import {GET_EOD} from '../actionTypes';
import Axios from '../../APIs/stock';
import {apiKey} from '../../APIs/credentials';

const getEodByEmitenSymbolsAndExchange = (emiten,exchange) => async (dispatch) =>{
    try {
        const res = await Axios({
            method: 'GET',
            url: `eod?access_key=${apiKey}&symbols=${emiten}&exchange=${exchange}`,
        });

        dispatch({
            type: GET_EOD,
            payload: res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

const getEodByEmitenSymbols = (emiten) => async (dispatch) =>{
    try {
        const res = await Axios({
            method: 'GET',
            url: `eod?access_key=${apiKey}&symbols=${emiten}`,
        });

        dispatch({
            type: GET_EOD,
            payload: res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

const eodActions = {
    getEodByEmitenSymbolsAndExchange,
    getEodByEmitenSymbols
}

export default eodActions;
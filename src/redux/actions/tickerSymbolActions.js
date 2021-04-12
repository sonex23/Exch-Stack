import {GET_TICKER_SYMBOL} from '../actionTypes';

const storeSymbol = (symbol)=> async dispatch =>{
    dispatch({
        type: GET_TICKER_SYMBOL,
        payload: symbol,
    })
}

const tickerSymbolActions = {
    storeSymbol
}

export default tickerSymbolActions;
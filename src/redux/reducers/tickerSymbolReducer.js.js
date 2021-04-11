import {GET_TICKER_SYMBOL} from '../actionTypes';

const InitiateState = {
    tickerSymbol: '',
}

const tickerSymbol = (state = InitiateState, action) =>{
    switch (action.type) {
        case GET_TICKER_SYMBOL:
            return {
                tickerSymbol: action.payload,
            }
        default:
            return state                                                                                                                                                                                                                                                                                                                                                                                                            
    }
}

export default tickerSymbol;
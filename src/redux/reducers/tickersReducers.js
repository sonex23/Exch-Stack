import {GET_TICKERS, GET_ALL_TICKERS} from '../actionTypes';

const InitiateState = {
    tickersList: [],
    loading: true
}

const tickersReducer = (state = InitiateState, action) =>{
    switch (action.type) {
        case GET_TICKERS:
            return {
                tickersList: action.payload,
                loading:false,
            }
        case GET_ALL_TICKERS:
            return {
                tickersList: action.payload,
                loading:false,
            }
        default:
            return state
    }
}

export default tickersReducer;
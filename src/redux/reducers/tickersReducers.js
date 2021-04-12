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
        case "SEARCH_TICKERS":
            return {
                tickersList: action.payload,
            }
        default:
            return state
    }
}

export default tickersReducer;
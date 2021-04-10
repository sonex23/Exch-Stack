import {GET_TICKERS} from '../actionTypes';

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
        default:
            return state
    }
}

export default tickersReducer;
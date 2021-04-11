import {GET_HEAD_TICKERS} from '../actionTypes';

const InitiateState = {
    headTickerList: [],
    loading: true
}

const headTickerReducer = (state = InitiateState, action) =>{
    switch (action.type) {
        case GET_HEAD_TICKERS:
            return {
                headTickerList: action.payload,
                loading:false,
            }
        default:
            return state
    }
}

export default headTickerReducer;
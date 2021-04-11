import {GET_INTRADAY} from '../actionTypes';

const InitiateState = {
    intradayList: [],
    loading: true
}

const intradayReducer = (state = InitiateState, action) =>{
    switch (action.type) {
        case GET_INTRADAY:
            return {
                intradayList: action.payload,
                loading:false,
            }
        default:
            return state
    }
}

export default intradayReducer;
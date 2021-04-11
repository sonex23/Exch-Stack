import {GET_HEAD_EXCHANGES} from '../actionTypes';

const InitiateState = {
    headExchangesList: [],
    loading: true
}

const headExchangesReducer = (state = InitiateState, action) =>{
    switch (action.type) {
        case GET_HEAD_EXCHANGES:
            return {
                headExchangesList: action.payload,
                loading:false,
            }
        default:
            return state
    }
}

export default headExchangesReducer;
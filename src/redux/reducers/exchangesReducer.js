import {GET_EXCHANGES} from '../actionTypes';

const InitiateState = {
    exchangesList: [],
    exchangeSearch: [],
    loading: true
}

const exchangesReducer = (state = InitiateState, action) =>{
    switch (action.type) {
        case GET_EXCHANGES:
            return {
                ...state,
                exchangesList: action.payload,
                loading:false,
            }
        case "SEARCH_EXCHANGE":
            return {
                ...state,
                exchangeSearch: action.payload,
                loading:false,
            }
        case "SET_EXCHANGES":
            return {
                ...state,
                exchangeSearch: action.payload,
                loading:false,
            }
        default:
            return state
    }
}

export default exchangesReducer;
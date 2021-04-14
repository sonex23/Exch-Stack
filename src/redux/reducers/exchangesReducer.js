import {GET_EXCHANGES} from '../actionTypes';

const InitiateState = {
    exchangesList: [],
    exchangeSearch: [],
    exchangeFiltered: [],
    tmp: "USA",
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
                exchangeFiltered: action.payload,
                loading:false,
            }
        case "SET_EXCHANGES":
            return {
                ...state,
                exchangeSearch: action.payload,
                loading:false,
            }
        case "GET_TMP":
            return {
                ...state,
                tmp: action.payload,
                loading:false,
            }
        case "FILTER_EXCHANGES":
            return {
                ...state,
                exchangeFiltered: state.exchangeSearch.filter(
                    (data)=>data.country === action.payload.country,
                ),
                loading:false,
            }
        default:
            return state
    }
}

export default exchangesReducer;
import {GET_EXCHANGE_MIC} from '../actionTypes';

const InitiateState = {
    exchangeMic: '',
}

const exchangeMicReducer = (state = InitiateState, action) =>{
    switch (action.type) {
        case GET_EXCHANGE_MIC:
            return {
                exchangeMic: action.payload,
            }
        default:
            return state                                                                                                                                                                                                                                                                                                                                                                                                            
    }
}

export default exchangeMicReducer;
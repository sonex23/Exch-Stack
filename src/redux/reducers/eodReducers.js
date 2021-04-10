import {GET_EOD} from '../actionTypes';

const InitiateState = {
    eodList: [],
    loading: true
}

const eodReducer = (state = InitiateState, action) =>{
    switch (action.type) {
        case GET_EOD:
            return {
                eodList: action.payload,
                loading:false,
            }
        default:
            return state                                                                                                                                                                                                                                                                                                                                                                                                            
    }
}

export default eodReducer;
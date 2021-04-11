import {GET_EXCHANGE_MIC} from '../actionTypes';

const storeMIC = (mic)=> async dispatch =>{
    dispatch({
        type: GET_EXCHANGE_MIC,
        payload: mic,
    })
}

const exchangeMicActions = {
    storeMIC
}

export default exchangeMicActions;

const storedSearchValue = (value)=> async (dispatch)=>{
    dispatch({
        type: "STORE_SEARCH",
        payload: value,
    })
}

const tmpActions = {
    storedSearchValue,
}

export default tmpActions;
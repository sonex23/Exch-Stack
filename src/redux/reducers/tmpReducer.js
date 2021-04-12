
const initiateState = {
    searchInput: '',
}

const tmpReducer = (state = initiateState, action) =>{
    switch (action.type) {
        case "STORE_SEARCH":
            return {
                searchInput: action.payload
            }
        default:
            return state
    }
} 

export default tmpReducer;

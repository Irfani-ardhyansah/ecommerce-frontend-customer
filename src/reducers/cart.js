const cartReducer = (state = 0, action) => {
    switch(action.type){
        case 'SET' :
            state = action.payload
            return state
        case 'INCREMENT' :
            return state + action.payload
        case 'DECREMENT' :
            return state - action.payload
        default:
            return state
    }
}
export default cartReducer
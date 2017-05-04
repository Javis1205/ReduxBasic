const initialState = {
  user:'HELLO',
  so:0
}

export default (state = initialState,action) => {
    switch(action.type){
        case "THAYDOI" :
        return{
            user:action.payload 
        }
        case "CONGTHEM" :
        return{
            ...state,
            so: action.payload
        }
        default:
        return state;
    }
}

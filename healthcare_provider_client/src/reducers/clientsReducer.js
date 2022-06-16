export const clientsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_CLIENTS':
         return action.payload
        case 'ADD_CLIENT':
            return [...state, action.payload]
        case 'FETCH_CLIENT':
             return action.payload
             
        default:
             return state
    }

}
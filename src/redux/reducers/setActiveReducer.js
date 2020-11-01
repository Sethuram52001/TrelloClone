import { CONSTANTS } from "../actions";
import store from "../store";

const initialState = null;

const setActiveReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case CONSTANTS.ACTIVE_BOARD: {
            console.log("active board id: " + action.payload);
            state = action.payload;
            console.log(state)
            return state;
        }
            
        default:
            return state;
    }
}

export default setActiveReducer;
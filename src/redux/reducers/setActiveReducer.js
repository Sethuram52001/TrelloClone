import { CONSTANTS } from "../actions";

const initialState = null;

const setActiveReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case CONSTANTS.ACTIVE_BOARD: {
            return action.payload;
        }
            
        default:
            return state;
    }
}

export default setActiveReducer;
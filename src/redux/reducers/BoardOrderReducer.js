import { CONSTANTS } from "../actions";
import { v4 as uuidv4 } from "uuid";
import { act } from "react-dom/test-utils";

const initialState = ["board-0"];

const boardOrderReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case CONSTANTS.ADD_BOARD: {
            return [...state, `board-${action.payload.id}`];
        }
            
        default:
            return state;
    }
}

export default boardOrderReducer;
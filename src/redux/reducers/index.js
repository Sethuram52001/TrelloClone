import { combineReducers } from "redux";
import ListReducer from "./ListReducer";
import CardReducer from "./CardReducer";
import BoardReducer from "./BoardReducer";

export default combineReducers({
    lists: ListReducer,
    cards: CardReducer,
    boards: BoardReducer,
})
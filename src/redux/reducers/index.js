import { combineReducers } from "redux";
import ListReducer from "./ListReducer";
import CardReducer from "./CardReducer";
import BoardReducer from "./BoardReducer";
import SetActiveReducer from "./setActiveReducer";
import boardOrderReducer from "./BoardOrderReducer";

export default combineReducers({
    lists: ListReducer,
    cards: CardReducer,
    boards: BoardReducer,
    active: SetActiveReducer,
    boardOrder: boardOrderReducer
})
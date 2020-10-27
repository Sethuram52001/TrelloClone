import { CONSTANTS } from "../actions";

const initialState = {
    "board-0": {
        id: "board-0",
        lists: ["list-0","list-1"],
        title: "myboard"
    }
}

const boardReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_LIST: {
            const { boardID, id } = action.payload;
            const board = state[boardID];
            const newListID = `list-${id}`;
            const newLists = [...board.lists, newListID];
            board.lists = newLists;
            return { ...state, [boardID]: board };
        }

        case CONSTANTS.DRAG_HAPPENED: {
            const boardID = "board-0";
            const board = state[boardID];
            const lists = board.lists;
            const { droppableIndexEnd, droppableIndexStart, type } = action.payload;
            
            // dragging lists
            if (type === "list") {
                const pulledOutList = lists.splice(droppableIndexStart, 1);
                lists.splice(droppableIndexEnd, 0, ...pulledOutList);
                board.lists = lists;
                return { ...state, [boardID]: board };
            }
            return state;
        }
            
        default:
            return state;
    }
}

export default boardReducer;
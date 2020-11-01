import { CONSTANTS } from "./index";
import { v4 as uuidv4 } from "uuid";

export const addList = (title, boardID) => {
    const id = uuidv4();
    return {
        type: CONSTANTS.ADD_LIST,
        payload: {title, boardID, id},
    }
}

export const sort = (droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId, type, boardID) => {
    return {
        type: CONSTANTS.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type,
            boardID
        }
    }
}

export const editList = (listID, newTitle) => {
    return {
        type: CONSTANTS.EDIT_LIST,
        payload: {listID, newTitle}
    }
}

export const removeList = (listID, boardID) => {
    //const boardID = "board-0";
    return {
        type: CONSTANTS.REMOVE_LIST,
        payload: {listID, boardID}
    }
}
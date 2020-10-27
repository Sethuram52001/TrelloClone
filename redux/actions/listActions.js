import { CONSTANTS } from "./index";
import { v4 as uuidv4 } from "uuid";

export const addList = (title) => {
    const boardID = "board-0";
    const id = uuidv4();
    return {
        type: CONSTANTS.ADD_LIST,
        payload: {title,boardID,id},
    }
}

export const sort = (droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId, type) => {
    return {
        type: CONSTANTS.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type
        }
    }
}
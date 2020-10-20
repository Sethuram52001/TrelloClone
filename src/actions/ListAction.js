import { Draggable, Droppable } from 'react-beautiful-dnd';
import { CONSTANTS } from '../actions';

export const addList = (title) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title
    }
}

export const sort = (droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId, type) => {
    return {
        type: CONSTANTS.DRAG_HAPPENDED,
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
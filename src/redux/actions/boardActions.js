import { CONSTANTS } from "../actions";
import {v4 as uuidv4} from "uuid";

export const activeBoard = (id) => {
    return {
        type: CONSTANTS.ACTIVE_BOARD,
        payload: id
    }
}

export const addBoard = (title) => {
    const id = uuidv4();
    return {
        type: CONSTANTS.ADD_BOARD,
        payload: {title,id}
    }
}
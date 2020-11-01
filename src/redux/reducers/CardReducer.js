import { CONSTANTS } from "../actions";

const initialState = {
    "card-0": {
        text: `This episode`,
        id: `card-0`,
        list: "list-0"
    }
}

/* 
    "card-1": {
        text: `Next episode`,
        id: `card-1`,
        list: "list-0"
    }
*/

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_CARD: {
            console.log("add card");
            const { text, listID, id } = action.payload;
            const newCard = {
                text,
                id: `card-${id}`,
                list: listID
            };
            //console.log("new card: " + newCard);
            const newState = { ...state, [`card-${id}`]: newCard};
            //console.log("updated state : " + newState);
            return { ...state, [`card-${id}`]: newCard };
        }
            
        case CONSTANTS.REMOVE_CARD: {
            const { id } = action.payload;
            //const newState = state.filter(value => value !== state[id]);
            const newState = state;
            delete newState[id];
            return newState;
        }
            
        case CONSTANTS.EDIT_CARD: {
            const { id, newText } = action.payload;
            const card = state[id];
            card.text = newText;
            return { ...state, [`card-${id}`]: card };
        }

        default:
            return state;
    }
}

export default cardsReducer;
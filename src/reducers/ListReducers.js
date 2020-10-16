import { CONSTANTS } from '../actions/index';

let ListID = 2;
let cardID = 2;

const initialState = [
    {
        title: "1st card",
        id: Math.floor(Math.random() * 100000),
        cards: [
            {
                id: Math.floor(Math.random() * 100000),
                text: "text 1"
            },
            {
                id: Math.floor(Math.random() * 100000),
                text: "text 2"
            }
        ]
    },
    {
        title: "2nd card",
        id: 1,
        cards: [
            {
                id: 0,
                text: "text 1"
            },
            {
                id: 1,
                text: "text 2"
            }
        ]
    }
];

const ListReducer = (state = initialState, action) => {
    switch(action.type) {

        case CONSTANTS.ADD_LIST: {
            const title = action.payload;
            const newList = {
                title: title,
                id: ListID,
                cards: []
            }
            ListID+=1
            return [ ...state, newList ]
        }

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID
            }
            cardID+=1;
            const newState = state.map(list => {
                if(list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                }
                else {
                    return list
                }
            });

            return newState;

        default:
            return state;
    }
}

export default ListReducer;
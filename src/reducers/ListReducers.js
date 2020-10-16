import { CONSTANTS } from '../actions/index';

let ListID = Math.floor(Math.random()*100000);
let cardID = Math.floor(Math.random()*100000);

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
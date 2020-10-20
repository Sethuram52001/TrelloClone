import { Droppable } from 'react-beautiful-dnd';
import { CONSTANTS } from '../actions/index';

let ListID = 3;
let cardID = 5;

const initialState = [
    {
        title: "1st card",
        id: `list-id-1`,
        cards: [
            {
                id: `card-id-1`,
                text: "text 1"
            },
            {
                id: `card-id-2`,
                text: "text 2"
            }
        ]
    },
    {
        title: "2nd card",
        id: `list-id-2`,
        cards: [
            {
                id: `card-id-3`,
                text: "text 1"
            },
            {
                id: `card-id-4`,
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
                id: `list-id-${ListID}`,
                cards: []
            }
            ListID+=1
            return [ ...state, newList ]
        }

        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `card-id-${cardID}`
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
        }

       case CONSTANTS.DRAG_HAPPENDED:
           const { droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId, type} = action.payload;
           const newState = [...state];

           //dragging list
           if(type === "list") {
               const list = newState.splice(droppableIndexStart, 1);
               newState.splice(droppableIndexEnd, 0, ...list);
               return newState;
           }

           //same list
           if(droppableIdStart === droppableIdEnd) {
               let list = state.find(list => droppableIdStart === list.id);
               let card = list.cards.splice(droppableIndexStart, 1);
               list.cards.splice(droppableIndexEnd, 0, ...card);
           }

           // other list
           if(droppableIdStart !== droppableIdEnd) {
               // find the list where drag happened
               const listStart = state.find(list => droppableIdStart === list.id);

               //pull out the card from this list
               const card = listStart.cards.splice(droppableIndexStart,1);

               //find the list where drag ended
               const listEnd = state.find(list => droppableIdEnd === list.id);

               // put the card in the new list
               listEnd.cards.splice(droppableIndexEnd, 0, ...card);
           }

           return newState;

        default:
            return state;
    }
}

export default ListReducer;
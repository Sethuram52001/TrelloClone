import { CONSTANTS } from "../actions";

const initialState = {
    "list-0": {
        id: "list-0",
        cards: ["card-0"],
        title: "my-list"
    },
};

/* 
    "list-1": {
        id: "list-1",
        cards: ["card-0","card-1"],
        title: "my-second-list"
    }
*/

const ListReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_CARD: {
            const { listID, id } = action.payload;
            const list = state[listID];
            list.cards.push(`card-${id}`);
            return { ...state, [listID]: list };
        }
            
        case CONSTANTS.REMOVE_CARD: {
        const { listID, id } = action.payload;
        const list = state[listID];
        const newCards = list.cards.filter(cardID => cardID !== id);
        
        return { ...state, [listID]: { ...list, cards: newCards } };
        }
            
        case CONSTANTS.ADD_LIST: {
            const { title, id } = action.payload;
            const newList = {
                title: title,
                id: `list-${id}`,
                cards: []
            };

            const newState = { ...state, [`list-${id}`]: newList };
            return newState;
        }
            
        case CONSTANTS.DRAG_HAPPENED: {
          const { droppableIdStart, droppableIdEnd, droppableIndexEnd, droppableIndexStart, type } = action.payload;

          // draggin lists around - the listOrderReducer should handle this
          if (type === "list") {
            return state;
          }

          // in the same list
          if (droppableIdStart === droppableIdEnd) {
            const list = state[droppableIdStart];
            const card = list.cards.splice(droppableIndexStart, 1);
            list.cards.splice(droppableIndexEnd, 0, ...card);
            return { ...state, [droppableIdStart]: list };
          }

          // other list
          if (droppableIdStart !== droppableIdEnd) {
          // find the list where the drag happened
            const listStart = state[droppableIdStart];
          // pull out the card from this list
            const card = listStart.cards.splice(droppableIndexStart, 1);
          // find the list where the drag ended
            const listEnd = state[droppableIdEnd];
          // put the card in the new list
            listEnd.cards.splice(droppableIndexEnd, 0, ...card);
          return {...state,[droppableIdStart]: listStart,[droppableIdEnd]: listEnd};
          }
          return state;
        }
        
        case CONSTANTS.EDIT_LIST: {
          const { listID, newTitle } = action.payload;
          const list = state[listID];
          list.title = newTitle;
          return { ...state, [listID]: list };
        }
        
        case CONSTANTS.REMOVE_LIST: {
            const { listID } = action.payload;
            console.log("list reducer: " + listID);  
            const newState = state;
            delete newState[listID];
            return newState;
        }

        default:
            return state;
            
    }
}

export default ListReducer;

/*

*/

/*
            const { droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, type } = action.payload;
            const newState = [...state];

            // dragging list
            if (type === "list") {
               // const list = newState.splice(droppableIndexStart, 1);
                //newState.splice(droppableIndexEnd, 0, ...list);
                return newState;
            }

            // same list
            if (droppableIdStart !== droppableIdEnd) {
                const listStart = state.find(list => droppableIdStart === list.id);
                const card = listStart.cards.splice(droppableIndexStart, 1);

            }

            // other list
            if (droppableIdStart !== droppableIdEnd) {
                const listStart = state.find(list => droppableIdStart === list.id);
                const card = listStart.cards.splice(droppableIndexStart, 1);
                const listEnd = state.find(list => droppableIdEnd === list.id);
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }
            return newState;
*/
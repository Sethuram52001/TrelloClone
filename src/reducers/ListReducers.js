const initialState = [
    {
        title: "1st card",
        id: 0,
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
        default:
            return state;
    }
}

export default ListReducer;
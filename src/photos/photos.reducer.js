const initialState = [];

function home(state = initialState, action) {
    switch (action.type) {
        case 'PHOTOS_DATA_SUCCESS': {
            console.log(action.payload);
            return [...action.payload];
        }
        case 'PHOTOS_DATA_ERROR': {
            return [...action.payload];
        }
        default: return state;
    }
}

export default home;
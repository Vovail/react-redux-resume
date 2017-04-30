const initialState = {
    work: [{duties: []}],
    education: {training: [], it: {}, main: {}},
    otherInfo: [{}]
};

function resume(state = initialState, action) {
    switch (action.type) {
        case 'RESUME_DATA_SUCCESS': {
            console.log(action.payload);
            return {...state, ...action.payload};
        }
        case 'RESUME_DATA_ERROR': {
            return {...action.payload};
        }
        default:
            return state;
    }
}

export default resume;
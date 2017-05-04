const RESUME_DATA_SUCCESS = 'RESUME_DATA_SUCCESS';
const RESUME_DATA_ERROR = 'RESUME_DATA_ERROR';
export const RESUME_DATA_REQUEST = 'RESUME_DATA_REQUEST';

export const setResumeDataRequest = () => ({
    type: RESUME_DATA_REQUEST
});

export const setResumeDataSuccess = (payload) => ({
    type: RESUME_DATA_SUCCESS,
    payload
});

export const setResumeDataError = (error) => ({
    type: RESUME_DATA_ERROR,
    error
});

export const resumeDispatch = (dispatch) => ({
    onResumeMount: () => {
        dispatch(setResumeDataRequest())
    }
});

const initialState = {
    work: [{duties: []}],
    education: {training: [], it: {}, main: {}},
    otherInfo: [{}]
};

function resume(state = initialState, action) {
    switch (action.type) {
        case RESUME_DATA_SUCCESS: {
            return {...state, ...action.payload};
        }
        case RESUME_DATA_ERROR: {
            return {...state, ...action.payload};
        }
        default:
            return state;
    }
}

export default resume;
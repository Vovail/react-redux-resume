export const HOME_DATA_REQUEST = 'HOME_DATA_REQUEST';
const SHOW_SKILLS = 'SHOW_SKILLS';
const HOME_DATA_SUCCESS = 'HOME_DATA_SUCCESS';
const HOME_DATA_ERROR = 'HOME_DATA_ERROR';

export const setHomeDataRequest = () => ({
    type: HOME_DATA_REQUEST
});

export const setShowSkills = (payload) => ({
    type: SHOW_SKILLS,
    payload
});

export const setHomeDataSuccess = (payload) => ({
    type: HOME_DATA_SUCCESS,
    payload
});

export const setHomeDataError = (error) => ({
    type: HOME_DATA_ERROR,
    error
});

export const homeDispatch = (dispatch) => ({
    onHomeMount: () => {
        dispatch(setHomeDataRequest())
    },
    onShowSkills: (payload)=>{
        dispatch(setShowSkills(payload))
    }
});

const initialState = {
    firstname: '',
    lastname: '',
    fullname: '',
    generalInfo: [],
    skills: [],
    showSkills: '',
    showSkillsBtnLabel: ''
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case HOME_DATA_SUCCESS: {
            return {...state, ...action.payload};
        }
        case HOME_DATA_ERROR: {
            return {...state, ...action.payload};
        }
        case SHOW_SKILLS: {
            return {
                ...state,
                showSkills: !state.showSkills,
                showSkillsBtnLabel: action.payload
            };
        }
        default:
            return state;
    }
}

export default reducer;
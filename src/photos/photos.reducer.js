export const PHOTOS_DATA_REQUEST = 'PHOTOS_DATA_REQUEST';
const PHOTOS_DATA_SUCCESS = 'PHOTOS_DATA_SUCCESS';
const PHOTOS_DATA_ERROR = 'PHOTOS_DATA_ERROR';

export const setPhotoDataSuccess = (payload) => ({
    type: PHOTOS_DATA_SUCCESS,
    payload
});

export const setPhotoDataError = (error) => ({
    type: PHOTOS_DATA_ERROR,
    error
});

export const setPhotosDataRequest = () => ({
    type: PHOTOS_DATA_REQUEST
});


export const photosDispatch = dispatch => ({
    onPhotosMount: () => {
        dispatch(setPhotosDataRequest())
    }
});

const initialState = [];

function home(state = initialState, action) {
    switch (action.type) {
        case PHOTOS_DATA_SUCCESS: {
            return [...state, ...action.payload];
        }
        case PHOTOS_DATA_ERROR: {
            return [...state, ...action.payload];
        }
        default:
            return state;
    }
}

export default home;
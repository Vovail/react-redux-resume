import {call, put, takeEvery} from 'redux-saga/effects';
import {setPhotoDataError,setPhotoDataSuccess, PHOTOS_DATA_REQUEST} from './photos.reducer';

const homeDataApi = () => {
    return fetch('data-photos.json')
        .then(response => {
            return response.json()})
        .catch(error=>{
            console.log(error);
            throw error;
        });
};

function* getHomeData () {
    try {
        let data = yield call(homeDataApi);
        yield put(setPhotoDataSuccess(data));
    } catch(error) {
        yield put(setPhotoDataError(error));
    }
}

export default function* homeDataWatcher() {
    yield takeEvery(PHOTOS_DATA_REQUEST, getHomeData);
}
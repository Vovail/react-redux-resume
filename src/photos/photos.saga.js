import {call, put, takeEvery} from 'redux-saga/effects';

const homeDataApi = () => {
    return fetch('data-photos.json')
        .then(response => {
            console.log(response.body);
            return response.json()})
        .catch(error=>{
            console.log(error);
            throw error;
        });
};

function* getHomeData () {
    try {
        let data = yield call(homeDataApi);
        yield put({type: 'PHOTOS_DATA_SUCCESS', payload: data});
    } catch(error) {
        yield put({type: 'PHOTOS_DATA_ERROR', payload: error});
    }
}

export default function* homeDataWatcher() {
    yield takeEvery('PHOTOS_DATA_REQUEST', getHomeData);
}
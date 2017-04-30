import {call, put, takeEvery} from 'redux-saga/effects';

export const homeDataApi = () => {
    return fetch('data-home.json')
        .then(response => {
            console.log(response.body);
            return response.json()})
        .then(data=>{
            data.showSkills=false;
            return data;
        })
        .catch(error=>{
            console.log(error);
            throw error;
        });
};

export function* getHomeData () {
    try {
        let data = yield call(homeDataApi);
        yield put({type: 'HOME_DATA_SUCCESS', payload: data});
    } catch(error) {
        yield put({type: 'HOME_DATA_ERROR', payload: error});
    }
}

export default function* photosDataWatcher() {
    yield takeEvery('HOME_DATA_REQUEST', getHomeData);
}
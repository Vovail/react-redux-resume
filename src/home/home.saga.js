import {call, put, takeEvery} from 'redux-saga/effects';
import {setHomeDataError, setHomeDataSuccess, HOME_DATA_REQUEST} from './home.reducer';

export const homeDataApi = () => {
    return fetch('data-home.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            data.showSkills = false;
            return data;
        })
        .catch(error => {
            throw error;
        });
};

export function* getHomeData() {
    try {
        let data = yield call(homeDataApi);
        yield put(setHomeDataSuccess(data));
    } catch (error) {
        yield put(setHomeDataError(error));
    }
}

export default function* homeDataWatcher() {
    yield takeEvery(HOME_DATA_REQUEST, getHomeData);
}
import {call, put, takeEvery, fork} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {getHomeData} from '../home/home.saga';
import {setResumeDataError, setResumeDataSuccess, RESUME_DATA_REQUEST} from './resume.reducer';

const resumeDataApi = () => {
    return fetch('data-resume.json')
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
};

function* getResumeData() {
    try {
        const resume = yield call(resumeDataApi);
        yield put(setResumeDataSuccess(resume));
    } catch (error) {
        yield put(setResumeDataError(error));
    }
}

function* resumeAll() {
    yield fork(getResumeData);
    yield fork(getHomeData);
    yield call(delay, 10);
}

export default function* photosDataWatcher() {
    yield takeEvery(RESUME_DATA_REQUEST, resumeAll);
}
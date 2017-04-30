import {call, put, takeEvery, fork} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {getHomeData} from '../home/home.saga';

const resumeDataApi = () => {
    return fetch('data-resume.json')
        .then(response => {
            console.log(response.body);
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
        yield put({type: 'RESUME_DATA_SUCCESS', payload: resume});
    } catch (error) {
        yield put({type: 'RESUME_DATA_ERROR', payload: error});
    }
}

function* resumeAll() {
    yield fork(getResumeData);
    yield fork(getHomeData);
    yield call(delay, 10);
}

export default function* photosDataWatcher() {
    yield takeEvery('RESUME_DATA_REQUEST', resumeAll);
}
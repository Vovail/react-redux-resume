import homeDataWatcher from './home/home.saga';
import photosDataWatcher from './photos/photos.saga';
import resumeDataWatcher from './resume/resume.saga';

export default function* IndexSaga () {
    yield [
        homeDataWatcher(),
        photosDataWatcher(),
        resumeDataWatcher()
    ]
}
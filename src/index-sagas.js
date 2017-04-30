import homeDataWatcher from './home/home.saga';
import photosDataWatcher from './photos/photos.saga';
export default function* IndexSaga () {
    yield [
        homeDataWatcher(),
        photosDataWatcher()
    ]
}
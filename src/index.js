import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import reducers from './index-reducer';
import sagas from './index-sagas';

import App from './App';
import Home from './home/home.index';
import Resume from './resume/resume.index';
import Photos from './photos/photos.index'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(sagas);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path={'/'} component={App}>
                <Route path={'/home'} component={Home}/>
                <Route path={'/resume'} component={Resume}/>
                <Route path={'/photos'} component={Photos}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

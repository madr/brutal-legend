import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSagas from './sagas';
import App from './components/app';

const sagaMiddleware = createSagaMiddleware()

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSagas)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('brutal')
);

store.dispatch({ type: 'LOAD_ALBUMS', payload: { source: '/json/albums.json' }});

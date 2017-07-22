import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import { createStore,applyMiddleware } from 'redux';
import articlesManager from '../reducers';

const store = createStore(
    articlesManager,
    applyMiddleware(
        thunkMiddleware
    )
);

module.exports = store;
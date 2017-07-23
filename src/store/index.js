import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware
    )
);

module.exports = store;
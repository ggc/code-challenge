import { createStore } from 'redux';
import articlesManager from '../reducers';

const store = createStore(
    articlesManager
);

module.exports = store;
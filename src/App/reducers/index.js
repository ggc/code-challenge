import { combineReducers } from 'redux';
import {
    CREATE_ARTICLE,
    UPDATE_ARTICLE,
    DELETE_ARTICLE,
    REQUEST_ARTICLE,
    RECEIVE_ARTICLE,
    REQUEST_ARTICLES, 
    RECEIVE_ARTICLES 
} from '../actions';
import { request } from '../actions/request';
import { ARTICLEBYID_QUERY } from '../actions/queries.js';

// Reducer for ONE article (e.g. To show its details)
function article(
    state = {
        details: [{
            title: 'Loading',
            author: 'Loading',
            content: 'Loading',
            published: 'Loading',
            tags: []
        }],
        fetching: false
    },
    action
) {
    switch(action.type) {
        case CREATE_ARTICLE:
            return Object.assign({}, state, {
                details: [action.article]
            })
        case UPDATE_ARTICLE:
            return Object.assign({}, state, {
                details: [action.article]
            })
        case REQUEST_ARTICLE:
            return Object.assign({}, state, {
                fetching: true
            })
        case RECEIVE_ARTICLE:
            return Object.assign({}, state, {
                details: action.article.data.article
            })
        default:
            return state;
    }
}


// Reducer to handle Articles (e.g. To show its details)
function articles(
    state = {
        list: [],
        fetching: false
    },
    action
) {
    switch(action.type) {
        case REQUEST_ARTICLES:
            return Object.assign({}, state, {
                fetching: true
            })
        case RECEIVE_ARTICLES:
            return Object.assign({}, state, {
                list: action.articles,
                fetching: false
            })
        default:
            return state;
    }
}

// combineReducers gather results in stateObject like:
// newName: reducer => state = {newName: <reducerState>}
const articlesManager = combineReducers({
    articles,
    article
});

export default articlesManager;
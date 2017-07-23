import { combineReducers } from 'redux';
import { 
    REQUEST_ARTICLE, 
    RECEIVE_ARTICLE,
    REQUEST_ARTICLES, 
    RECEIVE_ARTICLES 
} from '../actions';
import { request } from '../request';
import { articleById_QUERY } from '../queries.js';

// Reducer for ONE article (e.g. To show its details)
function article(
    state = {
        details: [{
            author: 'Loading',
            excerpt: 'Loading',
            title: 'Loading'
        }],
        fetching: false
    },
    action
) {
    switch(action.type) {
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
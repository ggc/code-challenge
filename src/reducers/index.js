import { combineReducers } from 'redux';
import { REQUEST_ARTICLE, RECEIVE_ARTICLE } from '../actions';
import { request } from '../request';
import { articleById_QUERY } from '../queries.js';

function articles(
    state = {
        articles: [],
        articleDetails: [{
            author: '1',
            excerpt: '2',
            title: '3'
        }]
    },
    action
) {
    console.log('Reducer fired!. State: ', state);
    switch(action.type) {
        case REQUEST_ARTICLE:
            return state;
        case RECEIVE_ARTICLE:
            console.log('RECEIVE_ARTICLE - ',action.article);
            return Object.assign({}, state, {
                articleDetails: action.article.data.article
            })
            // request(articleById_QUERY(action.articleId))
            // .then(response => {
            //     console.log('Query results on reducer...: ', response)
            //     return Object.assign({}, state, {
            //         articleDetails: response.data.article
            //     })
            // })
            // .catch(
            //     reason => {
            //         console.log('Promise rejected because ', reason)
            //         return state;
            //     }
            // )
        default:
            return state;
    }
}

// combineReducers gather results in stateObject like:
// newName: reducer => state = {newName: <reducerState>}
const articlesManager = combineReducers({
    articles
});

export default articlesManager;
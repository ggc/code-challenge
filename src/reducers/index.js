import { combineReducers } from 'redux';

function articles(
    state = {
        articles: [],
        article: {}
    },
    action
) {
    console.log('Reducer fired!. State: ', state);
    switch(action.type) {
        
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
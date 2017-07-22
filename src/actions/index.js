// import request from 'superagent';
import { request } from '../request';
import { articleById_QUERY } from '../queries';

// export const LOAD_ARTICLE = 'LOAD_ARTICLE';
// export const loadArticle = (articleId) => {
//     return {
//         type: 'LOAD_ARTICLE',
//         articleId
//     };
// };

export const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
function requestArticle(articleId) {
    return {
        type: REQUEST_ARTICLE,
        articleId
    }
}

export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
function receiveArticle(article, articleId) {
    return {
        type: RECEIVE_ARTICLE,
        articleId,
        article
    }
}



export function loadArticle(articleId) {
    return function (dispatch) {
        dispatch(requestArticle(articleId))

        request(articleById_QUERY(articleId))
        .then(response => {
            console.log('Query results on reducer...: ', response)
            dispatch(receiveArticle(response, articleId));
        })
        .catch(
            reason => {
                console.log('Promise rejected because ', reason)
                dispatch(receiveArticle(response, articleId));
            }
        )
    }
}
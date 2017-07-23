import { request } from '../request';
import { articleById_QUERY, ARTICLES_QUERY } from '../queries';

// Article selected actions
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
            dispatch(receiveArticle(response, articleId));
        })
        .catch(
            reason => {
                dispatch(receiveArticle(response, articleId));
            }
        )
    }
}

// Articles pack actions
export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
function requestArticles() {
    return {
        type: REQUEST_ARTICLES
    }
}

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
function receiveArticles(articles) {
    return {
        type: RECEIVE_ARTICLES,
        articles: articles.data.articles
    }
}

export function loadArticles() {
    return function (dispatch) {
        dispatch(requestArticles())

        request(ARTICLES_QUERY)
        .then(response => {
            console.log('Request action response: ', response);
            dispatch(receiveArticles(response));
        })
        .catch(
            reason => {
            }
        )
    }
}
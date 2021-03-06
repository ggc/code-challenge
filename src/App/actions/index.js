import { request } from './request';
import { 
    ARTICLEBYID_QUERY,
    ARTICLES_QUERY,
    CREATEARTICLE_QUERY,
    UPDATEARTICLE_QUERY,
    DELETEARTICLE_QUERY
} from './queries';

// Create article
const CREATE_ARTICLE = 'CREATE_ARTICLE';
export function createArticle(article) {
    request(CREATEARTICLE_QUERY(article))
    .then(response => {
        console.log('Axios res: ', response)
    })
    .catch(
        reason => {
            // Handle exception or dispatch ERROR
            console.log('Error ', reason)
        }
    )
    return {
        type: CREATE_ARTICLE,
        article
    }
}

// Delete article
const DELETE_ARTICLE = 'DELETE_ARTICLE';
export function deleteArticle(articleId) {
    request(DELETEARTICLE_QUERY(articleId))
    .then((response) => {
        console.log('Axios res: ', response)
    })
    .catch(
        reason => {
            // Handle exception or dispatch ERROR
            console.log('Error ', reason)
        }
    )
    return {
        type: DELETE_ARTICLE,
        articleId
    }
}

// Update article
const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export function updateArticle(article) {
    request(UPDATEARTICLE_QUERY(article))
    .then((response) => {
        console.log('Axios res: ', response)
    })
    .catch(
        reason => {
            // Handle exception or dispatch ERROR
            console.log('Error ', reason)
        }
    )
    return {
        type: UPDATE_ARTICLE,
        article
    }
}

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

        request(ARTICLEBYID_QUERY(articleId))
        .then(response => {
            dispatch(receiveArticle(response, articleId));
        })
        .catch(
            reason => {
                // Handle exception or dispatch ERROR
                console.log('Error ', reason)
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
            dispatch(receiveArticles(response));
        })
        .catch(
            reason => {
                // Handle exception or dispatch ERROR
                console.log('Error ', reason)
            }
        )
    }
}
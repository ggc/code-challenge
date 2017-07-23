import { connect } from 'react-redux';
import ArticleDetailsComp from '../components/ArticleDetails.jsx';
import { loadArticle, deleteArticle } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        articleDetails: state.article.details,
        id: ownProps.match.params.articleID
    } 
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleInit: (articleId) => {
            dispatch(loadArticle(articleId))
        },
        onDelete: (articleId) => {
            dispatch(deleteArticle(articleId))
            console.log('Click! Status: ', articleId)
        }
    }
};

const ArticleDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleDetailsComp);

export default ArticleDetails;
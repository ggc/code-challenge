import { connect } from 'react-redux';
import ArticleDetailsComp from '../components/ArticleDetails.jsx';
import { loadArticle } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        articleDetails: state.article.details,
        id: ownProps.match.params.articleID,
        onClick: () => {
            console.log('Click! Status: ', state)
        }
    } 
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleInit: (articleId) => {
            dispatch(loadArticle(articleId))
        }
    }
};

const ArticleDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleDetailsComp);

export default ArticleDetails;
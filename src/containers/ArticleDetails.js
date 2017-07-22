import { connect } from 'react-redux';
import ArticleDetailsComp from '../components/ArticleDetails.jsx';
import { loadArticle } from '../actions';

const mapStateToProps = (state, ownProps) => {
    console.log('ArticleDetails container props: ', ownProps, 'and state', state)
    return {
        articleDetails: state.articles.articleDetails,
        id: ownProps.match.params.articleID,
        onClick: () => {
            console.log('Click! Status: ', state)
        }
    } 
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleInit: (articleId) => {
            console.log('ArticleDetails container Dispatching loadArticle...')
            dispatch(loadArticle(articleId))
        }
    }
};

const ArticleDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleDetailsComp);

export default ArticleDetails;
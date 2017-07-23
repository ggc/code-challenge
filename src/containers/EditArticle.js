import { connect } from 'react-redux';
import EditArticleComp from '../components/EditArticle.jsx';
import { updateArticle } from '../actions';

const mapStateToProps = (state, ownProps) => {
    console.log('EditArticle mapStateToProps',state)
    return {
        articleDetails: state.article.details,
        onClick: () => {
            console.log('Click! Status: ', state)
        }
    } 
};
// handleInit: (articleId) => {
//             dispatch(loadArticle(articleId))
//         },
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
        onSubmit: (article) => {
            console.log('A title was submitted: ' + article);
            dispatch(updateArticle(article));
        }
    }
};

const UpdateArticle = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditArticleComp);

export default UpdateArticle;
import { connect } from 'react-redux';
import EditArticleComp from '../components/EditArticle.jsx';
import { createArticle } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        articleDetails: [{
            author: '',
            title: '',
            excerpt: ''
        }],
        onClick: () => {
            console.log('Click! Status: ', state)
        }
    } 
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleInit: () => {
            console.log('NewArticle handleInit')
            // dispatch(loadArticle(articleId))
        },
        onSubmit: (article) => {
            console.log('A title was submitted: ' + article.title);
            dispatch(createArticle(article));
        }
    }
};

const NewArticle = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditArticleComp);

export default NewArticle;
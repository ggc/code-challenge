import { connect } from 'react-redux';
import EditArticleComp from './EditArticle.jsx';
import { createArticle } from '../App/actions';

const mapStateToProps = (state, ownProps) => {
    return {
        articleDetails: [{
            author: '',
            title: '',
            content: '',
            excerpt: '',
            tags: '',
            published: false
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
            article.tags = article.tags.split(',').map( tag => '"'+tag.trim()+'"' )
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
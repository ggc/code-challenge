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
        }]
    } 
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleInit: () => {
            console.log('NewArticle handleInit')
        },
        onSubmit: (article) => {
            article.tags = article.tags.split(',').map( tag => '"'+tag.trim()+'"' )
            dispatch(createArticle(article));
        }
    }
};

const NewArticle = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditArticleComp);

export default NewArticle;
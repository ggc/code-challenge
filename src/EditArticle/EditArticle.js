import { connect } from 'react-redux';
import EditArticleComp from './EditArticle.jsx';
import { updateArticle } from '../App/actions';

const mapStateToProps = (state, ownProps) => {
    console.log('EditArticle mapStateToProps',state)
    return {
        articleDetails: state.article.details
    } 
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
        onSubmit: (article) => {
            article.tags = article.tags.split(',').map( tag => '"'+tag.trim()+'"' )
            article.content = article.content.replace(/[\n\r]+/g, '');
            dispatch(updateArticle(article));
        }
    }
};

const UpdateArticle = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditArticleComp);

export default UpdateArticle;
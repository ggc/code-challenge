import { connect } from 'react-redux';
import EditArticleComp from './EditArticle.jsx';
import { updateArticle } from '../App/actions';

const mapStateToProps = (state, ownProps) => {
    console.log('EditArticle mapStateToProps',state)
    return {
        articleDetails: state.article.details,
        onClick: () => {
            console.log('Click! Status: ', state)
        }
    } 
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
        onSubmit: (article) => {
            article.tags = article.tags.split(',').map( tag => '"'+tag.trim()+'"' )
            console.log('State submitted: ', article);
            dispatch(updateArticle(article));
        }
    }
};

const UpdateArticle = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditArticleComp);

export default UpdateArticle;
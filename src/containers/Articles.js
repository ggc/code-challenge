import { connect } from 'react-redux';
import ArticlesComp from '../components/Articles.jsx';
import { loadArticles } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        articles: state.articles.list
    } 
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleInit: () => {
            dispatch(loadArticles())
        }
    }
};

const Articles = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesComp);

export default Articles;
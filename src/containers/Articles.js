import { connect } from 'react-redux';
import ArticlesComp from '../components/Articles.jsx';

const mapStateToProps = (state, ownProps) => {
    return {
        articles: state.articles
    } 
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
};

const Articles = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesComp);

export default Articles;
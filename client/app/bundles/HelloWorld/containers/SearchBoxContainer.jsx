
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import { addSearchedTag } from '../actions/searchBoxActionCreators';

// Which part of the Redux global state does our component want to receive as props?


const mapStateToProps = (state) => {
  return {
    bookmarkTag: state.entities.get('bookmarkTag'),
    tags: state.entities.get('tags'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchedTagsAdded: (value) => {
      dispatch(addSearchedTag(value))
    },
  };
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps) (SearchBox);

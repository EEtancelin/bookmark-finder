
import { connect } from 'react-redux';
import AddBookmark from '../components/AddBookmark';
import { postBookmark } from '../actions/bookmarkActionCreators';

// Which part of the Redux global state does our component want to receive as props?

const onBookmarkCreated = (dispatch, values) => {
  dispatch(postBookmark(values))
}

const mapStateToProps = (state) => {
  return {
    show: state.getIn(['ui', 'showAddBookmarkForm']),
  };
};

const mapDispatchToProps = (dispatch, ownprops ) => {
  return {
    onSubmit: (values) => { onBookmarkCreated(dispatch, values)},
    onClose: () => {dispatch({type: 'HIDE_ADD_BOOKMARK_FORM'})}
  };
};


// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(AddBookmark);

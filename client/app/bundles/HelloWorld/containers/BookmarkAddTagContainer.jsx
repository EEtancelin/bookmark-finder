// Simple example of a React "smart" component

import { connect } from 'react-redux';
import BookmarkAddTag from '../components/BookmarkAddTag';
import { addTagToBookmark } from '../actions/bookmarkActionCreators';

// Which part of the Redux global state does our component want to receive as props?


const mapStateToProps = (state, ownprops) => ({
  bookmark: ownprops.bookmark,
  tags: state.entities.get('tags'),
});


const mapDispatchToProps = (dispatch) => {
  return {
    onTagAddedToBookmark: (tagTitle, bookmark) => { dispatch(addTagToBookmark(tagTitle, bookmark)); }
  };
};


// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkAddTag);

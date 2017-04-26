// Simple example of a React "smart" component

import { connect } from 'react-redux';
import BookmarkList from '../components/BookmarkList';
import * as actions from '../actions/mainContentActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = state => (
  {
    allbookmarks: state.entities.get('bookmarks')
    .map(bt => bt.get('id'))
    .toSet(),

    bookmarksId: state.entities.get('bookmarkTag')
    .filter(bt => state.ui.get('searchedTags').has(bt.get('tag_id')))
    .map(bt => bt.get('bookmark_id'))
    .toSet(),
  });

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, actions)(BookmarkList);


import { connect } from 'react-redux';
import Bookmark from '../components/Bookmark';
import * as actions from '../actions/mainContentActionCreators';

// Which part of the Redux global state does our component want to receive as props?


const mapStateToProps = (state, ownprops) => {
  const bookmark = state.bookmarks.get(ownprops.bookmark_id)
  return {
    title: bookmark.get("title"),
    url: bookmark.get("url"),
    date: bookmark.get("date"),
  }
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, actions)(Bookmark);

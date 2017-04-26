
import { connect } from 'react-redux';
import Bookmark from '../components/Bookmark';
import * as actions from '../actions/mainContentActionCreators';

// Which part of the Redux global state does our component want to receive as props?

const getTagsByBookmark = (state, bookmarkId) => (
  state.entities.get('bookmarkTag')
    .filter(t => t.get('bookmark_id') === bookmarkId)
    .map(x => x.get('tag_id'))
    .toSet()
);


const mapStateToProps = (state, ownprops) => {
  const bookmark = state.entities.get('bookmarks').get(ownprops.bookmarkId.toString());
  return {
    key: bookmark.get('id'),
    bmId: bookmark.get('id'),
    title: bookmark.get('title'),
    url: bookmark.get('url'),
    date: bookmark.get('date'),
    tags: getTagsByBookmark(state, bookmark.get('id')),
    thumbnail: bookmark.get('thumbnail'),
  };
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, actions)(Bookmark);

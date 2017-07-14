
import { connect } from 'react-redux';
import Bookmark from '../components/Bookmark';
import { getTagIdsForBookmark } from '../reducers/bookmarkTagsReducer';
import * as actions from '../actions/mainContentActionCreators';

// Which part of the Redux global state does our component want to receive as props?

const mapStateToProps = (state, ownprops) => {
  const bookmark = state.get('entities').get('bookmarks').get(ownprops.bookmarkId.toString());
  return {
    key: bookmark.get('id'),
    bmId: bookmark.get('id'),
    title: bookmark.get('title'),
    url: bookmark.get('url'),
    date: bookmark.get('created_at'),
    tagsTitles: bookmark.get('tags_a'),
    tagsIds: getTagIdsForBookmark(state, ownprops.bookmarkId),
    thumbnailUrl: bookmark.get('thumbnail_url'),
  };
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, actions)(Bookmark);

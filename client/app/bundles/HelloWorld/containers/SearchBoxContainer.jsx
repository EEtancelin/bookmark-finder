
import { connect } from 'react-redux';
import { Set } from 'immutable';
import SearchBox from '../components/SearchBox';
import { updateSearchedTag } from '../actions/searchBoxActionCreators';
import { updateSearchBoxValue } from '../actions/searchBoxActionCreators'

const getBookmarksAssociateToTags = (bookmarkTag, tags) => {
  return (bookmarkTag
    .filter(bt => tags.has(bt.get('tag')))
    .map(bt => bt.get('bookmark'))
    .toSet()
  );
};

const getTagsAssociateToBookmarks = (bookmarkTag, bookmarks) => {
  return (bookmarkTag
    .filter(bt => bookmarks.has(bt.get('bookmark')))
    .map(bt => bt.get('tag'))
    .toSet()
  );
};

// Is there Searched Tags ?
const hasSearchedTags = (state) =>  {
  return (state.ui.get('searchedTags').count() > 0);
}

// Which Tags should be propose to the user ?
const getProposedTags = (state) => {
  return (hasSearchedTags(state) ? getAssociatedTags(state) : getAllTags(state))
};

const getAllTags = (state) => {
  return (state.entities.get('bookmarkTag').map(bt => bt.get('tag')).toSet())
};

// Which Tags have one boomarks in common with searched Tags ?
const getAssociatedTags = (state) => {
  const bookmarkTag = state.entities.get('bookmarkTag');
  const searchedTags = state.ui.get('searchedTags');
  const associateBookmarks = getBookmarksAssociateToTags(bookmarkTag, searchedTags);
  return (getTagsAssociateToBookmarks(bookmarkTag, associateBookmarks))
}

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => {
  return {
    bookmarkTag: state.entities.get('bookmarkTag'),
    tags: state.entities.get('tags'),
    inputValue: state.ui.get('searchBoxValue'),
    searchedTags: state.ui.get('searchedTags'),
    proposedTags: getProposedTags(state),
    associatedTags: getAssociatedTags(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchedTagsUpdate: (value) => { dispatch(updateSearchedTag(value)); },
    onDeleteTagsClick: () => { dispatch(updateSearchedTag(Set([]))); },
    onSearchBoxValueChange: (value) => { dispatch(updateSearchBoxValue(value)); },
  };
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);

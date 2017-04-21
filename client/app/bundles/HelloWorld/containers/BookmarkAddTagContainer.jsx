// Simple example of a React "smart" component

import { connect } from 'react-redux';
import BookmarkAddTag from '../components/BookmarkAddTag';
import { createTag , addTagToBookmark } from '../actions/bookmarkActionCreators';

// Which part of the Redux global state does our component want to receive as props?

const onTagAddedToBookmark = (tagTitle, bookmark) => {
  return(addTagToBookmark(tagTitle, bookmark))
}

const onTagCreated = (tagId, title, bookmark) => {
  return(createTag(tagId, title, bookmark))
}

const mapStateToProps = (state, ownprops) => ({
  bookmark: ownprops.bookmark,
  tags: state.entities.get('tags'),
  newTagId: parseInt(state.entities.get('tags').filter(t => t.get('id')).max().first()) + 1,
});


const mapDispatchToProps = (dispatch) => {
  return {
    onTagAddedToBookmark: (tagId, tagTitle, bookmark) => { dispatch(onTagAddedToBookmark(tagId, tagTitle, bookmark)); },
    onTagCreated: (tagId, tagTitle, bookmark) => { dispatch(createTag(tagId, tagTitle, bookmark)); }
  };
};


// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkAddTag);

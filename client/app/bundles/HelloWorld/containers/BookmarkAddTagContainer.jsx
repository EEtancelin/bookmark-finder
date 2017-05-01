// Simple example of a React "smart" component

import { connect } from 'react-redux';
import BookmarkAddTag from '../components/BookmarkAddTag';
import { createTag , addTagToBookmark } from '../actions/bookmarkActionCreators';

// Which part of the Redux global state does our component want to receive as props?

const onTagAddedToBookmark = (tags, tagTitle, bookmark) => {
  const tagUuid = tags.find(t => (t.get('title') === tagTitle)).get('uuid');
  return(addTagToBookmark(tagUuid, bookmark))
}

const onTagCreated = (title, bookmark) => {
  return(createTag('1', title, bookmark))
}

const isNewTag = (tags, value) => {
  return (!tags.map(t => t.get('title')).toSet().has(value));
}

const getTagUuidByTitle = (tags, title) => {
  return ((tags.find(t => t.get('title') === title)).get('id')) ;
}

const onTagSubmit = (tags, tagTitle, bookmarkId) => {
  const newTag = isNewTag(tags, tagTitle);
  if (newTag) {
    return onTagCreated(tagTitle, bookmarkId)
  } else {
    return onTagAddedToBookmark(tags, tagTitle, bookmarkId);
  }
};

const mapStateToProps = (state, ownprops) => ({
  bookmark: ownprops.bookmark,
  tags: state.get('entities').get('tags'),
  newTagId: parseInt(state.get('entities').get('tags').filter(t => t.get('id')).max().first()) + 1,
});


const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    onTagSubmit: (tags, tagTitle, bookmarkId) => {dispatch(onTagSubmit(tags, tagTitle, bookmarkId));}
  };
};


// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkAddTag);

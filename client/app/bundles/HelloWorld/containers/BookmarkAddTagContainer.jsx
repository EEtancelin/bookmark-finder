// Simple example of a React "smart" component

import { connect } from 'react-redux';
//Selectors
import { getAllTags } from '../reducers/bookmarksReducer';

//Actions
import { postTag , addTagToBookmark } from '../actions/bookmarkActionCreators';

// Components
import BookmarkAddTag from '../components/BookmarkAddTag';

// What are the tags to propose ?
const getProposedTags = (state, inputValue) => {
  return (
    getAllTags(state)
    .filter(tagTitle => RegExp(inputValue).exec(tagTitle))
    .sort()
  );
}

// Is this tag is new ?
const isNewTag = (tags, value) => {
  return (!tags.map(t => t.get('title')).toSet().has(value));
}

// What is the tag UUid for this title.
const getTagUuidByTitle = (tags, title) => {
  return ((tags.find(t => t.get('title') === title)).get('id')) ;
}

// What to do when an user submit a tag ?
const submitTag = (tagTitle, bookmarkId) => {
  return (postTag(tagTitle, bookmarkId))
};

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state, ownprops) => ({
  bookmarkId: ownprops.bookmark,
  tags: state.get('entities').get('tags'),
  getProposedTags: inputValue => getProposedTags(state, inputValue),
});


const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    submitTag: (tagTitle, bookmarkId) => {dispatch(submitTag(tagTitle, bookmarkId));}
  };
};


// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkAddTag);

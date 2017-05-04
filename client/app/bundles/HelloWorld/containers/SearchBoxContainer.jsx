
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import {
  updateSearchBoxValue,
  addSearchedTag,
  deleteLastSearchedTag,
  deleteSearchedTags,
} from '../actions/searchBoxActionCreators';

import {
  findTagByTitle,
} from '../reducers/entitiesReducer';

import {
  getTagsIdsWithCommonBookmarkWithTagsIds,
} from '../reducers/bookmarkTagsReducer';

import { getAllTagsIds } from '../reducers/tagsReducer';
import {
  hasSearchedTags,
  getSearchedTagsIds,
} from '../reducers/uiReducer';
// Methods

// Whitch action dispatch when user Input Change ?
const onUserInputChange = (tags, userInput) => {
  const tag = findTagByTitle(tags, userInput);
  let action;
  if (tag) {
    action = addSearchedTag(tag.get('id'));
  } else {
    action = updateSearchBoxValue(userInput);
  }
  return action;
};

// Which Tag to propose to the user ?
const getProposedTags = state => {
  const searchedTags = state.getIn(['ui', 'searchedTags']);
  if (hasSearchedTags(state)) {
    return (getTagsIdsWithCommonBookmarkWithTagsIds(state, searchedTags))
  } else {
    return (getAllTagsIds(state))
  }
};

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => {
  return {
    tags: state.getIn(['entities', 'tags']),
    inputValue: state.getIn(['ui', 'searchBoxValue']),
    searchedTagsIds: getSearchedTagsIds(state),
    proposedTagsIds: getProposedTags(state),
    onUserInputChange: (tags, userInput) => onUserInputChange(tags, userInput),
  };
};

// Use Map Dispath to Props Shorthand Notation.
// https://egghead.io/lessons/javascript-redux-using-mapdispatchtoprops-shorthand-notation

export default connect(
  mapStateToProps,
  {
    onDeleteTagsClick: deleteSearchedTags,
    onSearchBoxValueChange: onUserInputChange,
    onDeleteLastSearchedTag: deleteLastSearchedTag,
  },
)(SearchBox);

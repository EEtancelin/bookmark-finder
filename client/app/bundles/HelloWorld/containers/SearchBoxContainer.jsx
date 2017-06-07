
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
  tagsOccurrences,
} from '../reducers/bookmarkTagsReducer';

import { sortTagsIdsByTitle } from '../reducers/tagsReducer';
import {
  hasSearchedTags,
  getSearchedTagsIds,
  getSearchedTagsString,
} from '../reducers/uiReducer';

// Methods
const getGoogleQueryString = (state, inputValue) =>  {
  return (getSearchedTagsString(state) + ' ' + inputValue);
}

// Given a User Input return a normalize version of it.
// => Lower case, no leading whitespace.
const normalizeUserInput = string => string.toLowerCase().replace(/^\s/, '');

// Whitch action dispatch when user Input Change ?
const onUserInputChange = (tags, userInput) => {
  const nUserInput = normalizeUserInput(userInput);
  const tag = findTagByTitle(tags, nUserInput);
  let action;
  if (tag) {
    action = addSearchedTag(tag.get('id'));
  } else {
    action = updateSearchBoxValue(nUserInput);
  }
  return action;
};

// Which Tag to propose to the user ?
const getProposedTags = state => {
  const searchedTags = state.getIn(['ui', 'searchedTags']);
  if (hasSearchedTags(state)) {
    const proposedTags = getTagsIdsWithCommonBookmarkWithTagsIds(state, searchedTags)
    return (sortTagsIdsByTitle(state, proposedTags))
  } else {
      const proposedTags = tagsOccurrences(state)
      .filter(tagOc => tagOc > 0)
      .keySeq()
      .toSet()
    return (sortTagsIdsByTitle(state, proposedTags))
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
    getGoogleQueryString: inputValue => getGoogleQueryString(state, inputValue),
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


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
  getProposedTagsTitles,
} from '../reducers/entitiesReducer';

import {
  getAllTags,
} from '../reducers/bookmarksReducer';


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
  const tag = findTagByTitle(tags, userInput);
  let action;
  if (tag) {
    action = addSearchedTag(normalizeUserInput(userInput));
  } else {
    action = updateSearchBoxValue(userInput);
  }
  return action;
};

// Which Tag to propose to the user ?
const getProposedTags = state => {
  const searchBoxValue = state.getIn(['ui', 'searchBoxValue'])
  const searchedTags = state.getIn(['ui', 'searchedTags']);
  const tagsOc = tagsOccurrences(state);
  const tags = state
    .getIn(['entities', 'tags'])
    .map(tag => tag.set('occurences', tagsOc.get(tag.get('id'))))
    .filter(tag => RegExp(searchBoxValue).exec(tag.get('title')))
    .sortBy(tag => tag.get('title'));
  if (hasSearchedTags(state)) {
    const proposedTags = getTagsIdsWithCommonBookmarkWithTagsIds(state, searchedTags);
    return (tags
      .filter(tag => proposedTags.has(tag.get('id')))
      .keySeq()
    );
  } else {
    return (tags
    .filter(tag => tag.get('occurences') > 0)
    .keySeq()
    .toSet()
    );
  }
};

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => {
  return {
    tags: state.getIn(['entities', 'tags']),
    tagsTitles: getAllTags(state),
    inputValue: state.getIn(['ui', 'searchBoxValue']),
    searchedTagsIds: getSearchedTagsIds(state),
    proposedTagsTitle: getProposedTagsTitles(state),
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

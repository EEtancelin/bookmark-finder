
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
  getProposedBookmarksTagsTitles,
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
  getSearchedTagsTitles,
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
const onUserInputChange = (allTagsTitles, userInput) => {
  const nUserInput = normalizeUserInput(userInput);
  let action;
  if (allTagsTitles.has(nUserInput)) {
    action = addSearchedTag(nUserInput);
  } else {
    action = updateSearchBoxValue(nUserInput);
  }
  return action;
};

// Which Tag to propose to the user ?
const getProposedTags = state => {
  const searchBoxValue = state.getIn(['ui', 'searchBoxValue']);
  return (getProposedBookmarksTagsTitles(state)
    .filter(tag => RegExp(searchBoxValue).exec(tag))
    .sort()
  );
};

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => {
  return {
    tags: state.getIn(['entities', 'tags']),
    tagsTitles: getAllTags(state),
    inputValue: state.getIn(['ui', 'searchBoxValue']),
    searchedTagsTitles: getSearchedTagsTitles(state),
    proposedTagsTitles: getProposedTags(state),
    onUserInputChange: userInput => onUserInputChange(getAllTags(state), userInput),
    getGoogleQueryString: inputValue => getGoogleQueryString(state, inputValue),
  };
};

const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    onDeleteTagsClick: () => dispatch(deleteSearchedTags()),
    onDeleteLastSearchedTag: () => dispatch(deleteLastSearchedTag()),
    onSearchBoxValueChange: (tagsTitles, userInput) => dispatch(onUserInputChange(tagsTitles, userInput)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBox);

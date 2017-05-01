
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import {
  updateSearchedTag,
  updateSearchBoxValue,
  addSearchedTag,
  deleteLastSearchedTag,
  deleteSearchedTags,
} from '../actions/searchBoxActionCreators';

import {
  getTagsRelatedToSearchedTags,
  getAllTags,
} from '../reducers/entitiesReducer';

// Methods
// What is the tag hash corresponding to this title ?

const findTagByTitle = (tags, title) => tags.find(t => t.get('title') === title);
// Is there Searched Tags ?
const hasSearchedTags = state => !state.getIn(['ui', 'searchedTags']).isEmpty();

// Whitch action triger when user Input Change ?
const onUserInputChange = (tags, userInput) => {
  const tag = findTagByTitle(tags, userInput);
  let action;
  if (tag) {
    action = addSearchedTag(tag.get('uuid'));
  } else {
    action = updateSearchBoxValue(userInput);
  }
  return action;
};

// Which Tag to propose to the user ?
const getProposedTags = state => (
  hasSearchedTags(state) ? getTagsRelatedToSearchedTags(state) : getAllTags(state)
);

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => {
  return {
    tags: state.getIn(['entities', 'tags']),
    inputValue: state.getIn(['ui', 'searchBoxValue']),
    searchedTags: state.getIn(['ui', 'searchedTags']).toSet(),
    proposedTags: getProposedTags(state),
    onUserInputChange: (tags, userInput) => onUserInputChange(tags, userInput),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchedTagsUpdate: (value) => { dispatch(updateSearchedTag(value)); },
    onDeleteTagsClick: () => { dispatch(deleteSearchedTags()); },
    onSearchBoxValueChange: (tags, value) => { dispatch(onUserInputChange(tags, value)); },
    onDeleteLastSearchedTag: () => { dispatch(deleteLastSearchedTag()); },
  };
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);

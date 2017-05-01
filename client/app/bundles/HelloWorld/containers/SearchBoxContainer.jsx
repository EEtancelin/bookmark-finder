
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import {
  updateSearchBoxValue,
  addSearchedTag,
  deleteLastSearchedTag,
  deleteSearchedTags,
} from '../actions/searchBoxActionCreators';

import {
  getTagsRelatedToSearchedTags,
  getAllTags,
  findTagByTitle,
  hasSearchedTags,
} from '../reducers/entitiesReducer';

// Methods

// Listen Backslach to delete the last Tag.
const onKeyDown = (event) => {
  if (event.keyCode === 8 && this.props.inputValue === '') {
    this.props.onDeleteLastSearchedTag();
  }
}

// Whitch action dispatch when user Input Change ?
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

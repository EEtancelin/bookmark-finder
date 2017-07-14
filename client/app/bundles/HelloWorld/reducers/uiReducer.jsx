import { combineReducers } from 'redux-immutable';
import { List } from 'immutable';

import { sortTagsIdsByTitle,
  tagsIdsToString,
} from './tagsReducer';

import {
  UPDATE_SEARCHED_TAG,
  ADD_SEARCHED_TAG,
  DELETE_LAST_SEARCHED_TAG,
  UPDATE_SEARCH_BOX_VALUE,
  DELETE_SEARCHED_TAGS,
} from '../constants/appConstants';

// Is there Searched Tags ?
export const hasSearchedTags = state => !state.getIn(['ui', 'searchedTags']).isEmpty();
// Whats are the id of the searchedTags sort by title.
export const getSearchedTagsIds = (state) => {
  return (state, state.getIn(['ui', 'searchedTags']).toSet());
};

export const getSearchedTagsString = (state) => {
  const searchedTags = state.getIn(['ui', 'searchedTags']).toOrderedSet();
  return (tagsIdsToString(state, searchedTags) || '');
};

const searchBoxValue = (state = Map({}), action) => {
  switch (action.type) {
    case UPDATE_SEARCH_BOX_VALUE:
      return action.value.toLowerCase();
    case UPDATE_SEARCHED_TAG:
      return '';
    case ADD_SEARCHED_TAG:
      return '';
    case DELETE_SEARCHED_TAGS:
      return '';
    default:
      return state;
  }
};

const searchedTags = (state = Map({}), action) => {
  switch (action.type) {
    case '@@INIT':
      return state.toSet();
    case UPDATE_SEARCHED_TAG:
      return action.tags.toSet();
    case ADD_SEARCHED_TAG:
      return state.push(action.tagTitle);
    case DELETE_LAST_SEARCHED_TAG:
      return state.butLast();
    case DELETE_SEARCHED_TAGS:
      return List([]);
    default:
      return state;
  }
};
const showAddBookmarkForm = (state = true, action) => {
  switch (action.type) {
    case '@@INIT':
      return state;
      case 'SHOW_ADD_BOOKMARK_FORM':
        return true;
      case 'HIDE_ADD_BOOKMARK_FORM':
          return false;
    default:
      return state;
  }
};

const ui = combineReducers({
  searchedTags,
  searchBoxValue,
  showAddBookmarkForm,
});

export default ui;

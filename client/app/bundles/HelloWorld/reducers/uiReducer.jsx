import { combineReducers } from 'redux-immutable';
import { Set } from 'immutable';

import {
  UPDATE_SEARCHED_TAG,
  ADD_SEARCHED_TAG,
  DELETE_LAST_SEARCHED_TAG,
  UPDATE_SEARCH_BOX_VALUE,
  DELETE_SEARCHED_TAGS,
} from '../constants/appConstants';

const searchBoxValue = (state = Map({}), action) => {
  switch (action.type) {
    case UPDATE_SEARCH_BOX_VALUE:
      return action.value;
    case UPDATE_SEARCHED_TAG:
      return '';
    case ADD_SEARCHED_TAG:
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
      return state.add(action.tagId);
    case DELETE_LAST_SEARCHED_TAG:
      return state.butLast();
    case DELETE_SEARCHED_TAGS:
      return Set([]);
    default:
      return state;
  }
};


const ui = combineReducers({
  searchedTags,
  searchBoxValue,
});

export default ui;

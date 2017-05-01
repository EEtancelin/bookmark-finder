
import {
  UPDATE_SEARCHED_TAG,
  ADD_SEARCHED_TAG,
  UPDATE_SEARCH_BOX_VALUE,
  DELETE_LAST_SEARCHED_TAG,
} from '../constants/appConstants';


export const updateSearchedTag = tags => ({
  type: UPDATE_SEARCHED_TAG,
  tags,
});

export const updateSearchBoxValue = value => ({
  type: UPDATE_SEARCH_BOX_VALUE,
  value,
});

export const addSearchedTag = tagId => ({
  type: ADD_SEARCHED_TAG,
  tagId,
});

export const deleteLastSearchedTag = tagId => ({
  type: DELETE_LAST_SEARCHED_TAG,
  tagId,
});

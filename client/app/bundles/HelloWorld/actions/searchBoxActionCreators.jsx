
import {
  UPDATE_SEARCHED_TAG,
  ADD_SEARCHED_TAG,
  UPDATE_SEARCH_BOX_VALUE,
  DELETE_LAST_SEARCHED_TAG,
  DELETE_SEARCHED_TAGS,
} from '../constants/appConstants';


export const updateSearchedTag = tags => ({
  type: UPDATE_SEARCHED_TAG,
  tags,
});

export const updateSearchBoxValue = value => ({
  type: UPDATE_SEARCH_BOX_VALUE,
  value,
});

export const addSearchedTag = tagTitle => ({
  type: ADD_SEARCHED_TAG,
  tagTitle,
});

export const deleteLastSearchedTag = () => ({
  type: DELETE_LAST_SEARCHED_TAG,
});

export const deleteSearchedTags = () => ({
  type: DELETE_SEARCHED_TAGS,
});

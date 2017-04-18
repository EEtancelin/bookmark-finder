import { combineReducers } from 'redux';
import { Map, fromJS } from 'immutable';
import { UPDATE_SEARCHED_TAG, UPDATE_SEARCH_BOX_VALUE } from '../constants/mainContentConstants';

const getTagIdFromTitle = (bookmarkTags, tagTitle) => {
    return(bookmarkTags.get('tags').get(tagTitle))
}

const entities = (state = Map({}), action) => {
  switch (action.type) {
    case '@@INIT':
      return fromJS(state);
    case 'ADD_TAG_TO_BOOKMARK':
      const tag = state.get('tags')
        .find(tag => tag.get('title') === action.tagTitle )

      if (tag) {tag}
      else {}

      const bookmarkTagId = state.get('bookmarkTag').count() + 1;
      const bookmarkTag = Map({ tag: tagId, bookmark:action.bookmark });
      return state.setIn(['bookmarkTag', bookmarkTagId], bookmarkTag);
      case 'CREATE_TAG':
      return state.entities.set('tag','sdsds')
    default:
      return state;
  }
};

const ui = (state = Map({}), action) => {
  switch (action.type) {
    case UPDATE_SEARCHED_TAG:
      return state.setIn(['searchedTags'], (action.tags).toSet());
    case UPDATE_SEARCH_BOX_VALUE:
      return state.setIn(['searchBoxValue'], (action.value));
    case '@@INIT':
      return fromJS(state);
    default:
      return state;
  }
};

const mainContentReducer = combineReducers({
  entities,
  ui,
});

export default mainContentReducer;

import { combineReducers } from 'redux';
import { Map, fromJS } from 'immutable';
import { UPDATE_SEARCHED_TAG, UPDATE_SEARCH_BOX_VALUE } from '../constants/mainContentConstants';

const getNewBookmarkTagId = (bookmarkTag) => {
  return ((bookmarkTag.map(t => parseInt(t.get('id'))).max() + 1).toString());
};

const entities = (state = Map({}), action) => {
  switch (action.type) {
    case '@@INIT':
      return fromJS(state);
    case 'ADD_TAG_TO_BOOKMARK':
      const tag = state.get('tags').find(tag => tag.get('title') === action.tagTitle);
      const tagId = tag.get('id')
      const bookmarkTagId = getNewBookmarkTagId (state.get('bookmarkTag'));
      const bookmarkTag = Map({ id: bookmarkTagId,  tag: tagId, bookmark:action.bookmark });
      return state.setIn(['bookmarkTag', bookmarkTagId], bookmarkTag);

    case 'CREATE_TAG':
      let newState = state.setIn(['tags', action.tagId], Map({ id :action.tagId, title: action.tagTitle}));
      const bookmarkTagIdd = getNewBookmarkTagId (state.get('bookmarkTag'));
      newState = newState.setIn(['bookmarkTag', bookmarkTagIdd], Map({ id: bookmarkTagIdd, tag: action.tagId, bookmark: action.bookmark }))
      return newState;
    case 'REMOVE_BOOKMARK':
      return (state.setIn(['bookmarkTag'],
        state.get('bookmarkTag').filter(bt =>
          (bt.get('bookmark') !== action.bookmark)
          || (bt.get('tag') !== action.tag)
        )
      ));
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

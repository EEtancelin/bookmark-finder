import { UPDATE_SEARCHED_TAG, UPDATE_SEARCH_BOX_VALUE } from '../constants/mainContentConstants';

const ui = (state = Map({}), action) => {
  switch (action.type) {
    case UPDATE_SEARCHED_TAG:
      return state.setIn(['searchedTags'], (action.tags).toSet());
    case UPDATE_SEARCH_BOX_VALUE:
      return state.setIn(['searchBoxValue'], (action.value));
    default:
      return state;
  }
};

export default ui;

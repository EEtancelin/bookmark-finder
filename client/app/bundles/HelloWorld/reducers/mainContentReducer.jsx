import { combineReducers } from 'redux';
import { Map, fromJS, Set } from 'immutable';
import { UPDATE_SEARCHED_TAG } from '../constants/mainContentConstants';

const entities = (state = Map({}), action) => {
  switch (action.type) {
    case '@@INIT':
      return fromJS(state);
    default:
      return state;
  }
};

const ui = (state = Map({}), action) => {
  switch (action.type) {
    case UPDATE_SEARCHED_TAG:
      return state.setIn(['searchedTags'], (action.tags).toSet());
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

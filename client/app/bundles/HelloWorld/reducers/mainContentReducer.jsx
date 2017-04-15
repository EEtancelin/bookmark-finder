import { combineReducers } from 'redux';
import { Map, fromJS } from 'immutable';
import { ADD_SEARCHED_TAG } from '../constants/mainContentConstants';


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
    case ADD_SEARCHED_TAG:
      const searchedTags = state.get('searchedTags').concat(action.tag).toSet();
      return state.setIn(['searchedTags'], searchedTags);
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

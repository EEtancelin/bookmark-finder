
import { combineReducers } from 'redux-immutable';
import ui from './uiReducer';
import entities from './entitiesReducer';


const user = (state = Map({}), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const api = (state = Map({}), action) => {
  switch (action.type) {
    case 'IS_FETCHING_DATA':
      return state.setIn(['isFetching'], true);
    default:
      return state;
  }
};

const mainContentReducer = combineReducers({
  entities,
  ui,
  user,
  api,
});

export default mainContentReducer;

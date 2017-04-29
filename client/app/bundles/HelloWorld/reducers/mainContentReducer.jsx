
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import ui from './uiReducer';
import entities from './entitiesReducer';



const user = (state = Map({}), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const mainContentReducer = combineReducers({
  entities,
  ui,
  user,
});

export default mainContentReducer;

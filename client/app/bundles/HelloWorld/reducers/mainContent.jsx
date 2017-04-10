import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE } from '../constants/mainContentConstants';
import { Map, List, fromJS } from 'immutable';


const bookmarks = (state = Map({}), action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    case "@@INIT":
      return fromJS(state)
    default:
      return state;
  }
};

const bookmarks_list = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    case "@@INIT":
      return fromJS(state)
    default:
      return state;
  }
};

const mainContentReducer = combineReducers({ bookmarks,bookmarks_list});

export default mainContentReducer;

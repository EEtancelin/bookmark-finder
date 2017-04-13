import { combineReducers } from 'redux';
import { Map, fromJS } from 'immutable';
import { HELLO_WORLD_NAME_UPDATE } from '../constants/mainContentConstants';


const bookmarks = (state = Map({}), action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    case '@@INIT':
      return fromJS(state);
    default:
      return state;
  }
};

const bookmarksList = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    case '@@INIT':
      return fromJS(state);
    default:
      return state;
  }
};

const tags = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    case '@@INIT':
      return fromJS(state);
    default:
      return state;
  }
};

const bookmarkTag = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    case '@@INIT':
      return fromJS(state);
    default:
      return state;
  }
};


const mainContentReducer = combineReducers({
  bookmarks,
  bookmarksList,
  tags,
  bookmarkTag,
});

export default mainContentReducer;

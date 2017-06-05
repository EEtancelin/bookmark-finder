import { Map } from 'immutable';

export const bookmarks = (state = Map({}), action) => {
  switch (action.type) {
    case 'CREATE_BOOKMARK':
      return (state.set(action.id, Map({ id: action.id, title: action.title, url: action.url })));
    default:
      return state;
  }
};

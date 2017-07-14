import { Map } from 'immutable';

export const bookmarks = (state = Map({}), action) => {
  switch (action.type) {
    case 'CREATE_BOOKMARK':
      return (state.set(action.id,
        Map({
          id: action.id,
          title: action.title,
          url: action.url,
          created_at: action.created_at,
        })));
    case 'REMOVE_TAG':
      const tags = state.getIn([action.bookmarkId, 'tags_a'])
        .filter(tag => tag !== action.tagTitle);
      return (state.setIn([action.bookmarkId, 'tags_a'], tags));
    default:
      return state;
  }
};

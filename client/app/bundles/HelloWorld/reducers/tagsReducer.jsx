import { Map } from 'immutable';

export const tags = (state = Map({}), action) => {
  switch (action.type) {
    case 'CREATE_TAG':
      return state.set(action.tagId, Map({ id :action.tagId, title: action.tagTitle}));
    default:
      return state;
  }
};

// Which are the Ids of all existing tag ?
export const getAllTagsIds = (state) => {
  return (state.getIn(['entities', 'tags']).map(t => t.get('id')).toSet())
};

//
export const getTagById = (state, tagId) => {
  return (state.getIn(['entities', 'tags', tagId]))
};

import { Map } from 'immutable';

export const tags = (state = Map({}), action) => {
  switch (action.type) {
    case 'CREATE_TAG':
      return state.set(action.tagUuid, Map({ uuid :action.tagUuId, title: action.tagTitle}));
    default:
      return state;
  }
};

// Which are the Ids of all existing tag ?
export const getAllTagsIds = (state) => {
  return (state.getIn(['entities', 'bookmarkTag']).map(bt => bt.get('tag_id')).toSet())
};

//
export const getTagById = (state, tagId) => {
  return (state.getIn(['entities', 'tags', tagId]))
};

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
export const getAllTags = (state) => {
  return (state.getIn(['entities', 'bookmarkTag']).map(bt => bt.get('tag_uuid')).toSet())
};

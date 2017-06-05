import { Map } from 'immutable';


// Which are the Ids of all existing tag ?
export const getAll = state => state.getIn(['entities', 'tags']).toOrderedSet();
export const sortTagsIdsByTitle = (state, tagsIds) => {
  return (getAll(state)
    .sortBy(tag => tag.get('title'))
    .map(tag => tag.get('id'))
    .intersect(tagsIds)
  );
}
// Which are the Ids of all existing tag ?
export const getAllTagsIds = (state) => {
  return (state.getIn(['entities', 'tags']).map(t => t.get('id')).toSet())
};

//
export const getTagById = (state, tagId) => {
  return (state.getIn(['entities', 'tags', tagId]))
};

export const tags = (state = Map({}), action) => {
  switch (action.type) {
    case 'CREATE_TAG':
      return state.set(action.tagId, Map({ id :action.tagId, title: action.tagTitle.toLowerCase()}));
    default:
      return state;
  }
};

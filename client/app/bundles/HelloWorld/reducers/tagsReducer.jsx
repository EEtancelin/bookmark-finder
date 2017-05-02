
export const tags = (state = Map({}), action) => {
  switch (action.type) {
    case 'CREATE_TAG':
      return state.set(action.tagUuid, Map({ uuid :action.tagUuId, title: action.tagTitle}));
    default:
      return state;
  }
};

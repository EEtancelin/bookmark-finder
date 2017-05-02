
export const bookmarkTag = (state = Map({}), action) => {
  switch (action.type) {
    case 'ADD_TAG_TO_BOOKMARK':
      const bookmarkTagg = Map({ id: action.bookmarkTagId, tag_uuid: action.tagUuid, bookmark_id: action.bookmark });
      return state.set(action.bookmarkTagId, bookmarkTagg);

    case 'CREATE_TAG':
        const newBookmarkTag =
          Map({
            id: action.bookmarkTagId,
            bookmark_id: action.bookmark,
            tag_uuid: action.tagUuid })
        return (state.set(action.bookmarkTagUuid, newBookmarkTag ))
    case 'REMOVE_BOOKMARK':
      return (state.filterNot( bt =>
        (bt.get('bookmark_id') !== action.bookmark) &&
        (bt.get('tag_uuid') !== action.tag))
        );
    default:
      return state;
  }
};

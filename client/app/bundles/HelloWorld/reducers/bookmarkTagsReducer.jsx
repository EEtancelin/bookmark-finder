import { Map, Set } from 'immutable';

export const getBookmarksIdsForTagsIds = (state, tags) => {
  return (
    state.getIn(['entities', 'bookmarkTag'])
      .filter(bt => tags.has(bt.get('tag_id')))
      .map(bt => bt.get('bookmark_id'))
      .toSet()
  );
};

export const getTagsIdsForBookmarksIds = (state, bookmarksIds) => {
  return (
    state.getIn(['entities', 'bookmarkTag'])
      .filter(bt => bookmarksIds.has(bt.get('bookmark_id')))
      .map(bt => bt.get('tag_id'))
      .toSet()
  );
};

export const getTagIdsForBookmark = (state, bookmarkId) => {
  return (state.getIn(['entities', 'bookmarkTag'])
      .filter(bt => bookmarkId === bt.get('bookmark_id'))
      .map(bt => bt.get('tag_id'))
      .toSet()
  );
};

// Which Tag have one bookmark in Common with the searchedTags ?
export const getTagsIdsWithCommonBookmarkWithTagsIds = (state, tagsIds) => {

  const searchedBookmarksIds = getBookmarksIdsForTagsIds(state, tagsIds);
  const associateTagsIds = getTagsIdsForBookmarksIds(state, searchedBookmarksIds);
  return associateTagsIds;
};


export const bookmarkTag = (state = Map({}), action) => {
  switch (action.type) {
    case 'ADD_TAG_TO_BOOKMARK':
      const bookmarkTagg = Map({ id: action.bookmarkTagId, tag_id: action.tagid, bookmark_id: action.bookmark });
      return state.set(action.bookmarkTagId, bookmarkTagg);

    case 'CREATE_TAG':
      const newBookmarkTag =
        Map({
          id: action.bookmarkTagId,
          bookmark_id: action.bookmark,
          tag_id: action.tagid })
      return (state.set(action.bookmarkTagid, newBookmarkTag))
    case 'REMOVE_BOOKMARK':
      return (state.filterNot(bt =>
        (bt.get('bookmark_id') !== action.bookmark) &&
        (bt.get('tag_uuid') !== action.tag))
      );
    default:
      return state;
  }
};

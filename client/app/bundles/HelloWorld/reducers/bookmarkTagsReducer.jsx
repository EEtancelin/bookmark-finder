import { Map, Set } from 'immutable';

// Whats are the tag associated to all bookmark ?
const getTagsIdsforAllBookmarks = (state) => {
  const extractTags = state.getIn(['entities', 'bookmarkTag'])
    .groupBy(bt => bt.get('bookmark_id'))
    .map(x => x.map(y => y.get('tag_id')))
    .map(z => z.toSet());
  return (state.getIn(['entities', 'bookmarks'])
    .map(b => extractTags.get(b.get('id')) || Set([])));
};

// In how many tags there is each in Bookmark?
export const tagsByBookmarkCount = (state) => {
    const countTags = state.getIn(['entities', 'bookmarkTag'])
      .countBy(bt => bt.get('bookmark_id'));
    return (state.getIn(['entities', 'bookmarks'])
        .map(tag => countTags.get(tag.get('id')) || 0));
};

// In how many bookmark each Tag Appear ?
export const tagsOccurrences = (state) => {
  const countTags = state.getIn(['entities', 'bookmarkTag'])
    .countBy(bt => bt.get('tag_id'));
  return (state.getIn(['entities', 'tags'])
      .map(tag => countTags.get(tag.get('id')) || 0));
};

// Whicht bookmarks contains all the tags ?
export const getBookmarksIdsForTagsIds = (state, tags) => {
  return (getTagsIdsforAllBookmarks(state)
    .filter(tagsList => tagsList.isSuperset(tags))
    .keySeq().toSet()
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

// Which Tag have one bookmark in Common with the searchedTags ?
export const getTagsIdsWithCommonBookmarkWithTagsIds = (state, tagsIds) => {

  const searchedBookmarksIds = getBookmarksIdsForTagsIds(state, tagsIds);
  const associateTagsIds = getTagsIdsForBookmarksIds(state, searchedBookmarksIds);
  return associateTagsIds;
};


export const bookmarkTag = (state = Map({}), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

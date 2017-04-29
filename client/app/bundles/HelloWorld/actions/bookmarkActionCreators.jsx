const uuidV4 = require('uuid/v4');

export const addTagToBookmark = (tagTitle, bookmark) => ({
  type: 'ADD_TAG_TO_BOOKMARK',
  bookmarkTagId: uuidV4(),
  tagTitle,
  bookmark,
});

export const createTag = (tagId, tagTitle, bookmark) => ({
  type: 'CREATE_TAG',
  tagId: uuidV4(),
  bookmarkTagId: uuidV4(),
  tagTitle,
  bookmark,
});

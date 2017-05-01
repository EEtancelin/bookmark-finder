const uuidV4 = require('uuid/v4');

export const addTagToBookmark = (tagUuid, bookmark) => ({
  type: 'ADD_TAG_TO_BOOKMARK',
  bookmarkTagId: uuidV4(),
  tagUuid,
  bookmark,
});

export const createTag = (tagTitle, bookmark) => ({
  type: 'CREATE_TAG',
  tagUuid: uuidV4(),
  bookmarkTagUuid: uuidV4(),
  tagTitle,
  bookmark,
});

const uuidV4 = require('uuid/v4');

export const addTagToBookmark = (bookmark) => ({
  type: 'ADD_TAG_TO_BOOKMARK',
  bookmarkTagId: uuidV4(),
  tagUuidId: uuidV4(),
  bookmark,
});

export const createTag = (tagUuid, tagTitle, bookmark) => ({
  type: 'CREATE_TAG',
  tagUuid: uuidV4(),
  bookmarkTagUuid: uuidV4(),
  tagTitle,
  bookmark,
});

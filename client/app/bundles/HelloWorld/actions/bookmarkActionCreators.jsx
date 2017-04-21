
export const addTagToBookmark = (tagTitle, bookmark) => ({
  type: 'ADD_TAG_TO_BOOKMARK',
  tagTitle,
  bookmark,
});

export const createTag = (tagId, tagTitle, bookmark) => ({
  type: 'CREATE_TAG',
  tagId,
  tagTitle,
  bookmark,
});

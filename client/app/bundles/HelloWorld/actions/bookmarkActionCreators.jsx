const uuidV4 = require('uuid/v4');

export const addTagToBookmark = (tagId, bookmark) => ({
  type: 'ADD_TAG_TO_BOOKMARK',
  bookmarkTagId: uuidV4(),
  tagId,
  bookmark,
});

export const createTag = (tagTitle, bookmark) => ({
  type: 'CREATE_TAG',
  tagId: uuidV4(),
  bookmarkTagId: uuidV4(),
  tagTitle,
  bookmark,
});

export const createBookmark = (values) => ({
  type: 'CREATE_BOOKMARK',
  id: uuidV4(),
  title: values.title,
  url: values.url,
});

const postAddedTag = (tagUuid, bookmark ) => dispatch => {
  dispatch(addTagToBookmark(tagUuid, bookmark))
  return fetch(`https://www.reddit.com/r/${reddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(reddit, json)))
}

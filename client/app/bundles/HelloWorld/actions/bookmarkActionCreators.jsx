import { fetchData } from './mainContentActionCreators';
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

export const createBookmark = values => ({
  type: 'CREATE_BOOKMARK',
  id: uuidV4(),
  title: values.title,
  url: values.url,
});

export const postBookmark = values => (dispatch) => {
  dispatch(createBookmark(values));
  fetch('/api/v1/bookmarks', {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
      'X-User-Email': 'etancelin.edouard+test6@gmail.com',
      'X-User-Token': 'PLoTBvSyjysAZMs4aMBo',
    }),
    body: JSON.stringify({
      bookmark: {
        title: values.title,
        url: values.url,
      }
    })
  });
  dispatch(fetchData());
  dispatch({ type: 'HIDE_ADD_BOOKMARK_FORM' });
};

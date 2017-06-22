
export const postTag = (tag_title, bookmark_id) => (dispatch, getState) => {
  fetch('/api/v1/bookmarks', {
    method: 'post',
    headers: getAPIHeader(getState()),
    body: JSON.stringify({
      bookmark_tag: {
        tag_title: tag_title,
        bookmark_id: bookmark_id,
      }
    })
  });
  dispatch(fetchData());
};

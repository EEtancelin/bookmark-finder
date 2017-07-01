const getAPIHeader = () => {
  return (
    new Headers({
      'Content-Type': 'application/json',
      'X-User-Email': 'edouard.etancelin@gmail.com',
      'X-User-Token': 'dkZdfMnysXsGHsV1GFKA',
    })
  );
};

const postBookmark = function (bookmark) {
  console.log(bookmark);
  fetch('http://localhost:3000/api/v1/bookmarks', {
    method: 'post',
    headers: getAPIHeader(),
    body: JSON.stringify({
      bookmark: {
        title: bookmark.title,
        url: bookmark.url,
      }
    })
  });
};

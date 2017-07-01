const getAPIHeader = () => {
  return (
    new Headers({
      'Content-Type': 'application/json',
      'X-User-Email': 'etancelin.edouard@gmail.com',
      'X-User-Token': 'VpdPxLYHs5XJgHp-s2Ni',
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

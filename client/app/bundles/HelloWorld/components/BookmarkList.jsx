import React from 'react';
import BookmarkContainer from '../containers/BookmarkContainer';

const BookmarkList = ({ bookmarksId, allbookmarks }) => (
  <div>
    {(bookmarksId.count() > 0 ? bookmarksId : allbookmarks).map(bookmarkId => (
        <BookmarkContainer key={bookmarkId} bookmark_id={bookmarkId} />
    ))}
  </div>

);
BookmarkList.PropTypes = {
  bookmarksId: React.PropTypes.array.isRequired,
};
export default BookmarkList;

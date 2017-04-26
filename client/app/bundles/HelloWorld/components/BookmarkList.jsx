import React from 'react';
import PropTypes from 'prop-types';
import BookmarkContainer from '../containers/BookmarkContainer';

const BookmarkList = ({ bookmarksId, allbookmarks }) => (
  <div>
    {(bookmarksId.count() > 0 ? bookmarksId : allbookmarks).map(bookmarkId => (
        <BookmarkContainer key={bookmarkId} bookmarkId={bookmarkId} />
    ))}
  </div>

);
BookmarkList.PropTypes = {
  bookmarksId: PropTypes.any.isRequired,
};
export default BookmarkList;

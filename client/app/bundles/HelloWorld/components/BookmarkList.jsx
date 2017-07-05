import React from 'react';
import PropTypes from 'prop-types';
import BookmarkContainer from '../containers/BookmarkContainer';

const BookmarkList = ({ bookmarksIds }) => (
  <div>
    { bookmarksIds.count() > 0 &&
      bookmarksIds.map(bookmarkId => (
        <BookmarkContainer key={bookmarkId} bookmarkId={bookmarkId} />
      ))
    }
    { bookmarksIds.isEmpty() &&
      <div>No Bookmark Found</div>
    }
  </div>
);
BookmarkList.PropTypes = {
  bookmarksId: PropTypes.any.isRequired,
};
export default BookmarkList;

import React from 'react';
import PropTypes from 'prop-types';
import BookmarkContainer from '../containers/BookmarkContainer';

const BookmarkList = ({ bookmarksId, allbookmarks, isTagsSearched }) => (
  <div>
    { bookmarksId.count() > 0 &&
      bookmarksId.map(bookmarkId => (
        <BookmarkContainer key={bookmarkId} bookmarkId={bookmarkId} />
      ))
    }
    { bookmarksId.isEmpty() && !isTagsSearched &&
      allbookmarks.map(bookmarkId => (
        <BookmarkContainer key={bookmarkId} bookmarkId={bookmarkId} />
      ))
    }
    { bookmarksId.isEmpty() && isTagsSearched &&
      <div>No Bookmark Found</div>
    }
  </div>

);
BookmarkList.PropTypes = {
  bookmarksId: PropTypes.any.isRequired,
};
export default BookmarkList;

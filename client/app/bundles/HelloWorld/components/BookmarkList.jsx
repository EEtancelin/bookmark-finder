import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import BookmarkContainer from '../containers/BookmarkContainer';

const BookmarkList = ({ bookmarksIds, loadMore, hasMore }) => (
    <InfiniteScroll
      pageStart={0}
      loadMore={() => loadMore()}
      hasMore={hasMore}
      loader={<div className="loader">Loading ...</div>}
    >
    { bookmarksIds.count() > 0 &&
      bookmarksIds.map(bookmarkId => (
        <BookmarkContainer key={bookmarkId} bookmarkId={bookmarkId} />
      ))
    }
    { bookmarksIds.isEmpty() &&
      <div>No Bookmark Found</div>
    }
    </InfiniteScroll>

);
BookmarkList.PropTypes = {
  bookmarksId: PropTypes.any.isRequired,
};
export default BookmarkList;

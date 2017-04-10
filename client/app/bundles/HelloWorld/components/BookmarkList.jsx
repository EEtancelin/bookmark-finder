import React from 'react';
import BookmarkContainer from '../containers/BookmarkContainer'

const BookmarkList = ({bookmarks_id_list}) =>(
  <div>
    {bookmarks_id_list.map(bookmark_id => (
      <div><BookmarkContainer bookmark_id={bookmark_id}/></div>
    ))}
  </div>

)
export default BookmarkList;

import React, { PropTypes } from 'react';

const BookmarkBody = ({title, url}) => (

  <div className="bookmark-body">
    <div className="bookmark-title">
      {title}
    </div>
    <div className="bookmark-url">
      {url}
    </div>
  </div>

)

export default BookmarkBody;

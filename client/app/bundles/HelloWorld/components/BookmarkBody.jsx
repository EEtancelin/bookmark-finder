import React, { PropTypes } from 'react';
import { truncate } from 'lodash'; // False Alarm

const BookmarkBody = ({ title, url }) => (

  <div className="bookmark-body">
    <div className="bookmark-title">
      { _.truncate(title, { length: 75 })}
    </div>
    <div className="bookmark-url">
      {_.truncate(url, { length: 85 })}
    </div>
  </div>

)

export default BookmarkBody;

// Absolute Import
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

// Containers
import TagListContainer from '../containers/TagListContainer';
import BookmarkAddTagContainer from '../containers/BookmarkAddTagContainer';

// Components
import BookmarkBody from './BookmarkBody';
import Clipboard from './Clipboard';
import BookmarkThumbnail from './BookmarkThumbnail';

// Component constants
// Style constants
const dateStyle = { textDecoration: 'underline', fontSize: '12px' };

const Bookmark = ({ bookmarkId, tagsIds, title, url, date = '', thumbnail }) => (
  <div className="bookmark" >
    <BookmarkThumbnail />
    <div className="bookmark-inner-wrap">
      <div className="info-top" onClick={() => window.open(url, '_blank')}>
        <BookmarkBody key={bookmarkId} url={url} title={title} />
        <div className="bookmark-left">
          <Clipboard to_copy="clipboard" />
          <div style={dateStyle}>
            {moment(date).format('Do MMM')}
          </div>
        </div>
      </div>

      <div className="bookmark-bottom">
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '3px' }}>
        <TagListContainer tagsIds={tagsIds} bookmark={bookmarkId} />
        <BookmarkAddTagContainer bookmark={bookmarkId}/>
      </div>
      </div>
    </div>
  </div>
);


Bookmark.propTypes = {
  bookmarkId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Bookmark;

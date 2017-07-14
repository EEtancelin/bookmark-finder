// Absolute Import
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Set } from 'immutable';

// Containers
import TagListContainer from '../containers/TagListContainer';
import BookmarkAddTagContainer from '../containers/BookmarkAddTagContainer';

// Components
import BookmarkBody from './BookmarkBody';
import Tag from './Tag';
import Clipboard from './Clipboard';
import BookmarkThumbnail from './BookmarkThumbnail';

// Component constants
// Style constants
const dateStyle = { textDecoration: 'underline', fontSize: '12px' };

const tagsListStyle = {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '8px',
};

// Component
const Bookmark = ({ bookmarkId, tagsIds, tagsTitles, title, url, date = '', thumbnailUrl }) => (
  <div className="bookmark" >
    <BookmarkThumbnail url={thumbnailUrl}  />
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
          <div style={tagsListStyle} >
            {(tagsTitles ? tagsTitles : Set([])).map(tagTitle => (
              <Tag key={tagTitle} title={tagTitle} showRemoveButton={true} bookmark={bookmarkId} />
            ))}
          </div>
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

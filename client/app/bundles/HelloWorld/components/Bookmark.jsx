import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import BookmarkBody from './BookmarkBody';
import TagListContainer from '../containers/TagListContainer';
import Clipboard from './Clipboard';
import BookmarkAddTagContainer from '../containers/BookmarkAddTagContainer';

const Bookmark = ({ bookmarkId, tags, title, url, date = '', thumbnail }) => (
  <div className="bookmark" >
    <div className="center-cover bookmark-img" style={{ backgroundImage: 'url('+ thumbnail + ')' , backgroundSize:'cover', backgroundPosition:'center'}}> </div>
    <div className="bookmark-inner-wrap">
      <div className="info-top" onClick={() => window.open(url, '_blank')}>
        <BookmarkBody key={bookmarkId} url={url} title={title} />
        <div className="bookmark-left">
          <Clipboard to_copy="clipboard" />
          <div style={{ textDecoration: 'underline', fontSize: '12px'}}>
            {moment(date).format('Do MMM')}
          </div>
        </div>
      </div>

      <div className="bookmark-bottom">
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '3px' }}>
        <TagListContainer tags={tags} bookmark={bookmarkId} />
        <BookmarkAddTagContainer bookmark={bookmarkId}/>
      </div>
      </div>
    </div>
  </div>
);


Bookmark.propTypes = {
  bookmarkId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Bookmark;

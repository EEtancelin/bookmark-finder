import React from 'react';
import Immutable from 'immutable';
import BookmarkBody from './BookmarkBody';
import TagListContainer from '../containers/TagListContainer';
import Clipboard from './Clipboard';

const Bookmark = ({ bmId, tags,title, url, date = '' }) => (
  <div className="bookmark">
    <div className="center-cover bookmark-img" style={{ backgroundImage: './Todoist2_files/thumbnail.png' }}> </div>
    <div className="bookmark-inner-wrap">
      <div className="info-top">
        <BookmarkBody key={bmId} url={url} title={title} />
        <div className="bookmark-left">
          <Clipboard to_copy="clipboard" />
          <div className="date">
            {date}
          </div>
        </div>
      </div>

      <div className="bookmark-bottom">
        <TagListContainer tags={tags} />
      </div>
    </div>
  </div>
);


Bookmark.propTypes = {
  bmId: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  date: React.PropTypes.string,
};

export default Bookmark;

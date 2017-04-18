import React from 'react';
import BookmarkBody from './BookmarkBody';
import TagListContainer from '../containers/TagListContainer';
import Clipboard from './Clipboard';
import BookmarkAddTagContainer from '../containers/BookmarkAddTagContainer';

const Bookmark = ({ bmId, tags,title, url, date = '', thumbnail }) => (
  <div className="bookmark">
    <div className="center-cover bookmark-img" style={{ backgroundImage: 'url('+ thumbnail + ')' , backgroundSize:'cover', backgroundPosition:'center'}}> </div>
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
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '3px' }}>
        <TagListContainer tags={tags} />
        <BookmarkAddTagContainer bookmark={bmId}/>
        <input style= {{backgroundColor: 'transparent', flexGrow: '1', border:'0px' }}/>
      </div>
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

import React from 'react';
import BookmarkBody from './BookmarkBody';
import Tag from './Tag';
import Clipboard from './Clipboard';
var FaBeer = require('react-icons/lib/fa/beer');

const Bookmark = ({bookmark_id,title, url, date}) =>(
  <div className='bookmark'>
    <div className="center-cover bookmark-img" style= {{backgroundImage: `./Todoist2_files/thumbnail.png`}}> </div>
    <div className="bookmark-inner-wrap">
      <div className="info-top">
        <BookmarkBody key={bookmark_id} url={url} title={title}/>
        <div className="bookmark-left">
        <Clipboard to_copy="clipboard"/>
          <div className="date">
            {date}
            <FaBeer/>
          </div>
        </div>
      </div>

    <div className="bookmark-bottom">

      <div className="tag-list">
        <Tag title={"movie"} />
      </div>
      </div>
    </div>

  </div>

);
export default Bookmark;

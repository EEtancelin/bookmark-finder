import React from 'react';
import TagContainer from '../containers/TagContainer';
import { Set } from 'Immutable'

const TagList = ({ tags, bookmark }) => (
  <div className="tag-list">
    {(tags ? tags : Set([])).valueSeq().map(tagId => (
      //<TagContainer key={tagId} tagId={tagId} bookmark={bookmark} />
      <div>sdsd</div>
    ))}
  </div>
);

TagList.propTypes = {

};

export default TagList;

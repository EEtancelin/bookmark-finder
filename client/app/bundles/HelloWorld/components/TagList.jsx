import React from 'react';
import TagContainer from '../containers/TagContainer';
import { Set } from 'Immutable'

const TagList = ({ tagIds, bookmark }) => (
  <div className="tag-list">
    {(tagIds ? tagIds : Set([])).valueSeq().map(tagId => (
      <TagContainer key={tagId} tagId={tagId} bookmark={bookmark} />
    ))}
  </div>
);

TagList.propTypes = {

};

export default TagList;

import React from 'react';
import TagContainer from '../containers/TagContainer';

const TagList = ({ tags }) => (
  <div className="tag-list">
    {tags.valueSeq().map(tagId => (
      <TagContainer key={tagId} tagId={tagId} />
    ))}
  </div>
);

TagList.propTypes = {
};

export default TagList;

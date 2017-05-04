import React from 'react';
import TagContainer from '../containers/TagContainer';
import { Set } from 'Immutable'

const TagList = ({ tagsIds, bookmark }) => (
  <div className="tag-list">

    {(tagsIds ? tagsIds : Set([])).map(tagId => (
      <TagContainer key={tagId} tagId={tagId} bookmark={bookmark} />
    ))}
  </div>
);

TagList.propTypes = {

};

export default TagList;

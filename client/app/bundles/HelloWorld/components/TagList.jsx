import React from 'react';
import TagContainer from '../containers/TagContainer';
import { Set } from 'Immutable'

const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: '8px',
};

const TagList = ({ className, tagsIds, bookmark}) => (
  <div className={className} style={style} >
    {(tagsIds ? tagsIds : Set([])).map(tagId => (
      <TagContainer key={tagId} tagId={tagId} bookmark={bookmark} />
    ))}
  </div>
);

TagList.propTypes = {

};

export default TagList;

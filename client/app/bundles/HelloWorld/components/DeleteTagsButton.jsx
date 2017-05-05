import React from 'react';
import Icon from './Icons';

const DeleteTagsButton = ({ deleteTagsFn }) => (
  <div className ="align-center" onClick={deleteTagsFn} style={{ marginRight: '3px' }} >
      <Icon icon={'bin2'}  viewBox={'0 0 1024 1024'} color={'#555555'} />
  </div>
)
export default DeleteTagsButton;

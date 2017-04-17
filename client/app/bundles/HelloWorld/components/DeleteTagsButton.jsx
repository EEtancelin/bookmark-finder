import React from 'react';
import Icon from './Icons';

const DeleteTagsButton = ({ deleteTagsFn }) => (
  <div className ="align-center" onClick={deleteTagsFn} >
      <Icon icon={'bin2'} color={'#555555'} />
  </div>
)
export default DeleteTagsButton;

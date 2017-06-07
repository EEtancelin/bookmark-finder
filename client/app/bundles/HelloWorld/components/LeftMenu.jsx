// Absolute Import
import React from 'react';

// Components
import { Button } from 'semantic-ui-react';

// Style constants
const style = { width: '200px', backgroundColor: '#FAFAFA', padding: '5px' };


const LeftMenu = ({ onShowAddBookmarkFormClick }) => (
  <div style={style}>
    <Button color={'orange'} toggle={true} onClick={onShowAddBookmarkFormClick} >Add Bookmark</Button>
  </div>
)
export default LeftMenu;

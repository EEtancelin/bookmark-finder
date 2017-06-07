// Absolute Import
import React from 'react';

//Relative Import
import { Button } from 'semantic-ui-react';

// Components
import TeamsMenu from './TeamsMenu';

// Style constants
const style = { width: '200px', backgroundColor: '#FAFAFA', padding: '5px' };

const LeftMenu = ({ onShowAddBookmarkFormClick }) => (
  <div style={style}>
    <Button color={'orange'} toggle={true} onClick={onShowAddBookmarkFormClick} >Add Bookmark</Button>
    <TeamsMenu />
  </div>
);
export default LeftMenu;

// Absolute Import
import React from 'react';

// Relative Import

// Components
import TeamsMenu from './TeamsMenu';

// Style constants
const style = { width: '200px', backgroundColor: '#FAFAFA', padding: '5px' };

const LeftMenu = () => (
  <div style={style}>
    <TeamsMenu />
  </div>
);
export default LeftMenu;

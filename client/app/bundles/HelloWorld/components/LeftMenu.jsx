// Absolute Import
import React from 'react';

// Relative Import

// Components
import TeamsMenuContainer from '../containers/TeamsMenuContainer';

// Style constants
const style = { width: '200px', backgroundColor: '#FAFAFA', padding: '5px' };

const LeftMenu = () => (
  <div style={style}>
    <TeamsMenuContainer />
  </div>
);
export default LeftMenu;

// Absolute Import
import React from 'react';
import { List } from 'semantic-ui-react';

// Relative Import

// Components

// Style constants
const style={ marginTop:'8px' };

const TeamsMenu = () => (
  <div style={style} >
    <h2 className="header">My Teams</h2>
    <List >
      <List.Item icon="users" content="Gopala" />
      <List.Item icon="users" content="Testor" />
    </List>
  </div>
);

export default TeamsMenu;

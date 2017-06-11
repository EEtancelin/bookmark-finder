// Absolute Import
import React from 'react';
import { List } from 'semantic-ui-react';

// Relative Import

// Components

// Style constants
const style={ marginTop:'8px' };

const TeamsMenu = ({teams}) => (
  <div style={style} >
    <h2 className="header">My Teams</h2>
    {console.log(teams)}
    <List >
      {teams.map( team =>
        <List.Item icon="users" content={team.get('name')} />
      )}
    </List>
  </div>
);

export default TeamsMenu;

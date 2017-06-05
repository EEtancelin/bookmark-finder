import React from 'react';
import { Button } from 'semantic-ui-react';
import { showAddBookmarkForm } from '../actions/mainContentActionCreators';


const LeftMenu = ({onShowAddBookmarkFormClick}) => (
    <div style={{width: '200px', backgroundColor: '#FAFAFA'}}>
      <ul>
        <li>Coucou</li>
        <li> hello</li>
      </ul>
      <Button color='orange' toggle={true} onClick={onShowAddBookmarkFormClick} >Add Bookmark</Button>
    </div>


)
export default LeftMenu ;

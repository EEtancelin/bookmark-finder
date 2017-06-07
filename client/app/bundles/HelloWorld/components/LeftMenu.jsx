import React from 'react';
import { Button } from 'semantic-ui-react';
import { showAddBookmarkForm } from '../actions/mainContentActionCreators';


const LeftMenu = ({onShowAddBookmarkFormClick}) => (
    <div style={{width: '200px', backgroundColor: '#FAFAFA', padding: '5px'}}>
      <Button color='orange' toggle={true} onClick={onShowAddBookmarkFormClick} >Add Bookmark</Button>
    </div>


)
export default LeftMenu ;

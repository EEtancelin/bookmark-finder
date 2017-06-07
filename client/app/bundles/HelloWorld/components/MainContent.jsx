//Absolutes
import React, { PropTypes } from 'react';
import { Icon } from 'semantic-ui-react';

// Action
import { showAddBookmarkForm } from '../actions/mainContentActionCreators';

// Component
import VisibleBookmarkList from '../containers/VisibleBookmarkList';
import LeftMenu from './LeftMenu';

// Container
import SearchBoxContainer from '../containers/SearchBoxContainer';
import AddBookmarkContainer from '../containers/AddBookmarkContainer';

const style = {
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#FAFAFA',
  justifyContent: 'center',
  minHeight: '100vh'
}
const invisibleSpaceStyle = { marginBottom : '4px' };

const HomePage = ({ name, updateName, onShowAddBookmarkFormClick }) => (
  <div style={style}>
    <LeftMenu onShowAddBookmarkFormClick={onShowAddBookmarkFormClick} />
    <div style={{ width: '596px', padding: '15px', backgroundColor: 'white'}}>
      <SearchBoxContainer />
      <div className="section_overdue">
        <div style={{borderBottom: '1px solid #f0f0f0', display: "flex", justifyContent: 'space-between'}}>
          <h2 className="header">My Bookmarks</h2>
          <div onClick={onShowAddBookmarkFormClick} style={{cursor: "pointer"}}>
            Add
            <Icon name="plus" />
          </div>
        </div>

      <div className="invisible_space" style={invisibleSpaceStyle}/>
        <AddBookmarkContainer />
        <VisibleBookmarkList />
      </div>
    </div>
  </div>
);

HomePage.propTypes = {
};

export default HomePage;

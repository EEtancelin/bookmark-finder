import React, { PropTypes } from 'react';
import VisibleBookmarkList from '../containers/VisibleBookmarkList'
import SearchBoxContainer from '../containers/SearchBoxContainer'
import LeftMenu from './LeftMenu'
import AddBookmarkContainer from '../containers/AddBookmarkContainer'
import { showAddBookmarkForm } from '../actions/mainContentActionCreators';

const onShowAddBookmarkFormClick = () => {console.log('chat')}

const HomePage = ({ name, updateName, onShowAddBookmarkFormClick }) => (
    <div style={{display: 'flex', flexDirection:'row', backgroundColor: '#FAFAFA', justifyContent: 'center', minHeight: '100vh'}}>
    <LeftMenu onShowAddBookmarkFormClick={onShowAddBookmarkFormClick} />
    <div style={{ width: '596px', padding: '15px', backgroundColor: 'white'}}>
      <SearchBoxContainer />
      <AddBookmarkContainer />
      <div className="section_overdue">
      <h2 className="header">Mes marques Pages</h2>
        <div className="invisible_space"></div>
          <VisibleBookmarkList />
      </div>
    </div>
  </div>
);

HomePage.propTypes = {
};

export default HomePage;

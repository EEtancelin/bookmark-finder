import React, { PropTypes } from 'react';
import VisibleBookmarkList from '../containers/VisibleBookmarkList'
import SearchBoxContainer from '../containers/SearchBoxContainer'
import LeftMenu from './LeftMenu'

const HomePage = ({ name, updateName }) => (
    <div style={{display: 'flex', flexDirection:'row', backgroundColor: '#FAFAFA', justifyContent: 'center', minHeight: '100vh'}}>
    <LeftMenu />
    <div style={{ width: '596px', padding: '15px', backgroundColor: 'white'}}>
      <SearchBoxContainer />
      <div className="section_overdue">
      <h2 className="header">En retard </h2>
        <div className="invisible_space"></div>
          <VisibleBookmarkList />
      </div>
    </div>
  </div>
);

HomePage.propTypes = {
};

export default HomePage;

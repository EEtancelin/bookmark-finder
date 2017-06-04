import React, { PropTypes } from 'react';
import VisibleBookmarkList from '../containers/VisibleBookmarkList'
import SearchBoxContainer from '../containers/SearchBoxContainer'
import LeftMenu from './LeftMenu'
import AddBookmarkForm from './AddBookmarkForm'
import { Button } from 'semantic-ui-react'

const HomePage = ({ name, updateName }) => (
    <div style={{display: 'flex', flexDirection:'row', backgroundColor: '#FAFAFA', justifyContent: 'center', minHeight: '100vh'}}>
    <LeftMenu />
    <div style={{ width: '596px', padding: '15px', backgroundColor: 'white'}}>
      <SearchBoxContainer />
      <AddBookmarkForm />
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

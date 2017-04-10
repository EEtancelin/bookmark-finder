import React, { PropTypes } from 'react';
import VisibleBookmarkList from '../containers/VisibleBookmarkList'

const MainContent = ({ name, updateName }) => (
  <div>
    <VisibleBookmarkList />
  </div>
);

MainContent.propTypes = {
};

export default MainContent;

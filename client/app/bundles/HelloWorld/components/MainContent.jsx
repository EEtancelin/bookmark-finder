import React, { PropTypes } from 'react';
import VisibleBookmarkList from '../containers/VisibleBookmarkList'
import SearchBox from './SearchBox'

const MainContent = ({ name, updateName }) => (
  <div>
    <SearchBox />
    <div className="section_overdue">
    <h2 className="header">En retard </h2>
    <ul className="items priority_list">
    <li className="task_item item_76105126 not_shared menu_clickable priority_1 agenda_item indent_1" >
      <div className="invisible_space"></div>
      <VisibleBookmarkList />
    </li>
  </ul>
</div>
  </div>
);

MainContent.propTypes = {
};

export default MainContent;

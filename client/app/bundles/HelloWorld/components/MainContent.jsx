import React, { PropTypes } from 'react';
import VisibleBookmarkList from '../containers/VisibleBookmarkList'
import SearchBoxContainer from '../containers/SearchBoxContainer'

const HomePage = ({ name, updateName }) => (

  <div style={{display: 'flex', flexDirection:'row', backgroundColor: '#FAFAFA', justifyContent: 'center', minHeight: '100vh'}}>
  <div style={{width: '200px', backgroundColor: '#FAFAFA'}}>
    <ul>
      <li>Coucou</li>
      <li> hello</li>
    </ul>
  </div>
  <div style={{ width: '596px', padding: '15px', backgroundColor: 'white'}}>
    <SearchBoxContainer />
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
</div>
);

HomePage.propTypes = {
};

export default HomePage;

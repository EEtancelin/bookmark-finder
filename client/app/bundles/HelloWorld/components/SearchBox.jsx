import React from 'react';
import Immutable from 'immutable';
import TagList from './TagList';

const SearchBox = () => (
  <div>

    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        name="search"
        placeholder="Enter you're tag"
        autoFocus="true"
      />
    </div>
    <TagList tags={Immutable.fromJS(['1', '2', '3'])} />
  </div>
);
export default SearchBox;

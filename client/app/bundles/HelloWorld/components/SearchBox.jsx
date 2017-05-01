import React from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import TagListContainer from '../containers/TagListContainer';
import DeleteTagsButton from './DeleteTagsButton';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.onUserInputChange = this.onUserInputChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onUserInputChange(e) {
    const userInput = e.target.value;
    this.props.onSearchBoxValueChange(this.props.tags, userInput);
  }

  // Listen Backslach to delete the last Tag.
  onKeyDown(event) {
     if (event.keyCode === 8 && this.props.inputValue === "") {
       const searchedTags = this.props.searchedTags.butLast();
       this.props.onSearchedTagsUpdate(searchedTags);
     }
  }


  // Took a string and find the bookmarks where the title === string
  render() {
    return (
      <div style={{marginBottom: '13px'}}>
        <div className="search-bar" >
          <TagListContainer className={'input-tags-list'} tags={this.props.searchedTags} />
          <input
            className="search-input"
            type="text"
            name="search"
            placeholder="Enter you're tag"
            autoFocus="true"
            value={this.props.inputValue}
            onChange={this.onUserInputChange}
            onKeyDown={this.onKeyDown}
          />
          <DeleteTagsButton deleteTagsFn={this.props.onDeleteTagsClick} viewBox="0 0 7 16" />
        </div>
        <div style= {{marginTop: '8px' }}>
        <TagListContainer tags={this.props.proposedTags} />
      </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  tags: PropTypes.instanceOf(Immutable.Map).isRequired,
  proposedTags: PropTypes.instanceOf(Immutable.Set).isRequired,
  searchedTags: PropTypes.instanceOf(Immutable.Set).isRequired,
  onSearchBoxValueChange: PropTypes.func.isRequired,
};

export default SearchBox;

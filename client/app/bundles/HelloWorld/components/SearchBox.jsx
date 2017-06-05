import React from 'react';
import immutable from 'immutable';
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
    this.props.onSearchBoxValueChange(this.props.tags, e.target.value);
  }

  // Listen Backslach to delete the last Tag.
  onKeyDown(event) {
    if (event.keyCode === 8 && this.props.inputValue === '') {
      this.props.onDeleteLastSearchedTag();
    }
  }


  // Took a string and find the bookmarks where the title === string
  render() {
    return (
      <div style={{marginBottom: '13px'}}>
        <div className="search-bar" >
          <TagListContainer className={'input-tags-list'} tagsIds={this.props.searchedTagsIds}  />
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
        <div style={{ marginTop: '8px', height: '40px' }}>
          <TagListContainer className={'proposed-tags-list'} tagsIds={this.props.proposedTagsIds} flexWrap={'wrap'} />
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  tags: PropTypes.instanceOf(immutable.Map).isRequired,
  proposedTagsIds: PropTypes.instanceOf(immutable.Set).isRequired,
  onSearchBoxValueChange: PropTypes.func.isRequired,
  onDeleteLastSearchedTag: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default SearchBox;

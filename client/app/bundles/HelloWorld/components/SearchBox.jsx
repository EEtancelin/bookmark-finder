import React from 'react';
import immutable from 'immutable';
import { Set } from 'immutable'
import PropTypes from 'prop-types';
import TagListContainer from '../containers/TagListContainer';
import DeleteTagsButton from './DeleteTagsButton';

// Components
import Tag from './Tag';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.onUserInputChange = this.onUserInputChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.getGoogleQueryUrl = this.getGoogleQueryUrl.bind(this);
  }

  onUserInputChange(e) {
    this.props.onSearchBoxValueChange(this.props.tagsTitles, e.target.value);
  }

  // Listen Backslach to delete the last Tag.
  // Listen enter to run a google Query.
  getGoogleQueryUrl(props){
    return(`http://www.google.fr/search?q=${this.props.getGoogleQueryString(this.props.inputValue)}`)
  }

  // Listen Backslach to delete the last Tag.
  // Listen enter to run a google Query.
  onKeyDown(event) {
    if (event.keyCode === 8 && this.props.inputValue === '') {
      this.props.onDeleteLastSearchedTag();
    }
    if (event.keyCode === 13) {
      window.open(this.getGoogleQueryUrl(this.props), '_blank')
    }
  }

  render() {
    return (
      <div style={{marginBottom: '13px'}}>
        <div className="search-bar" >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', flexDirection: 'row', marginLeft: '8px' }} >
            {(this.props.searchedTagsTitles ? this.props.searchedTagsTitles : Set([])).map(tagTitle => (
              <Tag key={tagTitle}
                title={tagTitle}
                showRemoveButton={true}
               />
            ))}
          </div>
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
        <div style={{ marginTop: '8px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', marginLeft: '8px' }} >
            {(this.props.proposedTagsTitles ? this.props.proposedTagsTitles : Set([])).map(tagTitle => (
              <Tag key={tagTitle}
                title={tagTitle}
                showRemoveButton={true}
               />
            ))}
          </div>
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

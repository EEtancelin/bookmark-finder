import React from 'react';
import TagList from './TagList';
import DeleteTagsButton from './DeleteTagsButton';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };
    this.extractTagId = this.extractTagId.bind(this);
    this.onUserInputChange = this.onUserInputChange.bind(this);
  }

  onUserInputChange(e) {
    const userInput = e.target.value;
    const extractedTag = this.extractTagId(userInput, this.props.tags);
    const searchedTags = this.props.searchedTags.concat(extractedTag);
    const isTagExtracted = extractedTag.count() > 0;
    this.props.onSearchBoxValueChange(userInput);

    isTagExtracted ? (this.props.onSearchedTagsUpdate(searchedTags)) : '';

    this.setState({
      userInput: (isTagExtracted || userInput === ' ') ? '' : userInput,
    });
  }

  // Took a user input a return the tags which have been selected.
  extractTagId(string) {
    return (this.props.tags.filter(t => t.get('title') === string)
    .map(t => t.get('id'))
    .toSet());
  }

  // Took a string and find the bookmarks where the title === string
  render() {
    return (
      <div>
        <div className="search-bar" >
          <TagList className={'input-tags-list'} tags={this.props.searchedTags} />
          <input
            className="search-input"
            type="text"
            name="search"
            placeholder="Enter you're tag"
            autoFocus="true"
            value={this.state.userInput}
            onChange={this.onUserInputChange}
          />
          <DeleteTagsButton deleteTagsFn={this.props.onDeleteTagsClick} viewBox="0 0 7 16" />
        </div>
        <div style= {{marginTop: '8px' }}>
        <TagList tags={this.props.proposedTags} />
      </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  tags: React.PropTypes.object.isRequired,
  proposedTags: React.PropTypes.object.isRequired,
  searchedTags: React.PropTypes.object.isRequired,
  onSearchBoxValueChange: React.PropTypes.function,
};

export default SearchBox;

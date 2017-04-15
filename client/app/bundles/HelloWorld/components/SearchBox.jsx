import React from 'react';
import Immutable from 'immutable';
import TagList from './TagList';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      bookmarkTag: props.bookmarkTag,
      searchedTags: Immutable.Set([]),
      tags: props.tags,
    };
    this.extractTagId = this.extractTagId.bind(this);
    this.onUserInputChange = this.onUserInputChange.bind(this);
    this.getProposedTags = this.getProposedTags.bind(this);
  }

  onUserInputChange(e) {
    const userInput = e.target.value;
    const extractedTag = this.extractTagId(userInput, this.state.tags);
    this.setState({
      userInput: (extractedTag.count() > 0 || userInput === ' ') ? '' : userInput,
      searchedTags: this.state.searchedTags.concat(extractedTag)
    });
    extractedTag.count() > 0 ? (this.props.onSearchedTagsAdded(extractedTag.first())) : '';
  }

  getProposedTags() {
    return (this.props.bookmarkTag.map(bt => bt.get('tag')).toSet());
  }

  extractTagId(string) {
    return (this.state.tags.filter(t => t.get('title') === string)
    .map(t => t.get('id'))
    .toSet());
  }

  // Took a string and find the bookmarks where the title === string
  render() {
    return (
      <div>
        <div className="search-bar" >
          <TagList className={'input-tags-list'} tags={this.state.searchedTags} />
          <input
            className="search-input"
            type="text"
            name="search"
            placeholder="Enter you're tag"
            autoFocus="true"
            value={this.state.userInput}
            onChange={this.onUserInputChange}
          />
        </div>
        <div >
          <TagList tags={this.getProposedTags()} />
        </div>
      </div>
    );
  }
}
export default SearchBox;

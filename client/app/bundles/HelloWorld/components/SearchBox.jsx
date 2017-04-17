import React from 'react';
import { Set } from 'immutable';
import TagList from './TagList';
import Icon from './Icons'

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
    };
    this.extractTagId = this.extractTagId.bind(this);
    this.onUserInputChange = this.onUserInputChange.bind(this);
    this.getProposedTags = this.getProposedTags.bind(this);
    this.getAllTags = this.getAllTags.bind(this);
    this.hasSearchedTags = this.hasSearchedTags.bind(this);
    this.getBookmarksAssociateToTags = this.getBookmarksAssociateToTags.bind(this);
    this.getTagsAssociateToBookmarks = this.getTagsAssociateToBookmarks.bind(this);
  }

  onUserInputChange(e) {
    const userInput = e.target.value;
    this.props.onUserInputChange(userInput);
    const extractedTag = this.extractTagId(userInput, this.props.tags);
    const searchedTags = this.props.searchedTags.concat(extractedTag);
    const isTagExtracted = extractedTag.count() > 0;

    this.setState({
      userInput: (isTagExtracted || userInput === ' ') ? '' : userInput,
    });

    isTagExtracted ? (this.props.onSearchedTagsUpdate(searchedTags)) : '';
  }

  // True if searchedTags List is not empty
  hasSearchedTags() {
    return (this.props.searchedTags.count() > 0);
  }

  // Return the tags to propose depending of there is searchedTags or not.
  getProposedTags() {
    return (this.hasSearchedTags() ? this.getAssociatedTags() :this.getAllTags())
  }

  // Return the tags of the bookmarks associated with the searched tags.
  getAssociatedTags() {
    const bookmarkTag = this.props.bookmarkTag;
    const searchedTags = this.props.searchedTags;
    const associateBookmarks = this.getBookmarksAssociateToTags(bookmarkTag,searchedTags);
    return (this.getTagsAssociateToBookmarks(bookmarkTag, associateBookmarks))
  }
  getBookmarksAssociateToTags(bookmarkTag,tags){
    return(bookmarkTag
      .filter(bt => tags.has(bt.get('tag')))
      .map(bt => bt.get('bookmark'))
      .toSet()
    )
  }
  getTagsAssociateToBookmarks(bookmarkTag,bookmarks){
    return (bookmarkTag
      .filter(bt => bookmarks.has(bt.get('bookmark')))
      .map(bt => bt.get('tag'))
      .toSet()
    );
  }

  getAllTags(){
    return (
      this.props.bookmarkTag.map(bt => bt.get('tag')).toSet()
    );
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
          <TagList className={'input-tags-list'} tags={ this.props.searchedTags} />
          <input
            className="search-input"
            type="text"
            name="search"
            placeholder="Enter you're tag"
            autoFocus="true"
            value={this.state.userInput}
            onChange={this.onUserInputChange}
          />
        <div className ="align-center" onClick={this.props.onDeleteTagsClick} >
            <Icon icon={'bin2'} color={'#555555'} />
        </div>
        </div>
        <div >
          <TagList tags={this.getProposedTags()} />
        </div>
      </div>
    );
  }
}
export default SearchBox;

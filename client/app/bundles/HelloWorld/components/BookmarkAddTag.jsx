import React from 'react';
import Icons from './Icons';

class BookmarkAddTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
    };
    this.onAddTagCLick = this.onAddTagCLick.bind(this);
  }
  onAddTagCLick() {
    this.setState({ isEditing: true });
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        { this.state.isEditing ? (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <input
              className="search-input"
              type="text"
              name="search"
              placeholder="Tag this Bookmark"
              autoFocus="true"
              onChange={this.onUserInputChange}
            />
          <div style={{ backgroundColor: 'blue' }}>
            <Button
onPress={onPressLearnMore}
title="Learn More"
color="#841584"
accessibilityLabel="Learn more about this purple button"
/>
            </div>
          </div>
      ) :
      (
        <div onClick={this.onAddTagCLick} style={{ marginLeft: '-5px', marginBottom: '-6px' }} >
          <Icons icon={'add'} viewBox={'0 0 7 16'} />
        </div>
      )
      }
      </div>
    );
  }
}

export default BookmarkAddTag;

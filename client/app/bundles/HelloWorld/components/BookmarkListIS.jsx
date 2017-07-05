import React, { PropTypes } from 'react'
import BookmarkList from '../components/BookmarkList';


/// This compoent manage the infinite scroll for the Bookmarks
class BookmarkListIS extends React.Component {
  constructor(props) {
    super(props);
    this.getItems = this.getItems.bind(this)
    this.onLoadMore = this.onLoadMore.bind(this)
    this.state = { displayed: 5};
  }

  getItems() {
    return (this.props.bookmarksIds.take(this.state.displayed))
  }
  onLoadMore() {
    this.setState({ displayed: this.state.displayed + 5 })
  }


  render() {
    return(
      <BookmarkList
        bookmarksIds={this.getItems()}
        loadMore={this.onLoadMore}
        hasMore={ this.state.displayed <= this.props.bookmarksIds.count()}
      />
    )
  }
}

export default BookmarkListIS;
